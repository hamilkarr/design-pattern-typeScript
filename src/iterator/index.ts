import Array from './Array';
import Item from './Item';

const items = [
    new Item('쿠쿠다스', 2500),
    new Item('새우깡', 1800),
    new Item('빼빼로', 1200),
    new Item('초코파이', 4600),
];

const array = new Array(items);
const iterator = array.iterator();

while (iterator.next()) {
    const item = iterator.current();

    const divItem = document.createElement('div');
    divItem.textContent = `${item.name} - ${item.cost}`;
    document.body.appendChild(divItem);
    divItem.classList.add('iterator-item');
}
