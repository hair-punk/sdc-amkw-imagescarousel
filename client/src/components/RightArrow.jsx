import React from 'react';



class RightArrow extends React.Component {
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
              right: '1rem',
              borderRadius: '3px 0 0 3px',
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
              right: '1rem',
              borderRadius: '3px 0 0 3px',
            }
          }
      return (
        <div
          className= {`slide-arrow right`}
          style={linkStyle}
          onClick = {this.props.clickFunction}
          onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}
          >
          {this.props.image}

        </div>
      )
    }
  }

  export default RightArrow
// const RightArrow = ({clickFunction, image}) => (
// <div
//   className= {`slide-arrow right`}
//   style={rightArrowStyle}
//   onClick = {clickFunction} >
//   {image}
// </div>
// )

// export default RightArrow








// var Link = React.createClass({
//   getInitialState: function(){
//     return {hover: false}
//   },
//   toggleHover: function(){
//     this.setState({hover: !this.state.hover})
//   },
//   render: function() {
//     var linkStyle;
//     if (this.state.hover) {
//       linkStyle = {backgroundColor: 'red'}
//     } else {
//       linkStyle = {backgroundColor: 'blue'}
//     }
//     return(
//       <div>
//         <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
//       </div>
//     )
//   }