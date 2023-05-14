import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page : Page;
    readonly name : Locator;
    readonly password : Locator;
    readonly loginButton : Locator;

    constructor(page : Page) {
        this.page = page;
        this.name = page.getByLabel("名前");
        this.password = page.getByLabel("パスワード");
        this.loginButton = page.getByRole('button', { name: 'ログイン' });
    }

    async goto() {
        await this.page.goto("/login")
    }

    async waitForPageContents() {
        await this.name.waitFor()
        await this.password.waitFor()
        await this.loginButton.waitFor()
    }

    async login(name:string, password: string) {
        await this.name.fill(name)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}