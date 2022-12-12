export interface Plugin {
    player: MediaPlayer
    run: (player: MediaPlayer) => void
}

interface MediaPlayerConfig {
    media: HTMLMediaElement
    plugins?: Array<Plugin>
    container: HTMLElement
}

interface config {
    el: HTMLMediaElement
    plugins?: Array<Plugin>
}

export default class MediaPlayer implements MediaPlayerConfig {
    media: HTMLMediaElement
    plugins: Array<Plugin>
    container: HTMLElement

    constructor(config: config) {
        this.media = config.el
        this.media.controls = true
        this.plugins = config.plugins || []
        this.container = document.createElement('div')
        this.initPlayer()
        this.initPlugins()
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }

    private initPlayer() {
        this.container.style.position = 'relative'
        this.media.parentNode?.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }

    play() { this.media.play() }
    pause() { this.media.pause() }

    mute() { this.media.muted = true }
    unmute() { this.media.muted = false }

    togglePlay() { this.media.paused ? this.media.play() : this.media.pause() }
    toggleMute() { this.media.muted ? this.unmute() : this.mute() }
}