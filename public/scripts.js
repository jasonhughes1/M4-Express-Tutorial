const title = document.querySelector('h1');
const button = document.querySelector('button');

const changeTitle = () => {
  title.innerText = 'Jason Hughes'
}

button.addEventListener('click', changeTitle);
