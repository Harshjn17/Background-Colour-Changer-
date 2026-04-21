let red = document.querySelector('#redBtn');
let blue = document.querySelector('#blueBtn');
let randomBtn = document.querySelector('#randomBtn');

red.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'red';
});

blue.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'blue';
});

randomBtn.addEventListener('click', ()=>{
  let colours = [
      'red',
      'blue',
      'green',
      'yellow',
      'black',
      'white',
      'gray',
      'orange',
      'purple',
      'pink',
      'brown'
  ];
  
  let random = Math.floor(Math.random() * colours.length);
  
  document.body.style.backgroundColor = colours[random];
});
