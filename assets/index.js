import MediaPlayer from "./MediaPlayer.js"

const video = document.querySelector('.movie')
const button = document.querySelector('button')

const player = new MediaPlayer({ el: video })

button.addEventListener('click', () => player.toggleVideo())