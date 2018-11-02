import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// BookListItem renders a bootstrap list item containing data from the recipe api call
export const BookListItem = props => (
  <li className="list-group-item mt-2">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.image ? props.image.replace("http://", "https://") : "https://placehold.it/300x300"} />
          <button className="btn btn-outline-primary mt-2 w-100" onClick={() => {
            if (props.saveBook) {
              props.saveBook({
                title: props.title,
                authors: JSON.stringify(props.authors),
                description: props.description,
                link: props.link,
                image: props.image
              })
            } else if (props.deleteBook) {
              props.deleteBook(props.id)
            }
          }}>{props.saveBook ? ("Save Book") : ("Remove Book")}</button>
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>

          <h6>Authors: {props.authors ? props.authors.join(", ") : undefined}</h6>

          <p>Description: {props.description}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.link}>
            Check this book out!          </a>
        </Col>
      </Row>
    </Container>
  </li>
);

