import "./../../css/home.css";

import { useRouteError } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export default function ErrorPage() {
  const error:any = useRouteError();
  console.error(error);

  return (
    <Container id="error-page" className="d-flex">
      <Row className="d-flex align-items-center mx-auto">
        <Col>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
            </p>
        </Col>
      </Row>
    </Container>
  );
}


