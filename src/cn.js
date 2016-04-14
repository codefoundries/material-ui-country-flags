import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Cn = (props) => (
  <SvgIcon {...props}>
    
  <title>
    Flag of the People&apos;s Republic of China
  </title>
  <defs>
    <path id="b" d="M-.588.81L0-1 .588.81-.952-.31H.952z"/>
    <clipPath id="a">
      <path d="M-5-15.4h26.667v20H-5z"/>
    </clipPath>
  </defs>
  <g transform="matrix(.48 0 0 .48 -2.6 2.39)" clip-path="url(#a)">
    <path d="M-5-15.4h30v20H-5z"/>
    <use height="20" width="30" transform="matrix(3 0 0 3 0 -10.4)" />
    <use height="20" width="30" transform="rotate(-120.93 -1.29 -8.12)" />
    <use height="20" width="30" transform="rotate(-98.11 -1.45 -8.74)" />
    <use height="20" width="30" transform="rotate(-74.04 -2.07 -8.84)" />
    <use height="20" width="30" transform="rotate(-51.32 -4.16 -8.4)" />
  </g>

  </SvgIcon>
);
Cn = pure(Cn);
Cn.displayName = 'Cn';

export default Cn;
