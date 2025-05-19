import React, { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
    state = {
        comments: [],
        loading: true,
        error: null,
    };

    fetchComments = async () => {
        try {
            const res = await fetch(
                `https://striveschool-api.herokuapp.com/api/books/${this.props.asin}/comments`,
                {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZjEyMDFlYmU4MjAwMTUwOWYzMjEiLCJpYXQiOjE3NDczMTcwMjQsImV4cCI6MTc0ODUyNjYyNH0.B8ywPnstTniw0jdb0Ms-9sORQY382ZZrD71zE2hh3aY",
                    },
                });
                
            if (!res.ok) throw new Error("Errore nel recupero commenti");
            const data = await res.json();
            this.setState({ comments: data, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }

        console.log(this.props.asin)
    };

    componentDidMount() {
        this.fetchComments();
    }

    componentDidUpdate(prevProps){
        if(prevProps.asin !== this.props.asin){
            this.setState({loading: true, error:null, comments: []},
                this.fetchComments
            );
        }
    }

    render() {
        return (
            <div style={{ margin: "10px" }}>
                <h6>Recensioni</h6>
                {this.state.loading && <div>Caricamento...</div>}
                {this.state.error && <div>{this.state.error}</div>}
                <CommentsList comments={this.state.comments} />
                <AddComment asin={this.props.asin} onCommentAdded={this.fetchComments} />
            </div>
        );
        
    }
}

export default CommentArea;