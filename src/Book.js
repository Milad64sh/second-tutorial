import React, { Component } from 'react';

export default class book extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 1,
    // };
  }

  render() {
    const { id, img, title, author } = this.props.info;
    const { handleDelete } = this.props;
    return (
      <article className='book'>
        <img src={img} width='150' alt='book' />
        <div>
          <h4>Title : {title}</h4>
          <h5>Author: {author}</h5>
          <button type='button' onClick={() => handleDelete(id)}>
            delete me
          </button>
        </div>
      </article>
    );
  }
}
