import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Is = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M0 0h640v480H0z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="0" clip-path="url(#a)">
    <path d="M0 0h666.67v480H0z"/>
    <path d="M0 186.67h186.67V0h106.67v186.67h373.33v106.67H293.34v186.67H186.67V293.34H0V186.67z"/>
    <path d="M0 213.33h213.33V0h53.333v213.33h400v53.333h-400v213.33H213.33v-213.33H0V213.33z"/>
  </g>

  </SvgIcon>
);
Is = pure(Is);
Is.displayName = 'Is';

export default Is;
