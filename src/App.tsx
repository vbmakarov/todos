import { keyboardKey } from "@testing-library/user-event";
import { observer } from "mobx-react-lite";
import {
  createContext,
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import "./app.scss";
import { Controls } from "./components/Controls";
import { List } from "./components/List";
import { TextField } from "./components/TextField";
import TodoStore from "./store";
import { IList, ITodoContext } from "./types";

export const TodoContext = createContext<ITodoContext>({} as ITodoContext);

const App: FC = observer(() => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<IList[]>(TodoStore.list);

  const removeTodoItem = useCallback((id: number) => {
    const isDelete = window.confirm("Вы точно хотите удалить данную задачу?");
    if (isDelete) {
      TodoStore.removeTodoItem(id);
      setTodos(() => {
        return [...TodoStore.list];
      });
    }
  }, []);

  const setComplete = useCallback((event: SyntheticEvent, id: number) => {
    event.stopPropagation();
    TodoStore.setComplete(id);
    setTodos(() => {
      return [...TodoStore.list];
    });
  }, []);

  const addTodo = useCallback(
    (e: keyboardKey) => {
      if (e.key === "Enter" && value) {
        TodoStore.addTodo(value);
        setTodos(() => {
          return [...TodoStore.list];
        });
        setValue("");
      }
    },
    [value]
  );

  const fetchAllTodos = useCallback(() => {
    setTodos(() => {
      return [...TodoStore.list];
    });
  }, []);

  const fetchReadyTodos = useCallback(() => {
    setTodos(() => {
      const isReadyTodos = TodoStore.list.filter((todo, index) => todo.isReady);
      return [...isReadyTodos];
    });
  }, []);

  const fetchNotReadyTodos = useCallback(() => {
    setTodos(() => {
      const isNotReadyTodos = TodoStore.list.filter(
        (todo, index) => !todo.isReady
      );
      return [...isNotReadyTodos];
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", addTodo);

    return () => {
      document.removeEventListener("keydown", addTodo);
    };
  }, [addTodo]);

  return (
    <TodoContext.Provider value={{ removeTodoItem, setComplete }}>
      <div className="todo">
        <h1> TODO List </h1>
        <TextField value={value} setValue={setValue} />
        <List todos={todos} />
        <Controls
          fetchNotReadyTodos={fetchNotReadyTodos}
          fetchAllTodos={fetchAllTodos}
          fetchReadyTodos={fetchReadyTodos}
        />
      </div>
    </TodoContext.Provider>
  );
});

export default App;
