A simple TODO list application built with PHP and MySQL, running on a local server using XAMPP. This project demonstrates basic server-side scripting, database operations, and simple data fetching for frontend use.

🔧 Features
✅ Add new tasks
📄 View all tasks
💾 Store tasks in a MySQL database
🖥 Runs locally with XAMPP

Project Structure
.
├── addTodo.php         # Script to add a new task to the database
├── getTodos.php        # Script to fetch all tasks from the database
├── debug.txt           # Debug file showing stored task entries
└── README.md           # Project documentation

⚙️ Installation & Usage
1. Install XAMPP and start Apache and MySQL.
2. Import the database:
  Open phpMyAdmin via http://localhost/phpmyadmin.
  Create a database (e.g., todo_app) and a table with the required fields (e.g., title, date).
3. Place files in the XAMPP server directory:
4. Copy all project files to htdocs/your_project_folder.
5. Run the project:
6. Access it via http://localhost/your_project_folder.

🛠 Technologies Used
PHP
MySQL
XAMPP (Apache + MySQL)
HTML
CSS
JS
