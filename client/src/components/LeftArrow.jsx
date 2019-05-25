import React from 'react';

const LeftArrow = ({clickFunction, image}) => (
<div
  className= {`slide-arrow left`}
  onClick = {clickFunction} >
  {image}
</div>
)

export default LeftArrow;