import React from 'react';
import OneRelatedImage from './OneRelatedImage.jsx';

const styles = {
  display: 'flex',
  justifyContent: 'center',
}

const RelatedImages = ({url, imgUrls, handleRelatedImageClick}) => {

  return (
    <div className="related-images-container">
      {url.map((image) =>
        <OneRelatedImage
          image={image}
          style={styles}
          imgUrls={imgUrls}
          handleRelatedImageClick={handleRelatedImageClick}

        />
      )}
    </div>
  );
}

export default RelatedImages;


