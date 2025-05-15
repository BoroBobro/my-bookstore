import SingleBook from "./SingleBook";
import { Row, Col } from "react-bootstrap";

const BookList = ({books}) => {
    return(
        <Row>
            {books.map((book) =>(
                <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
                    <SingleBook book={book}/>
                </Col>
            ))}
        </Row>
    )
}

export default BookList