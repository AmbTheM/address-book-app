import { screen, render } from "@testing-library/react";
import InputField from "../inputField";
import React from "react";
import { UserOutlined } from "@ant-design/icons";

describe("rendering the input field", () => {
  test("Check test", () => {
    render(
      <InputField
        className="searchBox"
        size="large"
        placeholder="Type to start searching"
        prefix={<UserOutlined />}
        onChange={() => {}}
      />
    );

    expect(screen.getByPlaceholderText("Type to start searching")).toBeTruthy();
  });
});
