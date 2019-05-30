import React from 'react';


function OneRelatedImage ({image, imgUrls, handleRelatedImageClick}) {



  const styles = {
    bacwkgroundImage: `url(${image})`,
    maxWidth: '60px',
	  float: 'left',
	  margin: '10px',
	  alignContent: 'center',
	  cursor: 'pointer',
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

