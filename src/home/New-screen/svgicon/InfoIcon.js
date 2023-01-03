import * as React from "react";
import Svg, { Defs, G, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const InfoIcon = (props) => (
  <Svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    id="magicoon-Filled"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Defs></Defs>
    <G id="info-circle-Filled">
      <Path
        id="info-circle-Filled-2"
        data-name="info-circle-Filled"
        className="cls-1"
        fill={props.color || 'black'} 
        d="M12,2A10,10,0,1,0,22,12,10.016,10.016,0,0,0,12,2Zm1,14a1,1,0,0,1-2,0V12a1,1,0,0,1,2,0ZM12,9a1,1,0,1,1,1-1A1,1,0,0,1,12,9Z"
      />
    </G>
  </Svg>
);
export default InfoIcon;
