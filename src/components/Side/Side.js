import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

/**
 * Defines the prop types
 */
const names = ["front", "back", "left", "right", "top", "bottom"];

const propTypes = {
  id: PropTypes.string,
  name: PropTypes.oneOf(names),
  content: PropTypes.any,
  className: PropTypes.string,
  opacity: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.height,
};

/**
 * Defines the default props
 */
const defaultProps = {
  id: "front",
  name: "front",
  content: null,
  className: "Side",
  opacity: 0.9,
  width: null,
  height: null,
};

/**
 * Defines the styles
 */
const useStyles = makeStyles((theme) => ({
  side: (props) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "1px solid",
    opacity: props.opacity,
  }),

  front: (props) => ({
    transform: `translateZ(calc(${props.width} / 2))`,
  }),

  back: (props) => ({
    transform: `translateZ(calc(-${props.width} / 2))`,
  }),

  left: (props) => ({
    transform: `rotateY(90deg) translateZ(calc(${props.width} / 2))`,
  }),

  right: (props) => ({
    transform: `rotateY(-90deg) translateZ(calc(${props.width} / 2))`,
  }),

  top: (props) => ({
    transform: `rotateX(90deg) translateZ(calc(${props.width} / 2))`,
  }),

  bottom: (props) => ({
    transform: `rotateX(-90deg) translateZ(calc(${props.width} / 2))`,
  }),
}));

/**
 * Displays the component
 */
const Side = (props) => {
  const { name, className, content } = props;
  const { side, front, back, left, right, top, bottom } = useStyles(props);

  const klasses = [front, back, left, right, top, bottom];
  const index = names.findIndex((item) => item === name);
  const klass = klasses[index];

  return (
    <div className={clsx(className, side, klass)}>
      <div className="Content">{content}</div>
    </div>
  );
};

Side.propTypes = propTypes;
Side.defaultProps = defaultProps;

export default Side;
export { propTypes as SidePropTypes, defaultProps as SideDefaultProps };
