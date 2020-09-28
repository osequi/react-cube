import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Cube from "../Cube";
import useControls, {
  useControlsPropTypes,
} from "@bit/osequi.test.use-controls";

/**
 * Defines the prop types
 */
const propTypes = {
  controls: PropTypes.shape(useControlsPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  controls: {
    items: [
      {
        id: shortid.generate(),
        type: "checkbox",
        label: "Use perspective",
        value: false,
      },
      {
        id: shortid.generate(),
        type: "text",
        label: "Set perspective",
        value: "0",
      },
      {
        id: shortid.generate(),
        type: "text",
        label: "Set perspective origin",
        value: "0",
      },
    ],
  },
};

/**
 * Displays the component
 */
const Demo = (props) => {
  const { controls } = props;
  /**
   * Loads the controls
   */
  //const controls = updateControls(props);
  const [values, form] = useControls(controls);

  return (
    <div className="Demo">
      <Cube />
      <div className={clsx("Controls")}>{form}</div>
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
