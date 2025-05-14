import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
    return (
        <Card style={{ width: "14rem", margin: "10px" }}>
            <Card.Img
                variant="top"
                src={book.img}
                style={{ maxHeight: "200px" }}
                alt={book.title}
            />
            <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>{book.title}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default SingleBook;
