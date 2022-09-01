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

let button = document.getElementById('button-random-color')
  function generateColor2() {

  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)]
  }  
  colorPalet2.style.backgroundColor = color;
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
}

button.addEventListener('click', generateColor4 )

