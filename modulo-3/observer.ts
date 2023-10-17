// Classe Observer
class Observer {
    update(subject: any) {}
  }
  
  // Classe Subject
  class Subject {
    private observers: Observer[] = [];
  
    addObserver(observer: Observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer: Observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notify() {
      for (const observer of this.observers) {
        observer.update(this);
      }
    }
  }
  
  // Classe Editor
  class Editor extends Subject {
    text: string[] = [];
  
    insertLine(lineNumber: number, text: string) {
      this.text.splice(lineNumber, 0, text);
      this.notify();
    }
  
    removeLine(lineNumber: number) {
      this.text.splice(lineNumber, 1);
      this.notify();
    }
  }
  
  // Classe TextEditor
  class TextEditor extends Editor {
    open() {
      console.log("Editor aberto.");
      this.notify();
    }
  
    save() {
      console.log("Conteúdo salvo:");
      for (const line of this.text) {
        console.log(line);
      }
    }
  }
  
  // Função para receber input do usuário
  function runEditor() {
    const textEditor = new TextEditor();
  
    textEditor.addObserver(new Observer());
  
    textEditor.open();
  
    console.log("Insira linhas de texto. Digite 'EOF' para salvar e sair.");
  
    let lineNumber = 0;
    while (true) {
      const input = prompt(`Linha ${lineNumber + 1}: `);
      if (input === "EOF") {
        textEditor.save();
        break;
      }
      textEditor.insertLine(lineNumber, input);
      lineNumber++;
    }
  }
  
  // Executar o editor de texto
  runEditor();
  