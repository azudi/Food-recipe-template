import * as React from "react";
import Svg, { Defs, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const CategoryIcon = (props) => (
  <Svg
    width={props.width || '30px'}
    height="32px"
    viewBox="0 0 32 32"
    id="icon"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs></Defs>
    <Path fill={props.color || 'black'} d="M29,10H24v2h5v6H22v2h3v2.142a4,4,0,1,0,2,0V20h2a2.0027,2.0027,0,0,0,2-2V12A2.0023,2.0023,0,0,0,29,10ZM28,26a2,2,0,1,1-2-2A2.0027,2.0027,0,0,1,28,26Z" />
    <Path fill={props.color || 'black'} d="M19,6H14V8h5v6H12v2h3v6.142a4,4,0,1,0,2,0V16h2a2.0023,2.0023,0,0,0,2-2V8A2.0023,2.0023,0,0,0,19,6ZM18,26a2,2,0,1,1-2-2A2.0027,2.0027,0,0,1,18,26Z" />
    <Path fill={props.color || 'black'} d="M9,2H3A2.002,2.002,0,0,0,1,4v6a2.002,2.002,0,0,0,2,2H5V22.142a4,4,0,1,0,2,0V12H9a2.002,2.002,0,0,0,2-2V4A2.002,2.002,0,0,0,9,2ZM8,26a2,2,0,1,1-2-2A2.0023,2.0023,0,0,1,8,26ZM3,10V4H9l.0015,6Z" />
    <Rect
      id="_Transparent_Rectangle_"
      data-name="&lt;Transparent Rectangle&gt;"
      className="cls-1"
      width={32}
      height={32}
    />
  </Svg>
);
export default CategoryIcon;
