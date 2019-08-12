import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import "../styles/Keyboard.css"


class KeyBoard extends Component {
    state = {
        layoutName: "default",
        input: ""
      };
    
      onChange = input => {
        this.setState({
          input: input
        });
        console.log("Input changed", input);
      };
    
      onKeyPress = button => {
        console.log("Button pressed", button);
    
        /**
         * If you want to handle the shift and caps lock buttons
         */
        if (button === "{shift}" || button === "{lock}") this.handleShift();
      };
    
      handleShift = () => {
        let layoutName = this.state.layoutName;
    
        this.setState({
          layoutName: layoutName === "default" ? "shift" : "default"
        });
      };
    
      onChangeInput = event => {
        let input = event.target.value;
        this.setState(
          {
            input: input
          },
          () => {
            this.keyboardRef.keyboard.setInput(input);
          }
        );
      };
    
      render() {
        return (
          <div className="superkey">
            <input
              value={this.state.input}
              placeholder={"Ingresá DNI"}
              onChange={e => this.onChangeInput(e)}
              max="8"
              type="number"
            />
            <Keyboard
              ref={r => (this.keyboardRef = r)}
              onChange={input => this.onChange(input)}
              onKeyPress={button => this.onKeyPress(button)}
              theme={"hg-theme-default hg-layout-default myTheme"}
              layoutName={this.state.layoutName}
              layout={{
                default: [
                  "1 2 3",
                  "4 5 6",
                  "7 8 9",
                  "{bksp} 0 {enter}"
                ],
                shift: [
                  "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
                  "{tab} Q W E R T Y U I O P { } |",
                  '{lock} A S D F G H J K L : " {enter}',
                  "{shift} Z X C V B N M < > ? {shift}",
                  ".com @ {space}"
                ]
              }}
              buttonTheme={[
                {
                  class: "hg-red",
                  buttons: "Q W E R T Y q w e r t y"
                },
                {
                  class: "hg-highlight",
                  buttons: "Q q"
                }
              ]}
            />
          </div>
        );
      }
}
 
export default KeyBoard;