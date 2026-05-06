const { test, expect, _electron: electron } = require('@playwright/test');

test('End-to-end user workflow', async () => {
    // Launch the Electron app
    const electronApp = await electron.launch({ args: ['.'] });
    const window = await electronApp.firstWindow();

    const taskText = 'My new E2E test task';

    // --- Task 1: Add a new todo item ---
    const input = window.locator('#todo-input');
    const addButton = window.locator('#add-todo-btn');

    await input.fill(taskText);
    await addButton.click();

    // --- Task 2: Verify the todo item was added ---
    const todoItem = window.locator('.todo-item').first();
    await expect(todoItem).toBeVisible();
    await expect(todoItem.locator('.todo-text')).toHaveText(taskText);

    // --- Task 3: Mark the todo item as complete ---
    const checkbox = todoItem.locator('input[type="checkbox"]');
    await checkbox.check();
    await expect(todoItem).toHaveClass(/completed/);

    // --- Task 4: Delete the todo item ---
    const deleteButton = todoItem.locator('.delete-btn');
    await deleteButton.click();
    await expect(todoItem).not.toBeVisible();


    // Close the app
    await electronApp.close();
});
