
import { Card, Container, Row, Col } from 'react-bootstrap'
import fantasyBooks from './data/fantasy.json'

const AllTheBooks = () => (
  <Container className="my-5">
    <Row>
      {fantasyBooks.map((book) => (
        <Col md={4} lg={3} key={book.asin} className="mb-4">
          <Card>
            <Card.Img variant="top" src={book.img} alt={book.title} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>${book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)

export default AllTheBooks
