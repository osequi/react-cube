import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import shortid from "shortid";

/**
 * Imports other components and hooks
 */
import Cube, { CubePropTypes, CubeDefaultProps } from "../Cube";
import useControls, { useControlsPropTypes } from "../../use-controls";

/**
 * Defines the prop types
 */
const propTypes = {
  cube: PropTypes.shape(CubePropTypes),
  controls: PropTypes.shape(useControlsPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  cube: CubeDefaultProps,
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
 * Updates the Controls with values.
 * - Since `controls` use `shortid.generate()` they can't be defined together with `values` which change. This would cause endless re-renders
 * - Therefore, first, `controls` are defined with `shortid` as static props.
 * - Then they are updated with dynamic values.
 */
const updateControls = (props) => {
  const { cube, controls } = props;
  const { items } = controls;
  const { container } = cube;
  const { isPerspectiveOn, perspective, perspectiveOrigin } = container;

  const items2 =
    items &&
    items.map((item) => {
      const { label } = item;

      if (label === "Use perspective") {
        return { ...item, value: isPerspectiveOn };
      }

      if (label === "Set perspective") {
        return { ...item, value: perspective };
      }

      if (label === "Set perspective origin") {
        return { ...item, value: perspectiveOrigin };
      }

      return item;
    });

  return { ...controls, items: items2 };
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

/**
 * Displays the component
 */
const Demo = (props) => {
  const { container } = useStyles(props);

  /**
   * Loads the controls
   */
  const controls = updateControls(props);
  const { values, form } = useControls(controls);

  return (
    <div className={clsx("Demo", container)}>
      <Cube />
      <div className={clsx("Controls")}>{form}</div>
    </div>
  );
};

Demo.propTypes = propTypes;
Demo.defaultProps = defaultProps;

export default Demo;
export { propTypes as DemoPropTypes, defaultProps as DemoDefaultProps };
