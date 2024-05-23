// Отримання елемента кнопки
const themeToggleButton = document.getElementById('theme-toggle');

// Додавання слухача подій для кнопки
themeToggleButton.addEventListener('click', () => {
    // Перемикання класу "dark-theme" на елементі body
    document.body.classList.toggle('dark-theme');
    
    // Збереження стану теми у Local Storage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});

// Перевірка стану теми при завантаженні сторінки
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}