import React, { Component } from "react";
import ThemeButton from "./ThemeButton";
import { ThemeContext, themes } from "./ThemeContext";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = () => {
      this.setState((prev) => ({
        theme: prev.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemeButton changeTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {(theme) => (
              <div
                style={{
                  height: 200,
                  width: 200,
                  backgroundColor: theme.background,
                  color: theme.foreground,
                }}
              >
                <p>테마 변경하기</p>
              </div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        <p>다음 버튼은 Context의 효과를 받지 못하는 버튼</p>
        <ThemeButton />
      </div>
    );
  }
}
