let input = document.querySelector(`input[type = "text"]`);
let rootElm = document.querySelector('.movies_List');

allMovies = [
  {
    name: 'Inception',
    watched: false,
  },
  {
    name: 'Krish',
    watched: true,
  },
];

input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = '';
    createMovies();
  }
});



function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovies();
}


function createMovies() {
  //   rootElm.innerHTML = '';// Not using in reactDom 
  let todoUI = allMovies.map((movie, i) => {
    let li = React.createElement(
      'li',
      {},
      React.createElement('label', {}, movie.name),
      React.createElement(
        'button',
        { id: i, onClick: handleChange },
        movie.watched ? 'Watched' : 'To Watch'
      )
    );
    return li;
  });
  ReactDOM.render(todoUI, rootElm);
}

createMovies();