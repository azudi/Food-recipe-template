import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";
const SectionIcon = (props) => (
  <Svg
    width="28px"
    height="28px"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={6}
      y={28}
      width={36}
      height={14}
      rx={4}
      stroke="black"
      strokeWidth={4}
    />
    <Path
      d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20"
      stroke="black"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Circle
      cx={34}
      cy={14}
      r={8}
      fill="green"
      stroke="black"
      strokeWidth={4}
    />
    <Circle cx={34} cy={14} r={3} fill="white" />
  </Svg>
);
export default SectionIcon;
