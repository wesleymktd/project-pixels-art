const paletColor = document.querySelector('#color-palette')
// cada cor contida nessa paleta de cores

const colorPalet1 = document.createElement('div');
const colorPalet2 = document.createElement('div');
const colorPalet3 = document.createElement('div');
const colorPalet4 = document.createElement('div');



colorPalet1.className = 'color selected'
colorPalet1.id = 'color1'
paletColor.appendChild(colorPalet1);


colorPalet2.className = 'color'
colorPalet2.id = 'color2'
paletColor.appendChild(colorPalet2);


colorPalet3.className = 'color'
colorPalet3.id = 'color3'
paletColor.appendChild(colorPalet3);


colorPalet4.className = 'color'
colorPalet4.id = 'color4'
paletColor.appendChild(colorPalet4);

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

function gerarPixels () {

  for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    paletGrid.appendChild(pixel);

  }
  
}
gerarPixels();


  


//ao iniciar a página a cor preta já deve estar selecionada na paleta para pintar os pixels do quadro
// O elemento que posteriormente deverá receber a classe selected deve ser um dos elementos que possuem a classe color,
// como especificado no requisito 2
// O elemento da cor preta deve possuir inicialmente a classe selected  ok
