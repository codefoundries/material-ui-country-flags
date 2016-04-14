import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from 'material-ui/lib/SvgIcon';

let Az = (props) => (
  <SvgIcon {...props}>
    
  <path d="M.1 0h640v480H.1z"/>
  <path d="M.1 0h640v320H.1z"/>
  <path d="M.1 0h640v160H.1z"/>
  <circle cx="304" cy="240" r="72"/>
  <circle cx="320" cy="240" r="60"/>
  <path d="M384 200l7.654 21.522 20.63-9.806-9.806 20.63L424 240l-21.522 7.654 9.806 20.63-20.63-9.806L384 280l-7.654-21.522-20.63 9.806 9.806-20.63L344 240l21.522-7.654-9.806-20.63 20.63 9.806L384 200z"/>

  </SvgIcon>
);
Az = pure(Az);
Az.displayName = 'Az';

export default Az;
