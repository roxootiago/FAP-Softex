interface EditorObserver {
  update(text: string[]): void
}

class TextEditor {
  private observers: EditorObserver[] = []
  private lines: string[] = []

  addObserver(observer: EditorObserver): void {
    this.observers.push(observer)
  }

  removeObserver(observer: EditorObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer)
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.lines)
    }
  }

  insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber - 1, 0, text)
    this.notifyObservers()
  }

  removeLine(lineNumber: number): void {
    this.lines.splice(lineNumber - 1, 1)
    this.notifyObservers()
  }

  getText(): string[] {
    return this.lines
  }

  receiveTextFromUser(text: string): void {
    if (text !== "EOF") {
      this.insertLine(this.lines.length + 1, text)
    } else {
      this.notifyObservers()
    }
  }
}

class FileSaver implements EditorObserver {
  update(text: string[]): void {
    console.log("Conteúdo salvo no arquivo:")
    console.log(text.join("\n"))
  }
}
