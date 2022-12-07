export default function MediaPlayer(config) {
    this.media = config.el

    this.play = function () {
        this.media.play()
    }

    this.pause = function () {
        this.media.pause()
    }

    this.toggleVideo = function () {
        this.media.paused ? this.play() : this.pause()
    }
}