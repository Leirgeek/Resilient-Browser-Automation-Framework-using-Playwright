import { test, expect } from '@playwright/test';
import { readFile } from 'fs/promises';

 
test('Create todos and verify counter increments dynamically', async ({ page }) => {
  
  // load JSON using a file URL inside the async test
  const todosPath = new URL('./data/todos.json', import.meta.url);
  const todoData = JSON.parse(await readFile(todosPath, 'utf-8'));

    // Navigate to the TodoMVC demo app
  await page.goto('https://demo.playwright.dev/todomvc/#/');

  // Define selectors
  const counter = page.locator('.todo-count');
  const input = page.locator('.new-todo');
  const listItem = page.locator('.todo-list li');

  // Loop through each todo in the loaded JSON array
  for (let i = 0; i < todoData.todos.length; i++) {
    const todo = todoData.todos[i];

    // Enter each todo value and press Enter to add it
    await input.fill(todo);
    await page.keyboard.press('Enter');

    // Verify the todo appears in the correct position
    await expect(listItem.nth(i)).toHaveText(todo);

    // Handle pluralization for the counter display
    // The TodoMVC app displays “1 item left” or “X items left”
    const expectedCountText =
      i + 1 === 1 ? '1 item left' : `${i + 1} items left`;

    // Assert the counter reflects the correct number of items
    await expect(counter).toContainText(expectedCountText, {
      timeout: 2000, // wait up to 2 seconds for UI update
    });

    // Optional logging for visibility during test runs
    console.log(` Added "${todo}" → Counter now shows: ${expectedCountText}`);
  }

  // Final verification: confirm total number of list items
  await expect(listItem).toHaveCount(todoData.todos.length);
});
