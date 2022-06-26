import React, { Component } from 'react';
import Book from './Book';

export default class BookList extends Component {
  state = {
    books: [
      {
        id: 1,
        book: 'book number one',
        author: 'john doe',
      },
      {
        id: 2,
        book: 'book number two',
        author: 'bobby doe',
      },
      {
        id: 3,
        book: 'book number three',
        author: 'peter doe',
      },
    ],
  };

  render() {
    const books = this.state.books.map((item) => item.book);
    console.log(books);
    return (
      <section>
        <h3>this is our bookList</h3>
        {this.state.books.map((item) => (
          <Book key={item.id} info={item}></Book>
        ))}
      </section>
    );
  }
}
