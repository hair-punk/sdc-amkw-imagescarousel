import React from 'react';


function OneRelatedImage ({image, imgUrls, handleRelatedImageClick}) {

  const styles = {
    backgroundImage: `url(${image})`
   }
   let array = imgUrls.slice(index+2, index+6)
  let index = imgUrls.indexOf(image)
  var changeCurrent = (e) => {
    e.preventDefault()
   handleRelatedImageClick(index)

  }
  return (
    <div >
      <img className="related-image" style={styles} src={image}
        onClick={changeCurrent}
      />
    </div>
  );
}


export default OneRelatedImage;

