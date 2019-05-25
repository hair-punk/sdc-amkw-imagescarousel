import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';
import LeftArrow from './components/LeftArrow.jsx';
import RightArrow from './components/RightArrow.jsx';
import Related from './components/RelatedImages.jsx'


class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls : [],
      currentImageIndex: 0,
      relatedImages : []
    }
  this.nextSlide = this.nextSlide.bind(this)
  this.previousSlide = this.previousSlide.bind(this)
  this.handleRelatedImageClick = this.handleRelatedImageClick.bind(this)
  }

  handleRelatedImageClick ( index) {

    this.setState({
      currentImageIndex: index
    })
  }

  async componentDidMount() {
    try {
      //fetches images from database and pushes them into the imgUrls array
      let response = await fetch('/product-images');
      let pictures = await response.json();
      let images = pictures.images
      let imageColl = [];
      images.forEach(function(image){
        imageColl.push(image.url)
      })
      this.setState ({
        imgUrls : imageColl
      })
      //will place the first image of the collection on the slider
      //will pick the next 4 following images for the related images below the big one
     this.setState ({
      currentImageIndex: 0,
      relatedImages: this.state.imgUrls.slice(2,6)
     })
    } catch (err) {
      console.error('Encountered error fetching product images', err);
    }
  }

  //On LeftArrow Click the carousel will display the image that precedes the current one, and if it is displaying the first one will display the last one next
  previousSlide () {
    const lastIndex = this.state.imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === 0;
    const index = resetIndex ? lastIndex : currentImageIndex - 1;

    this.setState ({
      currentImageIndex: index,
      relatedImages: this.state.imgUrls.slice(this.state.currentImageIndex+2, this.state.currentImageIndex+6)
    })

  }

  //on RightArrow click the carousel will display the next image. If already displaying the last image the next one will be the first one
  nextSlide () {
    const lastIndex = this.state.imgUrls.length - 1;
    const {currentImageIndex} = this.state;
    const resetIndex = currentImageIndex === lastIndex;
    const index = resetIndex ? 0 : currentImageIndex + 1;

    this.setState ({
      currentImageIndex: index,
      relatedImages: this.state.imgUrls.slice(this.state.currentImageIndex+2, this.state.currentImageIndex+6)
    })

  }



  render () {
    return (
    <div className="carousel">

      <LeftArrow
        clickFunction={this.previousSlide}
        image='&#60;'/>
      <Slider url={this.state.imgUrls[this.state.currentImageIndex]} />
      <RightArrow clickFunction={this.nextSlide}
        image='&#62;'/>
        <Related
          url={this.state.relatedImages}
          imgUrls={this.state.imgUrls}
          handleRelatedImageClick={this.handleRelatedImageClick}

        />
    </div>
    )
  }
}

ReactDOM.render(<ImageCarousel />, document.getElementById('app'))