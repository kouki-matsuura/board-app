import { test, expect} from '@playwright/test';

 test.beforeEach(async ({ page}) => {
   //初期動作としてログイン画面に移動
   await page.goto('http://localhost:5173/login')
 })

test ('新規タブで新規登録画面を開く', async ({page, context}) => {
    await page.goto('http://localhost:5173/login')
    await page.screenshot({path: "login.png"})
    const page1 = await context.newPage(); 
    console.log("test11")
    await page1.goto('http://localhost:5173/register')
    await page1.screenshot({path: "register.png"})
    expect(page.getByText("新規登録")).toBeTruthy();
})