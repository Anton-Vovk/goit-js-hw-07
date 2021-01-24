const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const listItem = ingredients.map(item => {
const liRef = document.createElement('li');
  liRef.textContent = item;
  return liRef;
});
ingredientsRef.append(...listItem);

