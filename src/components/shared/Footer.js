import React from 'react';
import Menu from './Menu';

//Comp with Anonymous function
const Footer = function(){
  const year = 2020;
 
  return(
    <div style={{textAlign: 'center'}}>
      <hr />
      <Menu />
      <p>Copyright {year} | Arun </p>
    </div>
  )
}

export default Footer;