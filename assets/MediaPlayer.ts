interface Plugin {
    player: MediaPlayer
    run: (player: MediaPlayer) => void
}

interface MediaPlayerConfig {
    media: HTMLMediaElement
    plugins?: Array<Plugin>
}

interface config {
    el: HTMLMediaElement
    plugins?: Array<Plugin>
}

export default class MediaPlayer implements MediaPlayerConfig {
    media: HTMLMediaElement
    plugins: Array<Plugin>

    constructor(config: config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this.initPlugins()
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }

    play() { this.media.play() }
    pause() { this.media.pause() }

    togglePlay() { this.media.paused ? this.media.play() : this.media.pause() }
    toggleMute() { this.media.muted = !this.media.muted }
}