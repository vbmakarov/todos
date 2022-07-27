import { FC, useContext } from "react";
import { IListItem } from "../../types";
import { TodoContext } from "../../App";
import "./style.scss";

export const ListItem: FC<IListItem> = ({ todo, id }) => {
  const { removeTodoItem, setComplete } = useContext(TodoContext);
  return (
    <>
      <li className="list__item item">
        <div className="item__data">
          <span
            className={todo.isReady ? "item__flag active" : "item__flag"}
            data-testid="item__flag"
            onClick={(event) => setComplete(event, id)}
          ></span>
          <span className={todo.isReady ? "item__text active" : "item__text"}>
            {todo && todo.text}
          </span>
        </div>
        <button className="item__remove" onClick={() => removeTodoItem(id)}>
          Удалить
        </button>
      </li>
    </>
  );
};
