import React from 'react';

class LeftArrow extends React.Component {
  constructor({props}) {
    super(props);

    this.state = {
      hover: false
    }
  }
    toggleHover () {
      this.setState({hover: !this.state.hover})
    }

    render () {
      var linkStyle;
          if (this.state.hover) {
            linkStyle = {
              backgroundColor: '#c8c8c8',
              transition: '1s',
              top: '50%',
              fontFamily: "Nanum Gothic",
              color: 'white',
              cursor: 'pointer',
              fontSize: '2rem',
              position: 'absolute',
              top: '50%',
              padding: '20px 15px 20px 15px',
              opacity: '0.6',
              left: '1rem',
              borderRadius: '0 3px 3px 0',
            }
          } else {
            linkStyle = {
              backgroundColor: '#acacac',
              transition: '1s',
              top: '50%',
              fontFamily: "Nanum Gothic",
              color: 'white',
              cursor: 'pointer',
              fontSize: '2rem',
              position: 'absolute',
              top: '50%',
              padding: '20px 15px 20px 15px',
              opacity: '0.6',
              left: '1rem',
              borderRadius: '0 3px 3px 0',
            }
          }
      return (
        <div
          className= {`slide-arrow left`}
          style={linkStyle}
          onClick = {this.props.clickFunction}
          onMouseEnter={this.toggleHover.bind(this)}
          onMouseLeave={this.toggleHover.bind(this)}
          >
          {this.props.image}

        </div>
      )
    }
  }

  export default LeftArrow













// const leftArrowStyle = {

//     fontFamily: "Nanum Gothic",
//     color: 'white',
//     cursor: 'pointer',
//     fontSize: '2rem',
//     position: 'absolute',
//     top: '50%',
//     backgroundColor: '#c8c8c8',
//     padding: '20px 15px 20px 15px',
//     opacity: '0.6',
//     left: '1rem',
//     borderRadius: '0 3px 3px 0',
// }

// const LeftArrow = ({clickFunction, image}) => (
// <div
//   className= {`slide-arrow left`}
//   style={leftArrowStyle}
//   onClick = {clickFunction} >
//   {image}
// </div>
// )

// export default LeftArrow;