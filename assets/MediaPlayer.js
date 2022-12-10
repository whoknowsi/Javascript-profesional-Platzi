export default class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []
        this._initPlugins()
    }

    _initPlugins() {
        const player = {
            togglePlay: () => this.togglePlay(),
            toggleMute: () => this.toggleMute(),
            media: this.media,
        }

        this.plugins.forEach(plugin => {
            plugin.run(player)
        })
    }

    togglePlay() { this.media.paused ? this.media.play() : this.media.pause() }

    toggleMute() { this.media.muted = !this.media.muted }
}