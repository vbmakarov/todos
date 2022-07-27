import { FC, memo } from "react";
import { ITextField } from "../../types";
import "./style.scss";

export const TextField: FC<ITextField> = memo(({ value, setValue }) => {
  return (
    <div className="todo_input">
      <input
        type="text"
        name="todo"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Введите текст и нажмите enter"
      />
    </div>
  );
});
