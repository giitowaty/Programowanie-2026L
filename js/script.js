const movies = [];
const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const movieList = document.getElementById('movieList');

function validateForm(title) {
    if (!title || title.trim() === '') {
        alert('Proszę wpisać tytuł filmu!');
        return false;
    }
    if (title.length < 3) {
        alert('Tytuł musi mieć co najmniej 3 znaki!');
        return false;
    }
    return true;
}

function addMovie(event) {
    event.preventDefault();

    const title = titleInput.value.trim();

    if (!validateForm(title)) {
        return;
    }

    movies.push(title);
    const li = document.createElement('li');
    li.textContent = title;
    movieList.appendChild(li);

    alert('Film "' + title + '" został poprawnie dodany!');
    form.reset();
}

form.addEventListener('submit', addMovie);