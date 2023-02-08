import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, cookies, locals }) => {
    const session = await cookies.get('session');
    if(!session && (url.pathname !== '/login' && url.pathname!== '/register')) {
        throw redirect(303, '/login')
    }
    return {
        user:locals.user
    }
}