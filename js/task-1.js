const categoriesRef = document.querySelector('#categories');
console.log(`В списке ${categoriesRef.children.length} категории.`);

const categoryTitleRef = document.querySelector('h2');
const elementRef = document.querySelectorAll('.item');

elementRef.forEach(item => {
  console.log(`Категория: ${categoryTitleRef.textContent}`);
  console.log(`Количество элементов: ${item.querySelector('ul').children.length}`);
});
