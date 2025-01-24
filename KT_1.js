// Создаем массив с 30 случайными числами
let numbers = Array.from({length: 30}, () => Math.floor(Math.random() * 100));

// Функция для создания и заполнения таблицы
function createTable() {
    const table = document.getElementById('numberTable');
    table.innerHTML = ''; // Очищаем таблицу
    
    for (let i = 0; i < 5; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            const index = i * 6 + j;
            if (index < numbers.length) {
                cell.textContent = numbers[index];
                if (numbers[index] >= 50) {
                    cell.classList.add('orange');
                }
            }
        }
    }
}

// Функция добавления нового числа
function addNumber() {
    const newNumber = Math.floor(Math.random() * 100);
    numbers.push(newNumber);
    // Если чисел больше 30, удаляем первое
    if (numbers.length > 30) {
        numbers.shift();
    }
    createTable();
}

// Создаем начальную таблицу при загрузке страницы
window.onload = createTable;
