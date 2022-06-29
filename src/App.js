import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.refs.myName;
    const nameValue = name.value;
    const email = this.email.value;
  };
  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='myName' />
          <input type='email' ref={(email) => (this.email = email)} />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
        <p>hello world</p>
      </section>
    );
  }
}

export default class App extends Component {
  render() {
    return <Form />;
  }
}
