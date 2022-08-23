/* Новые элементы должны добавляться в список по нажатию на Enter */
const sendInput = document.querySelector('#input');
const items = document.querySelector('.items');

input.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {
        addNewList()
    }
});

function addNewList() {
    const list = document.createElement('div')
    list.textContent = input.value;

    /* Пустые элементы не должны добавляться */

    if (input.value != '') {
        items.append(list);
    }
    /* Если кликнуть на элемент списка, он зачеркивается */

    /* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */
    list.addEventListener('click', (event) => {
            list.classList.toggle('done')
        })
        /* Очищать input после добавления нового элемента в список */
    sendInput.value = '';
};