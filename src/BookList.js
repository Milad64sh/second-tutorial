import React, { Component } from 'react';
import Book from './Book';
import bookData from './bookData';

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bookData,
    };
  }
  handleDelete = () => {
    console.log(`i'm from parent component`);
  };

  render() {
    const books = this.state.books.map((item) => item.book);
    console.log(books);
    return (
      <section>
        <h3>this is our bookList</h3>
        {this.state.books.map((item) => (
          <Book
            key={item.id}
            info={item}
            handleDelete={this.handleDelete}
          ></Book>
        ))}
      </section>
    );
  }
}
