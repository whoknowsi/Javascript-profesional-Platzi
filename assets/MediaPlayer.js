export default function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins = () => {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }

    this.play = () => {
        this.media.play()
    }

    this.pause = () => {
        this.media.pause()
    }

    this.toggleReproduce = () => {
        this.media.paused ? this.play() : this.pause()
    }

    this.mute = () => {
        this.media.muted = true
    }

    this.unmute = () => {
        this.media.muted = false
    }

    this.toggleMute = () => {
        this.media.muted ? this.unmute() : this.mute()
    }

    this._initPlugins()
}