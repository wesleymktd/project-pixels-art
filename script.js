const paletColor = document.querySelector('#color-palette')
// cada cor contida nessa paleta de cores

const colorPalet1 = document.createElement('div');
const colorPalet2 = document.createElement('div');
const colorPalet3 = document.createElement('div');
const colorPalet4 = document.createElement('div');

function escutaPalet(escuta) {
  const clique = escuta.target;
  const selet = document.getElementsByClassName('selected');
  selet[0].className = 'color';
  clique.className = 'color selected';
}
colorPalet1.className = 'color selected';
colorPalet1.id = 'color1';
colorPalet1.style.backgroundColor = 'black';
paletColor.appendChild(colorPalet1);

colorPalet2.className = 'color';
colorPalet2.id = 'color2';
colorPalet2.style.backgroundColor = 'green';
paletColor.appendChild(colorPalet2);

colorPalet3.className = 'color';
colorPalet3.id = 'color3';
colorPalet3.style.backgroundColor = 'pink';
paletColor.appendChild(colorPalet3);

colorPalet4.className = 'color';
colorPalet4.id = 'color4';
colorPalet4.style.backgroundColor = 'purple';
paletColor.appendChild(colorPalet4);

colorPalet1.addEventListener('click', escutaPalet);
colorPalet2.addEventListener('click', escutaPalet);
colorPalet3.addEventListener('click', escutaPalet);
colorPalet4.addEventListener('click', escutaPalet);

// função para mudança de cor ao clicar muda paleta 2

const arr = [];

const button = document.getElementById('button-random-color')
function generateColor2() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  colorPalet2.style.backgroundColor = color;
  arr.push(color);
  localStorage.colorPalette = JSON.stringify(arr); // aqui eu armazeno em localStore essa cor que foi gerada no clique
}

button.addEventListener('click', generateColor2);

// função para mudança de cor ao clicar muda paleta 3

function generateColor3() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  colorPalet3.style.backgroundColor = color;
  arr.push(color);
  localStorage.colorPalette = JSON.stringify(arr);
}

button.addEventListener('click', generateColor3);

// função para mudança de cor ao clicar muda paleta 4

function generateColor4() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  colorPalet4.style.backgroundColor = color;
  arr.push(color);
  localStorage.colorPalette = JSON.stringify(arr);
}

button.addEventListener('click', generateColor4);

if (localStorage.colorPalette) {
  let colorGeneral = JSON.parse(localStorage.getItem('colorPalette'));
  
  colorPalet2.style.backgroundColor = colorGeneral[0];
  colorPalet3.style.backgroundColor = colorGeneral[1];
  colorPalet4.style.backgroundColor = colorGeneral[2];
}

const paletGrid = document.getElementById('pixel-board');

// colocar as cores nos pixels
// armazenar as cores dentro de localStorage

const PixelsAll = document.getElementsByClassName('pixel');

function colorizePixel (cliquei) {
  let cli = cliquei.target;
  let selePix = document.querySelector('.selected');
  cli.style.backgroundColor = selePix.style.backgroundColor;
  let colorGenerated = cli.style.backgroundColor;
  storageColor();

  // arr2.push(colorGenerated);
  // localStorage.pixelBoard = JSON.stringify(arr2);
}
// aqui eu vou pegar a cor armazenada em local storage recuperar
function storageColor() {

  let arr2 = [];

  for (let index = 0; index < 25; index += 1) {
  let pixColorPosition = PixelsAll[index].style.backgroundColor;
  arr2.push(pixColorPosition);
  localStorage.pixelBoard = JSON.stringify(arr2);
}
}
// aqui eu vou recuperar a minha paleta com as cores do momento se o local storage for vazio
// se estiver com alguma informação eu utilizo para pintar cada uma das divs na iteração
if (localStorage.pixelBoard) {
  gerarPixels();
  let colorPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < 25; index += 1) {
    PixelsAll[index].style.backgroundColor = colorPixelBoard[index];
  }
  console.log(colorPixelBoard[0]);
} else {
  gerarPixels();
  storageColor();
}

// gerar os pixels

function gerarPixels () {

  for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    // pixel.addEventListener('click', colorizePixel)
    paletGrid.appendChild(pixel);
  }
  
}

for (let index = 0; index < PixelsAll.length; index += 1) {
  PixelsAll[index].addEventListener('click', colorizePixel);
}

// botão para limpar os pixels preenchendo eles de branco

let clear = document.getElementById('clear-board');
clear.addEventListener('click', whitePixels);

function whitePixels () {
  
  for (let index = 0; index < 25; index += 1) {
    let pixelsInBoard = document.getElementsByClassName('pixel')[index];
    pixelsInBoard.style.backgroundColor = 'white';
  };
}

// armazenar e recuperar o desenho em localStorage