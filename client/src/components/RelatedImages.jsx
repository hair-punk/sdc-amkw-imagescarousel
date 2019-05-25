import React from 'react';
import OneRelatedImage from './OneRelatedImage.jsx';

const RelatedImages = ({url, imgUrls, handleRelatedImageClick}) => {

  return (
    <div className="related-images-container">
      {url.map((image) =>
        <OneRelatedImage
          image={image}
          imgUrls={imgUrls}
          handleRelatedImageClick={handleRelatedImageClick}

        />
      )}
    </div>
  );
}

export default RelatedImages;


