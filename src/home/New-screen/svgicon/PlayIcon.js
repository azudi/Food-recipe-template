import * as React from "react";
import Svg, { Polygon, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const PlayIcon = (props) => (
  <Svg
    width={props.width || '24px'}
    height="24px"
    viewBox="0 0 24 24"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="videoIconTitle"
    stroke={props.color || 'black'}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    color="#000000"
    {...props}
  >
    <Polygon points="18 12 9 16.9 9 7" />
    <Circle  cx={12} cy={12} r={10} />
  </Svg>
);
export default PlayIcon;
