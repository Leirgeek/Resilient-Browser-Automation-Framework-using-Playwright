import {test, expect} from '@playwright/test';

//crrate an item, assert the +/- of the counter, delete the item
test('create a user', async ({page})=>{
    //access the page
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.fill('.new-todo','james');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li').nth(0)).toHaveText('james');
    await page.fill('.new-todo', 'lewis');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li').nth(1)).toHaveText('lewis');
    //await page.getByPlaceholder('What needs to be done?').fill('James');
   // await expect(page.locator('.todo-list li')).toHaveText('james');
   // await page.locator('#todo-count').expect(page.getByText('4'));


})