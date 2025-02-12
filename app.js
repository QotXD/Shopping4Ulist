function addItem() {
    const input = document.getElementById('item-input');
    const itemName = input.value.trim();
    if (itemName) {
        const list = document.getElementById('shopping-list');
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${itemName}</span>
            <div>
                <button onclick="markAsPurchased(this)">✓</button>
                <button onclick="removeItem(this)">✗</button>
            </div>
        `;
        list.appendChild(li);
        input.value = '';
    }
}

function markAsPurchased(button) {
    const item = button.parentElement.parentElement;
    item.classList.toggle('completed');
}

function removeItem(button) {
    const item = button.parentElement.parentElement;
    item.remove();
}

function clearList() {
    const list = document.getElementById('shopping-list');
    list.innerHTML = '';
}

