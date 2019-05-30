import React from 'react';

const Slider = ({url}) => {
  const styles = {
   backgroundImage: `url(${url})`,
   maxWidth: '500px',
   minHeight: '500px',
   maxHeight: '500px',
  }

  return (
    <div>
      <img className="media-object" style={styles} src={url} alt="" />
    </div>
  );

}

export default Slider;

