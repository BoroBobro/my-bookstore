
import { Card, Container, Row, Col } from 'react-bootstrap'
import fantasyBooks from './data/fantasy.json'
import historyBooks from './data/history.json'

const AllTheBooks = () => (
  <Container fluid className="my-5">
    <div className='row align-items-start'>
      {fantasyBooks.map((book) => (
        <Col md={4} lg={3} keys={book.asin} className="mb-4 px-3">
          <Card>
            <Card.Img variant="top" src={book.img} style={{maxHeight:"200px;" }} alt={book.title} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>${book.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </div>
    <Row>
        {
            historyBooks.map((book) =>(
                <Col md={4} lg={3} keys={book.asin} className='mb-4'>
                    <Card>
                        <Card.Img variant='top' src={book.img} alt={book.title}/>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Title>{book.price}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }
    </Row>
  </Container>
)

export default AllTheBooks
