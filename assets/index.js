import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"

const video = document.querySelector('.movie')
const buttonToggleReproduce = document.querySelector('#toggle-reproduce')
const buttonToggleMute = document.querySelector('#toggle-mute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] })

buttonToggleReproduce.addEventListener('click', () => player.toggleReproduce())
buttonToggleMute.addEventListener('click', () => player.toggleMute())
