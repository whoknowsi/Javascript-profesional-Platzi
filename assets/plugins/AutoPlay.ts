import MediaPlayer from '../MediaPlayer'

interface Plugin {
    player: MediaPlayer
    run: (player: MediaPlayer) => void
}

class AutoPlay implements Plugin {
    player: MediaPlayer
    run = (player: MediaPlayer) => {
        this.player = player

        this.player.toggleMute()
        this.player.play()
    }
}

export default AutoPlay
