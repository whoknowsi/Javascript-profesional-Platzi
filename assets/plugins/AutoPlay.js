class AutoPlay {
    run = (player) => {
        !player.muted && (player.muted = true)
        player.play()
    }
}

export default AutoPlay
