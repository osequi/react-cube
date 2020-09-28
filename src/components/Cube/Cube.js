import React from "react";
import PropTypes from "prop-types";

/**
 * Imports other components and hooks
 */
import Sides, { SidesPropTypes, SidesDefaultProps } from "../Sides";

/**
 * Defines the prop types
 */
const propTypes = {
  width: PropTypes.string,
  height: PropTypes.height,
  transformStyle: PropTypes.oneOf(["preserve-3d", "flat"]),
  className: PropTypes.string,
  sides: PropTypes.shape(SidesPropTypes),
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: "200px",
  height: "200px",
  transformStyle: "preserve-3d",
  className: "Cube",
  sides: SidesPropTypes,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  cube: (props) => ({
    width: props.width,
    height: props.height,
    transformStyle: props.transformStyle,
    position: "relative",
  }),
}));
/**
 * Displays the component
 */
const Cube = (props) => {
  const { className, sides } = props;
  const { cube } = useStyles(props);

  return (
    <div className={clsx(className, cube)}>
      <Sides sides={sides} />
    </div>
  );
};

Cube.propTypes = propTypes;
Cube.defaultProps = defaultProps;

export default Cube;
export { propTypes as CubePropTypes, defaultProps as CubeDefaultProps };
