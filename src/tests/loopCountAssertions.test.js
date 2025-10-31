import {test, expect} from '@playwright/test'; 

//test script to create items from an array and assert them
test('Create a an array and assert the items and the counter', async({page})=>{
    const todo_list=['james', 'lewis','julius', 'Hall'];

    await page.goto('https://demo.playwright.dev/todomvc/#/');
    //define the selectors
    const counter= page.locator('.count_todo');
    const input= page.locator('.new_todo');
    const listItem=page.locator('.todo_list li');
    //let declares i
    for (let i = 0; i < todo_list.length; i++){
        //Enter the indicated values
        await page.fill(todo_list[i]);
        //press enter after each entry 
        await page.keyboard.press('Enter');

        //assert each array entry 
        await expect(page.locator(listItem).nth(i)).toHaveText(todo_list[i]);

        //assert the counter increameant 
        await expect(counter).toContainText('$(i+1) item');

    }

})