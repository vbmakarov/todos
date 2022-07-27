import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Render input element", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText(/Введите текст и нажмите enter/i)
    ).toBeInTheDocument();
  });

  it("Добавление нового элемента", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Введите текст и нажмите enter/i);
    fireEvent.change(input, { target: { value: "Новая задача" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
    expect(screen.getByText(/Новая задача/i)).toBeInTheDocument();
  });

  it("Клик по кнопке и изменение цвета кнопки", () => {
    const document = render(<App />);
    const button = document.queryByTestId("item__flag");
    if (button) {
      fireEvent.click(button);
      expect(button?.classList.contains("active")).toBe(true);
    }
  });

  it("Добавление нового элемента 2", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Введите текст и нажмите enter/i);
    fireEvent.change(input, { target: { value: "Новая задача 2" } });
    fireEvent.keyDown(input, { key: "Enter", code: 13, charCode: 13 });
    expect(screen.getByText(/Новая задача 2/i)).toBeInTheDocument();
  });
});
