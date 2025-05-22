// import { Card } from "react-bootstrap";

// const SingleBook = ({ book }) => {
//     return (
//         <Card style={{ width: "14rem", margin: "10px" }}>
            // <Card.Img
            //     variant="top"
            //     src={book.img}
            //     style={{ maxHeight: "200px" }}
            //     alt={book.title}
            // />
//             <Card.Body>
//                 <Card.Title style={{ fontSize: "1rem" }}>{book.title}</Card.Title>
//             </Card.Body>
//         </Card>
//     );
// };

// export default SingleBook;

// import { Component } from "react";
// import {Card} from "react-bootstrap"
// import CommentArea from "./CommentArea";

// class SingleBook extends Component {
//     state = {
//         selected: false,
//     };

//     render(){
//         const {book} = this.props;
//         return ( 

//             <>
//             <Card style={{ width:"14rem", margin:"10px", border: this.state.selected ? "2px solid red" : "none",}}
//             onClick={() => this.setState({selected:!this.state.selected})}>

//                      <Card.Img
//                 variant="top"
//                 src={book.img}
//                 style={{ maxHeight: "200px" }}
//                 alt={book.title}
//             />
//                 <Card.Body>
//                     <Card.Title style={{ fontSize: "1rem" }}>{book.title}</Card.Title>
//                 </Card.Body>

//             </Card>
//             {this.state.selected && <CommentArea asin={this.props.book.asin} />}
//             </>
//         );
//     }
// }

// export default SingleBook;



import React from 'react'
import { Card } from "react-bootstrap";

const SingleBook = ({ book, isSelected, onSelect }) => {
    return (
        <Card
            style={{
                width: "14rem",
                margin: "10px",
                border: isSelected ? "2px solid red" : "none",
                cursor: "pointer",
            }}
            
            onClick={onSelect}
        >
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