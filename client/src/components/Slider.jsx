import React from 'react';

const Slider = ({url}) => {
  const styles = {
   backgroundImage: `url(${url})`
  }

  return (
    <div>
      <img className="media-object" style={styles} src={url} alt="" />
    </div>
  );

}

export default Slider;

