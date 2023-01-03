import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const OriginIcon = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="originIconTitle"
    stroke="#000000"
    strokeWidth={1}
    strokeLinecap="square"
    strokeLinejoin="miter"
    color="#000000"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
    />
    <Path fill={props.color || 'black'} d="M12 2V8" />
    <Path fill={props.color || 'black'} d="M12 16V22" />
    <Path fill={props.color || 'black'} d="M2 12L8 12" />
    <Path fill={props.color || 'black'} d="M16 12L22 12" />
    <Circle cx={12} cy={12} r={1} fill={props.color || 'black'} />
  </Svg>
);
export default OriginIcon;
