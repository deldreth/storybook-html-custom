import define from "@skatejs/define";
import Element from "@skatejs/element-react";
import React from "react";

import Button from "components/dist/Button";

class ButtonWC extends Element {
  render() {
    return (
      <span>
        Test Button
        <Button />
      </span>
    );
  }
}

ButtonWC.is = "storybook-button";

export default define(ButtonWC);
