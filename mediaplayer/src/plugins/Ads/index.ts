import MediaPlayer, { Plugin } from '../..'
import Ads, { Ad } from './Ads'
import './style.css'

class AdsPuglin implements Plugin {
    ads: Ads
    player: MediaPlayer
    currentAd?: Ad
    container: HTMLElement

    constructor() {
        this.ads = Ads.getInstance()
    }

    run(player: MediaPlayer) {
        this.player = player
        this.player.media.addEventListener('timeupdate', () => this.handleTimeUpdate())
        this.container = document.createElement('div')
        this.player.container.appendChild(this.container)
    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.player.media.currentTime)
        if (currentTime % 30 === 0) {
            this.renderAd()
        }
    }

    private renderAd() {
        if (this.currentAd) return

        const ad = this.ads.getAdd()
        if (!ad) return

        this.currentAd = ad
        this.container.innerHTML = `<div class="ads">
            <a  class="ads__link" href="${this.currentAd.url}" target="_blank">
                <img class="ads__img" src="${this.currentAd.imageUrl}" />
                <div class="ads__info">
                <h5 class="ads__title">${this.currentAd.title}</h5>
                <p class="ads__body">${this.currentAd.body}</p>
                </div>
            </a>
        </div>`

        setTimeout(() => {
            this.currentAd = undefined
            this.container.innerHTML = ''
        }, 10000)
    }

}

export default AdsPuglin