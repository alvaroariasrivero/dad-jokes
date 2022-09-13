const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


//Using async await

// const generateJoke = async () => {
//     const config = {
//         headers: {
//           Accept: 'application/json',
//         },
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config);

//     const data = await res.json();

//     jokeEl.innerText = data.joke;
// }

//Using .then()

const generateJoke = () => {
    const config = {
        headers: {
          Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then((res) => res.json())
        .then((data) => {
            jokeEl.innerText = data.joke;
        });
};

jokeBtn.addEventListener('click', generateJoke);

generateJoke();