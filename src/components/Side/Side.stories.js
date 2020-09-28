import React from "react";
import { storiesOf } from "@storybook/react";

import Side from "./Side";
import description from "./Side.md";

storiesOf("Side", module).add("Overview", () => <Side />, {
  notes: { markdown: description }
});
