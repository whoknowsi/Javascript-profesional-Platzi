export default class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }

    _initPlugins() {
        const player = {
            play: () => this.play(),
            pause: () => this.pause(),
            toggleMute: () => this.toggleMute(),
            media: this.media,
        }

        this.plugins.forEach(plugin => {
            plugin.run(player)
        })
    }

    play() { this.media.play() }
    pause() { this.media.pause() }

    togglePlay() { this.media.paused ? this.media.play() : this.media.pause() }

    toggleMute() { this.media.muted = !this.media.muted }
}