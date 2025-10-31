import {test, expect} from '@playwright/test';

//crrate an item, assert the +/- of the counter, delete the item
test('create a user', async ({page})=>{
    //access the page
    await page.goto('https://demo.playwright.dev/todomvc');
    const counter = page.locator('.todo-count');
    await page.fill('.new-todo','james');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li').nth(0)).toHaveText('james');
    //await expect(counter).toContainText('1 item left');
    await page.fill('.new-todo', 'lewis');
    await page.keyboard.press('Enter');
    await expect(page.locator('.todo-list li').nth(1)).toHaveText('lewis');
    
    //assert the count increament 
   await expect(page.locator('.todo-count')).toHaveText('2 items left');


})