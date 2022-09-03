const paletColor = document.querySelector('#color-palette')
// cada cor contida nessa paleta de cores

const colorPalet1 = document.createElement('div');
colorPalet1.className = 'color'
colorPalet1.id = 'color1'
paletColor.appendChild(colorPalet1);

const colorPalet2 = document.createElement('div');
colorPalet2.className = 'color'
colorPalet2.id = 'color2'
paletColor.appendChild(colorPalet2);

const colorPalet3 = document.createElement('div');
colorPalet3.className = 'color'
colorPalet3.id = 'color3'
paletColor.appendChild(colorPalet3);

const colorPalet4 = document.createElement('div');
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


// vou recuperar minha cor assim que a página for carregada e jogar para o elemento da paleta

// 1 - tem que ter algum lugar na função que eu armazene a informação de cor quando ela for acionada no clique
// e jogar para dentro de localStorage   ok
// 2 - agora só falta eu conseguir recuperar essa informação e jogar pra dentro da paleta ao carregar minha página
// 2-1 consigo recuperar através do localStorage[corPaleta2]
/*   
const myObj = {
  name: 'Link',
  age: 20,
};

// Precisamos transformar este objeto em uma string. Para isso, utilizamos a função `JSON.stringify()`.

localStorage.setItem('myData', JSON.stringify(myObj));

// Como dito anteriormente, o `localStorage` armazena dados no formato chave e valor, sendo os valores sempre string. Para isso, precisamos passar como primeiro parâmetro do método `setItem()` o nome da chave, passamos `myData` e como segundo parâmetro, a função `JSON.stringify()` com o objeto-valor que queremos armazenar na chave `myData`. Feito isso, teremos salvo no `localStorage` um objeto com a chave `myData` e o valor `{ "name": "Link", "age": 20 }`.

// Agora, precisamos recuperar o objeto armazenado, mas queremos ele no formato original e não como uma string. Para isso, utilizaremos a função `JSON.parse()`.

const recoveredObject = JSON.parse(localStorage.getItem('myData'));

// Utilizamos a função `JSON.parse()` para transformar a string que está armazenada no `localStorage` de volta para seu formato original, um objeto.

console.log(recoveredObject); // { name: 'Link', age: 20 }
*/