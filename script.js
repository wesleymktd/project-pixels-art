const paletColor = document.querySelector('#color-palette')
// cada cor contida nessa paleta de cores

const colorPalet1 = document.createElement('div');
const colorPalet2 = document.createElement('div');
const colorPalet3 = document.createElement('div');
const colorPalet4 = document.createElement('div');


function escutaPalet(escuta) {
  let clique = escuta.target;
  let selet = document.getElementsByClassName('selected');
  selet[0].className = 'color';
  clique.className = 'color selected';
}
colorPalet1.className = 'color selected'
colorPalet1.id = 'color1'
colorPalet1.style.backgroundColor = 'black';
paletColor.appendChild(colorPalet1);


colorPalet2.className = 'color'
colorPalet2.id = 'color2'
colorPalet2.style.backgroundColor = 'green';
paletColor.appendChild(colorPalet2);


colorPalet3.className = 'color'
colorPalet3.id = 'color3'
colorPalet3.style.backgroundColor = 'pink';
paletColor.appendChild(colorPalet3);


colorPalet4.className = 'color'
colorPalet4.id = 'color4'
colorPalet4.style.backgroundColor = 'purple';
paletColor.appendChild(colorPalet4);

colorPalet1.addEventListener('click', escutaPalet);
colorPalet2.addEventListener('click', escutaPalet);
colorPalet3.addEventListener('click', escutaPalet);
colorPalet4.addEventListener('click', escutaPalet);



// função para mudança de cor ao clicar muda paleta 2

var arr = [];

let button = document.getElementById('button-random-color')
  function generateColor2() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)]
  }  
  colorPalet2.style.backgroundColor = color;
  arr.push(color);
  localStorage.colorPalette = JSON.stringify(arr); //aqui eu armazeno em localStore essa cor que foi gerada no clique
}

button.addEventListener('click', generateColor2 );

// função para mudança de cor ao clicar muda paleta 3

function generateColor3() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)]
  }  
  colorPalet3.style.backgroundColor = color;
  arr.push(color);
  localStorage.colorPalette = JSON.stringify(arr)
}

button.addEventListener('click', generateColor3 )

// função para mudança de cor ao clicar muda paleta 4

function generateColor4() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)]
  }  
  colorPalet4.style.backgroundColor = color;
  arr.push(color);
  localStorage.colorPalette = JSON.stringify(arr)
}

button.addEventListener('click', generateColor4 )

if(localStorage.colorPalette) {
  let colorGeneral = JSON.parse(localStorage.getItem('colorPalette'));
  
  colorPalet2.style.backgroundColor = colorGeneral[0];
  colorPalet3.style.backgroundColor = colorGeneral[1];
  colorPalet4.style.backgroundColor = colorGeneral[2];  
}


let paletGrid = document.getElementById('pixel-board');

// gerar os pixels

function colorizePixel (cliquei) {
  let cli = cliquei.target;
  let selePix = document.querySelector('.selected');
  cli.style.backgroundColor = selePix.style.backgroundColor;

}


function gerarPixels () {

  for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    //pixel.style.backgroundColor = 'white';
    //pixel.addEventListener('click', colorizePixel)
    paletGrid.appendChild(pixel);
  }
  
}
gerarPixels();
let PixelsAll = document.getElementsByClassName('pixel');


for (let index = 0; index < PixelsAll.length; index += 1) {
  PixelsAll[index].addEventListener('click', colorizePixel);
}
