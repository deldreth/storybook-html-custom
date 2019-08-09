import define from "@skatejs/define";
import Element from "@skatejs/element-react";
import React from "react";

import Button from "components/dist/Button";

const style = `.text {
  color: blue;
}`;
class ButtonWC extends Element {
  render() {
    return (
      <span>
        <style>{style}</style>
        <div className="text">Test Button</div>
        <Button />
      </span>
    );
  }
}

ButtonWC.is = "storybook-button";

export default define(ButtonWC);
