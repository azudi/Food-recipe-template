import * as React from "react";
import Svg, { Path } from "react-native-svg";
const NavIcon = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15 6L9 12L15 18"
      stroke={props.color || 'black'}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default NavIcon;
