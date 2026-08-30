export class MouseTracker {
  public current = { x: 0, y: 0 }
  public target = { x: 0, y: 0 }
  public velocity = { x: 0, y: 0 }
  private ease: number

  constructor(ease = 0.08) {
    this.ease = ease
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', this.onMouseMove.bind(this))
      window.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: true })
    }
  }

  private onMouseMove(e: MouseEvent) {
    // Normalized device coordinates (-1 to 1)
    this.target.x = (e.clientX / window.innerWidth) * 2 - 1
    this.target.y = -(e.clientY / window.innerHeight) * 2 + 1
  }

  private onTouchMove(e: TouchEvent) {
    if (e.touches.length > 0) {
      const touch = e.touches[0]
      this.target.x = (touch.clientX / window.innerWidth) * 2 - 1
      this.target.y = -(touch.clientY / window.innerHeight) * 2 + 1
    }
  }

  public update() {
    const prevX = this.current.x
    const prevY = this.current.y

    this.current.x += (this.target.x - this.current.x) * this.ease
    this.current.y += (this.target.y - this.current.y) * this.ease

    this.velocity.x = this.current.x - prevX
    this.velocity.y = this.current.y - prevY
  }

  public destroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', this.onMouseMove.bind(this))
      window.removeEventListener('touchmove', this.onTouchMove.bind(this))
    }
  }
}
