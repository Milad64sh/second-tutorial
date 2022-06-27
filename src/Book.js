import React, { Component } from 'react';

export default class book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showInfo: true,
    };
  }
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, img, title, author } = this.props.info;
    const checkInfo = (info) => {
      if (info === true) {
        return (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, eum.
          </p>
        );
      } else {
        return null;
      }
    };
    return (
      <article className='book'>
        <img src={img} width='150' alt='book' />
        <div>
          <h4>Title : {title}</h4>
          <h5>Author: {author}</h5>
          <button type='button' onClick={this.handleInfo}>
            toggle info
          </button>
          {checkInfo(this.state.showInfo)}
          {/* {this.state.showInfo ? (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </p>
          ) : null} */}

          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              suscipit vitae magni praesentium sapiente quibusdam ipsa
              voluptatum incidunt expedita omnis?
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
