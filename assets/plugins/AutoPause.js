class AutoPause {
    run(player) {
        this.player = player

        const observer = new IntersectionObserver((entries) => this.handleIntersection(entries), {
            threshold: 0.25
        })
        observer.observe(player.media)

        document.addEventListener('visibilitychange', () => this.handleVisibilityChange())
    }

    handleIntersection(entries) {
        const entry = entries[0]
        entry.isIntersecting ? this.player.play() : this.player.pause()
    }

    handleVisibilityChange() {
        document.visibilityState === 'visible' ? this.player.play() : this.player.pause()
    }
}

export default AutoPause