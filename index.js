//console.log('hello world');
let message = document.querySelector('aside#message');

const revealMessage = () => {
    message.classList.remove('hide');
    setTimeout(() => {
        message.classList.add('hide');
    }, 1000);
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked'))
    {
        message.textContent = `${event.target.textContent} watched`;
    }
    else
    {
        message.textContent = `${event.target.textContent} added back!`;
    }
    revealMessage();
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    let title = event.target.previousElementSibling.textContent;
    message.textContent = `${title} deleted`;
    revealMessage();
}

const addMovie = (event) => {
    event.preventDefault();

    let inputField = document.querySelector('input');
    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';

    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    let movieList = document.querySelector('ul');
    movieList.appendChild(movie);

    inputField.value = '';
}


let form = document.querySelector('form');
form.addEventListener('submit', addMovie);

