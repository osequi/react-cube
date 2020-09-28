import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Styles the component container
 */
const Container = styled("div")(props => ({}));

/**
 * Displays the component
 */
const Cube = props => {
  return <Container className="Cube">Cube</Container>;
};

Cube.propTypes = propTypes;
Cube.defaultProps = defaultProps;

export default Cube;
export { propTypes as CubePropTypes, defaultProps as CubeDefaultProps };
