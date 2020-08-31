import React from 'react';

const Logo=()=>
{
return(
<img src={process.env.PUBLIC_URL + "/images/logo.jpg"} width="100px" height="50px" alt="logo"/>
);
}
export default Logo;
