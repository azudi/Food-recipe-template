import * as React from "react";
import Svg, { Defs, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const Policy = (props) => (
  <Svg
    width="25px"
    height="25px"
    viewBox="0 0 32 32"
    id="icon"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs></Defs>
    <Path fill={'black'} d="M30,18A6,6,0,1,0,20,22.46v7.54l4-1.8926,4,1.8926V22.46A5.98,5.98,0,0,0,30,18Zm-4,8.84-2-.9467L22,26.84V23.65a5.8877,5.8877,0,0,0,4,0ZM24,22a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,24,22Z" />
    <Rect fill={'black'} x={9} y={14} width={7} height={2} />
    <Rect fill={'black'} x={9} y={8} width={10} height={2} />
    <Path fill={'black'} d="M6,30a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V8H22V4H6V28H16v2Z" />
    <Rect
      id="_Transparent_Rectangle_"
      data-name="&lt;Transparent Rectangle&gt;"
      className="cls-1"
      width={32}
      height={32}
    />
  </Svg>
);
export default Policy;
