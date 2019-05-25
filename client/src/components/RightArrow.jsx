import React from 'react';

const RightArrow = ({clickFunction, image}) => (
<div
  className= {`slide-arrow right`}
  onClick = {clickFunction} >
  {image}
</div>
)

export default RightArrow