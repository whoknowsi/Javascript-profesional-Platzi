export default function AutoPlay() {
    this.run = (player) => {
        !player.muted && (player.muted = true)
        player.play()
    }
}
