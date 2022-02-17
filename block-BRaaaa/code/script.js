let input = document.querySelector(`input[type = "text"]`);
let root = document.querySelector('.movies_List');

let allMovies = [
  {
    name: 'Inception',
    watched: false,
  },
  {
    name: 'Krish',
    watched: true,
  },
];

input.addEventListener('keyup', (e)=> {
  
   if(e.keyCode === 13) {
     allMovies.push({
       name: e.target.value,
       watched: false,
     })
     e.target.value = ''
     createMovies(allMovies, root)
    }
})

const handleChange = (e) => {
  let id = e.target.id; // taking id from buuton id

  allMovies[id].watched = !allMovies[id].watched; // if one is true then other one is false
  createMovies(allMovies, root)

}

function createMovies(data, root) {
  root.innerHTML = '';
  data.forEach((movie, i) => {

    let li = document.createElement("li")
    let button = document.createElement("button")

    button.id = i;
    button.innerText = movie.watched ? 'Watched' : 'To Watch';
    button.addEventListener('click', handleChange);

    let label = document.createElement("label")
    label.innerText = movie.name;

    li.append(label, button);

    root.append(li);

  });
}

createMovies(allMovies, root);