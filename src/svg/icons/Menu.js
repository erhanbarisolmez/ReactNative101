import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMenu = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className=""
    {...props}>
    <Path d="M3 12h18M3 6h18M3 18h18" />
  </Svg>
);
export default SvgMenu;
