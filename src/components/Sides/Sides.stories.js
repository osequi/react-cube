import React from "react";
import { storiesOf } from "@storybook/react";

import Sides from "./Sides";
import description from "./Sides.md";

storiesOf("Sides", module).add("Overview", () => <Sides />, {
  notes: { markdown: description }
});
