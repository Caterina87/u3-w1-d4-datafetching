import { Component } from "react";
import SingleBookClass from "./SingleBookClass";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
            .map((b) => (
              <Col xs={12} md={3} key={b.asin}>
                <SingleBookClass book={b} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
