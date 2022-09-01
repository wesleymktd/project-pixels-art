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
  localStorage.setItem('corPaleta2',color); //aqui eu armazeno em localStore essa cor que foi gerada no clique
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
  localStorage.setItem('corPaleta3',color);
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
  localStorage.setItem('corPaleta4',color);
}

button.addEventListener('click', generateColor4 )

// vou recuperar minha cor assim que a página for carregada e jogar para o elemento da paleta

function recoverColor() {
  colorPalet2.style.backgroundColor = localStorage['corPaleta2']
  colorPalet3.style.backgroundColor = localStorage['corPaleta3']
  colorPalet4.style.backgroundColor = localStorage['corPaleta4']
}
recoverColor()

// 1 - tem que ter algum lugar na função que eu armazene a informação de cor quando ela for acionada no clique
// e jogar para dentro de localStorage   ok
// 2 - agora só falta eu conseguir recuperar essa informação e jogar pra dentro da paleta ao carregar minha página
// 2-1 consigo recuperar através do localStorage[corPaleta2]
   


