import React, { Component } from "react";
import { BookList, BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        this.refresh()
    };
    deleteBook = (id) => {
        console.log(id)
        API.remove(id).then(() => {
            this.refresh()
        })
    };
    refresh = () => {
        API.findAll().then((response) => {
            this.setState({ books: response.data })
        })
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col other="w-100 mt-3" size="xs-12">
                            {!this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
                            ) : (
                                    <BookList>
                                        {this.state.books.map((book, i) => {
                                            console.log(book)
                                            return (
                                                <BookListItem
                                                    id={book._id}
                                                    key={i}
                                                    title={book.title}
                                                    link={book.link}
                                                    description={book.description}
                                                    image={book.image ?
                                                        book.image
                                                        :
                                                        undefined}
                                                    authors={JSON.parse(book.authors)}
                                                    deleteBook={this.deleteBook}
                                                />
                                            );
                                        })}
                                    </BookList>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Saved;