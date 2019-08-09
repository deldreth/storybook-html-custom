import { document, console } from "global";
import { storiesOf } from "@storybook/html";

import "web/dist/Button/component.js";

storiesOf("Demo", module).add(
  "button",
  () => "<storybook-button></storybook-button>"
);
