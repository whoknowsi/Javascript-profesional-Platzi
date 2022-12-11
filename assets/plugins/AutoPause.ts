import MediaPlayer from "../MediaPlayer"

interface Plugin {
    player: MediaPlayer
    run: (player: MediaPlayer) => void
}

class AutoPause implements Plugin {
    player: MediaPlayer

    run(player: MediaPlayer) {
        this.player = player

        const observer = new IntersectionObserver((entries) => this.handleIntersection(entries), {
            threshold: 0.25
        })
        observer.observe(player.media)

        document.addEventListener('visibilitychange', () => this.handleVisibilityChange())
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]
        entry.isIntersecting ? this.player.play() : this.player.pause()
    }

    private handleVisibilityChange() {
        document.visibilityState === 'visible' ? this.player.play() : this.player.pause()
    }
}

export default AutoPause