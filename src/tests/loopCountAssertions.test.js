import { test, expect } from '@playwright/test';

// Test script to create items from an array and assert the items and the counter
test('Create an array and assert the items and the counter', async ({ page }) => {
  const todo_list = ['james', 'lewis', 'julius', 'Hall'];

  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Define selectors
  const counter = page.locator('.todo-count');
  const input = page.locator('.new-todo');
  const listItem = page.locator('.todo-list li');

  // Loop through items
  for (let i = 0; i < todo_list.length; i++) {
    // Enter each value
    await input.fill(todo_list[i]);
    await page.keyboard.press('Enter');

    // Assert the new todo appears in the list
    await expect(listItem.nth(i)).toHaveText(todo_list[i]);

    // Assert the counter increments properly
    await expect(counter).toContainText(`${i + 1} item`);
  }
});
