class AutoPause {
    run(player) {
        this.player = player

        const observer = new IntersectionObserver((entries) => this.handleIntersection(entries), {
            threshold: 0.25
        })
        observer.observe(player.media)
    }

    handleIntersection(entries) {
        const entry = entries[0]
        entry.isIntersecting ? this.player.play() : this.player.pause()
    }
}

export default AutoPause