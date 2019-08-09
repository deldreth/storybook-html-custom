import React from "react";
import define from "@skatejs/define";
import Element from "@skatejs/element-react";

import Button from "../src/Button";

export default define(class ButtonWC extends Element {
  static is = "storybook-button";

  render() {
    return <Button />;
  }
});
