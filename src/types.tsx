import { SyntheticEvent } from "react";

export type ITextField = {
  value: string;
  setValue: (prop: string) => void;
};

export type IList = {
  id: number;
  text: string;
  isReady: boolean;
};

export type IControls = {
  fetchNotReadyTodos: () => void;
  fetchAllTodos: () => void;
  fetchReadyTodos: () => void;
};

export type ITodos = {
  todos: IList[];
};

export type IListItem = {
  todo: IList;
  id: number;
};

export type ITodoContext = {
  removeTodoItem: (id: number) => void;
  setComplete: (event: SyntheticEvent, id: number) => void;
};
