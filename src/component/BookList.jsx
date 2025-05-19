import React, { useState } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { Row, Col, Container } from "react-bootstrap";

const BookList = ({ books }) => {
    const [selectedAsin, setSelectedAsin] = useState(null);

    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <Row>
                        {books.map((book) => (
                            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
                                <SingleBook
                                    book={book}
                                    isSelected={selectedAsin === book.asin}
                                    onSelect={() => setSelectedAsin(selectedAsin === book.asin ? null : book.asin)}
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col md={4}>
                    {selectedAsin ? <CommentArea asin={selectedAsin} /> : <div>Scegli un libro per vedere i commenti</div>}
                </Col>
            </Row>
        </Container>
    );
};

export default BookList;