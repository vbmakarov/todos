import { FC, memo } from "react";
import { IControls } from "../../types";
import "./style.scss";

export const Controls: FC<IControls> = memo(
  ({ fetchNotReadyTodos, fetchAllTodos, fetchReadyTodos }) => {
    return (
      <div className="todo__controls control">
        <button
          className="control__item control__item_all active"
          onClick={fetchAllTodos}
        >
          Все
        </button>
        <button
          className="control__item control__item_completed"
          onClick={fetchReadyTodos}
        >
          Выполненные
        </button>
        <button
          className="control__item control__item_failed"
          onClick={fetchNotReadyTodos}
        >
          Невыполненные
        </button>
      </div>
    );
  }
);
