// 🟩 Получаем задачи с сервера при загрузке страницы
let todoList = [];

fetch('getTodos.php') // 🟩
  .then(response => response.json()) // 🟩
  .then(data => {                    // 🟩
    todoList = data;                // 🟩
    renderTodoList();              // 🟩
  });                              // 🟩

function renderTodoList() {
    let todoListHTML = '';

    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { id, name, dueDate } = todoObject; // 🟩 добавлен id
        const html = `
        <div>
          ${name}
        </div>
        <div>
          ${dueDate}
        </div>
        <button onclick="
          deleteTodo(${id}); // 🟩 теперь удаляем с сервера
        " 
        class="delete-button">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-div').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-search-bar');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    // 🟩 Отправляем новую задачу на сервер
    fetch('addTodo.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `title=${encodeURIComponent(name)}&date=${encodeURIComponent(dueDate)}`
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            // 🟩 после добавления — загружаем заново весь список
            return fetch('getTodos.php');
        } else {
            alert('Ошибка добавления: ' + result.error);
        }
    })
    .then(response => response.json())
    .then(data => {
        todoList = data;
        renderTodoList();
    });

    inputElement.value = '';
    dateInputElement.value = '';
}

function deleteTodo(id) {
    // 🟩 Отправляем на сервер команду удалить
    fetch(`deleteTodo.php?id=${id}`)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          // 🟩 загружаем обновлённый список
          return fetch('getTodos.php');
        } else {
          alert('Ошибка удаления: ' + result.error);
        }
      })
      .then(response => response.json())
      .then(data => {
        todoList = data;
        renderTodoList();
      });
}

function OnKeyDown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
