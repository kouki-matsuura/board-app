import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import bcrypt from 'bcrypt'
import { db } from "../../lib/prisma";

export const actions: Actions = {
    register : async ({request}) => {
        const data = await request.formData();
        const name = data.get("name");
        const password = data.get("password");
        
        if (typeof name !== "string" ||typeof password !== "string" || !name || !password) {
            return fail(400, { invalid: true })
        }

        const user = await db.user.findUnique({
            where: {name}
        })

        if (user) {
            return fail(400, { invalid: true })
        }
        
        await db.user.create({
            data: {
                name,
                password : await bcrypt.hash(password, 10),
                authToken: crypto.randomUUID(),
            },
        })
    throw redirect(303, '/login')
    }
}