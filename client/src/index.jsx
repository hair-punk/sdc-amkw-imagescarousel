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

  handleRelatedImageClick (index) {
    this.setState({
      currentImageIndex: index
    })
  }

  async componentDidMount() {
    try {
      // let id = 1e7 - 1;
      let id = Math.floor(Math.random()*10000000);
      let response = await fetch(`http://localhost:3001/product-images/${id}`);
      let picturePaths = await response.json();
      let images = picturePaths[0].fullimages;
      this.setState ({
        imgUrls: images,
        relatedImages: images
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
    })
  }

  render () {
    return (
      <div id="container" style={{
      height: '100%',
      margin: '0',
      width: '100%',
      maxWidth: '700px',
      minHeight: '500px'}}>
        <div className="carousel" style={{position: 'relative', display: 'block'}}>
          < LeftArrow
            clickFunction={this.previousSlide}
            image='&#60;'/>
          < Slider  url={this.state.imgUrls[this.state.currentImageIndex]} />
          < RightArrow clickFunction={this.nextSlide}
            image='&#62;'/>
          < Related
            url={this.state.relatedImages}
            imgUrls={this.state.imgUrls}
            handleRelatedImageClick={this.handleRelatedImageClick} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<ImageCarousel className="image-carousel-component"/>, document.getElementById("cis-app"))