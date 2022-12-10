import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "./plugins/AutoPlay.js"
import AutoPause from "./plugins/AutoPause.js"

const video = document.querySelector('.movie')
const buttonToggleReproduce = document.querySelector('#toggle-reproduce')
const buttonToggleMute = document.querySelector('#toggle-mute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] })

buttonToggleReproduce.addEventListener('click', () => player.togglePlay())
buttonToggleMute.addEventListener('click', () => player.toggleMute())

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}