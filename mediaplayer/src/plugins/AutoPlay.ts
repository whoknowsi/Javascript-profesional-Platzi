import MediaPlayer, { Plugin } from '..'

class AutoPlay implements Plugin {
    player: MediaPlayer
    run = (player: MediaPlayer) => {
        this.player = player

        this.player.mute()
        this.player.play()
    }
}

export default AutoPlay
