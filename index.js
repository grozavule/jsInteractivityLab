//console.log('hello world');
let message = document.querySelector('aside#message');

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked'))
    {
        message.textContent = 'Movie watched';
    }
    else
    {
        message.textContent = 'Movie added back!';
    }
}

const deleteMovie = (event) => {
    event.target.parentNode.remove();
    message.textContent = 'Movie deleted';
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

