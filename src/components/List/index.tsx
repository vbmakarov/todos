import { FC, memo } from "react";
import { ListItem } from "../ListItem";
import { ITodos } from "../../types";
import "./style.scss";

export const List: FC<ITodos> = memo(({ todos }) => {
  return (
    <div className="todo__list list">
      <ul className="list__nav">
        {todos &&
          todos.map((todo, index) => {
            return <ListItem key={todo.id} todo={todo} id={todo.id} />;
          })}
      </ul>
    </div>
  );
});
