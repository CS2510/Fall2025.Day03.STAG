class Scene {
  gameObjects = []
  start() {
    for (const child of this.gameObjects) {
      child.start()
    }
  }
  update() {
    for (const child of this.gameObjects) {
      child.update()
    }
  }
  draw(ctx) {
    for (const child of this.gameObjects) {
      child.draw(ctx)
    }
  }

}