import MediaPlayer from "@whomi/mediaplayer-platzi"
import AutoPlay from "@whomi/mediaplayer-platzi/lib/plugins/AutoPlay"
import AutoPause from "@whomi/mediaplayer-platzi/lib/plugins/AutoPause"
import AdsPuglin from "@whomi/mediaplayer-platzi/lib/plugins/Ads/"

const video = document.querySelector('.movie')
const buttonToggleReproduce = document.querySelector('#toggle-reproduce')
const buttonToggleMute = document.querySelector('#toggle-mute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new AdsPuglin()] })

buttonToggleReproduce.addEventListener('click', () => player.togglePlay())
buttonToggleMute.addEventListener('click', () => player.toggleMute())

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('../sw.js', import.meta.url)).catch(error => {
        console.log(error.message)
    })
}