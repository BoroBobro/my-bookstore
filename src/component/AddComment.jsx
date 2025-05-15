import React, { Component } from "react";

class AddComment extends Component {
    state = {
        comment: "",
        rate: 1,
        error: null,
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZjEyMDFlYmU4MjAwMTUwOWYzMjEiLCJpYXQiOjE3NDczMTcwMjQsImV4cCI6MTc0ODUyNjYyNH0.B8ywPnstTniw0jdb0Ms-9sORQY382ZZrD71zE2hh3aY",
                    },
                    body: JSON.stringify({
                        comment: this.state.comment,
                        rate: this.state.rate,
                        elementId: this.props.asin,
                    }),
                }
            );
            if (!res.ok) throw new Error("Errore nell'invio del commento");
            this.setState({ comment: "", rate: 1, error: null });
            this.props.onCommentAdded();
        } catch (error) {
            this.setState({ error: error.message });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Scrivi una recensione"
                    value={this.state.comment}
                    onChange={(e) => this.setState({ comment: e.target.value })}
                    required
                />
                <select
                    value={this.state.rate}
                    onChange={(e) => this.setState({ rate: e.target.value })}
                >
                    {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </select>
                <button type="submit">Aggiungi</button>
                {this.state.error && <div>{this.state.error}</div>}
            </form>
        );
    }
}

export default AddComment;