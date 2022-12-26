import * as React from "react";

const GameIframe = ({route}) => {
const {url}=route.params;
return (
<iframe src={url} height={'200%'} width={'100%'} />
 )
}

export default GameIframe;




 
