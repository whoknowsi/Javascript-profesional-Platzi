export default function AutoPlay() {
    this.run = (player) => {
        player.mute()
        player.play()
    }
}
