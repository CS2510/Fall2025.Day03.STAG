class Vector2 {
  x
  y
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plusEquals(other) {
    this.x += other.x
    this.y += other.y
  }
}