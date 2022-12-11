import MediaPlayer from "./MediaPlayer.ts"
import AutoPlay from "./plugins/AutoPlay.ts"
import AutoPause from "./plugins/AutoPause.ts"

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