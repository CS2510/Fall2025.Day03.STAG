class GameObject {
      components = []
      start() {
        for (const child of this.components) {
          child.start()
        }
      }
      update() {
        for (const child of this.components) {
          child.update()
        }
      }
      draw(ctx) {
        for (const child of this.components) {
          child.draw(ctx)
        }
      }

    }