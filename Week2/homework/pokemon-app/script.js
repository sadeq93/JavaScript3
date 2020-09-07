const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
const fetchData = () => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((data) => {
      createOptions(data);
    });
  // .then((data) => {
  //   console.log(data.sprites.back_default);
  //   creatImg(data.sprites.back_shiny);
  // });
};
fetchData();

const createOptions = (jsonData) => {
  // create select HTML tag
  const select = document.createElement('select');
  //appending
  document.body.appendChild(select);
  jsonData.forEach((element, counter) => {
    // create option HTML tag
    const option = document.createElement('option');
    //appending
    select.appendChild(option);
    option.value = counter;
    option.textContent = element;
  });
};

// createOptions(placeholderRepos);

const creatImg = (url) => {
  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
};
