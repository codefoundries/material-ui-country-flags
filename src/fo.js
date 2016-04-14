import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Fo = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-78.015 32h640v480h-640z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" clip-path="url(#a)" transform="translate(78.02 -32)" stroke-width="0">
    <path d="M-78.015 32h663.91v480h-663.91z"/>
    <path d="M-76.033 218.67h185.9V32h106.23v186.67h371.79v106.67h-371.79v186.67h-106.23V325.34h-185.9V218.67z"/>
    <path d="M-76.033 245.33h212.45V32h53.113v213.33h398.35v53.333H189.53v213.33h-53.113v-213.33h-212.45V245.33z"/>
  </g>

  </SvgIcon>
);
Fo = pure(Fo);
Fo.displayName = 'Fo';

export default Fo;
