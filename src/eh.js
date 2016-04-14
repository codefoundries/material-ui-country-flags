import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Eh = (props) => (
  <SvgIcon {...props}>
    
  <defs>
    <clipPath id="a">
      <path fillOpacity=".67" d="M-158.67 0H524v512h-682.67z"/>
    </clipPath>
  </defs>
  <g clip-path="url(#a)" fill-rule="evenodd" transform="translate(148.75) scale(.94)">
    <path d="M-180 0H844v256H-180z"/>
    <path d="M-180 256H844v256H-180z"/>
    <path d="M-180 169.31H844v176.13H-180z"/>
    <path d="M309.98 195.55c-45.202-19.423-84.107 20.644-84.063 58.085.046 39.158 38.02 80.92 86.168 62.43-34.087-10.037-48.156-35.215-48.15-60.68-.245-25.216 15.887-54.54 46.045-59.835z"/>
    <path d="M363.145 294.214l-25.835-18.868-25.993 18.898 9.963-30.403-26-18.87 31.984.07 9.93-30.552 9.816 30.435 32.115.005-25.924 18.735"/>
    <path d="M314.34 315.65c-50.517 17.536-88.554-20.48-89.216-59.456-.66-38.976 37.59-79.167 89.473-60.865-29.355 4.352-50.912 30.08-51.17 59.168-.196 21.994 12.812 53.345 50.913 61.152zM-179.98 0l348.61 256.62L-180 512l.002-509.38.015-2.622z"/>
  </g>

  </SvgIcon>
);
Eh = pure(Eh);
Eh.displayName = 'Eh';

export default Eh;
