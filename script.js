const imageCount = 3; // Número total de imagens disponíveis
const soundCount = 8; // Número total de sons disponíveis
let currentImageNumber = 1; // Número da imagem atual
let soundInterval; // Variável para guardar o intervalo de repetição do som

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

function playRandomSound() {
  const randomSoundNumber = getRandomNumber(soundCount);
  const sound = document.getElementById(`sound${randomSoundNumber}`);
  sound.currentTime = 0;
  sound.play();
}

function startPlayingSound() {
  soundInterval = setInterval(playRandomSound, 1000); // Reproduz o som a cada 1000 milissegundos
}

function stopPlayingSound() {
  clearInterval(soundInterval); // Para a repetição do som
}

function changeImage() {
  const image = document.getElementById('game-image');
  currentImageNumber = (currentImageNumber % imageCount) + 1; // Incrementa para a próxima imagem na sequência
  image.src = `image${currentImageNumber}.png`;
}

function playRandomSoundAndChangeImage() {
  playRandomSound();
  changeImage();
}
