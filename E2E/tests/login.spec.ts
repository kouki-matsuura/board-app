
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObject/loginPage';

test("ログインできているか", async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("user", "password");
    await expect(page).toHaveURL("/");
})