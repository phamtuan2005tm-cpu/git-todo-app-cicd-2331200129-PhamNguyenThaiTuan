const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        // TODO: Call the addTodo method with some text.
        service.addTodo('Learn Unit Testing with Thai Tuan');
    
        // Kiểm tra xem mảng todos có độ dài là 1 không
        expect(service.todos.length).toBe(1);
        // Kiểm tra nội dung có đúng không
        expect(service.todos[0].text).toBe('Learn Unit Testing with Thai Tuan');
        // Then, assert that the service's todos array has a length of 1.
        // Assert that the text of the first todo matches the input text.
    });

    test('should toggle the completed state of a todo', () => {
        // TODO: First, add a todo.
        // Bước 1: Thêm một công việc mới (mặc định completed sẽ là false)
    service.addTodo('Học cách viết Test');
    const todoId = service.todos[0].id; // Lấy ID của công việc vừa thêm

    // Bước 2: Thực hiện hành động Toggle
    service.toggleTodoComplete(todoId);

    // Bước 3: Xác nhận trạng thái đã chuyển sang true
    expect(service.todos[0].completed).toBe(true);

    // Bước 4: (Tùy chọn) Toggle thêm lần nữa để xem nó có về false không
    service.toggleTodoComplete(todoId);
    expect(service.todos[0].completed).toBe(false);
        // Then, get its ID and call the toggleTodoComplete method.
        // Assert that the 'completed' property of that todo is now true.
        // Call toggleTodoComplete again and assert that it's false.
    });

    test('should remove a todo', () => {
        // TODO: Add a todo.
        // Get its ID and call the removeTodo method.
        // Assert that the service's todos array is now empty (length of 0).
    });

    test('should not add a todo if text is empty', () => {
        // TODO: Call addTodo with an empty string.
        // Assert that the todos array still has a length of 0.
    });
});
