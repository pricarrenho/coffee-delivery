import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { App } from "./App";

describe("aaa", () => {
  test("test", () => {
    render(<App />);
    screen.logTestingPlaygroundURL();
    const a = screen.getByText(
      "Expresso diluído, menos intenso que o tradicional"
    );

    expect(a).exist();
  });
});
