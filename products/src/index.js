import faker from 'faker';

let listItems = '';
for (let i = 0; i < 5; i++) {
  const productName = faker.commerce.productName();
  listItems += `<li>${productName}</li>`;
}

const productsList = document.querySelector('.products-list');
productsList.innerHTML = listItems;

// console.log(listItems);
// export default listItems;
