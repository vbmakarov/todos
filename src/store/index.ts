import { makeAutoObservable } from "mobx";
import { IList } from "../types";

class TodoStore {
  list: IList[];

  constructor() {
    makeAutoObservable(this);
    this.list = [];
  }

  addTodo(text: string): void {
    const newTodo = {
      id: Date.now(),
      text: text,
      isReady: false,
    };
    this.list.push(newTodo);
  }

  removeCompleted(): void {
    this.list = this.list.filter((todo, index) => !todo.isReady);
  }

  removeTodoItem(id: number) {
    this.list = this.list.filter((todo, index) => todo.id !== id);
  }

  setComplete(id: number) {
    this.list = this.list.map((todo, index) => {
      if (todo.id === id) {
        todo.isReady = !todo.isReady;
      }
      return todo;
    });
  }
}

export default new TodoStore();
