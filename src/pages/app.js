import React from "react";
import Header from "@comp/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Authorize from "@pages/auth/login.js";
import TodosPage from "@pages/todos/index.js";
import { Container, Row, Col } from "reactstrap";
import HomePage from ".";
export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Router>
          {localStorage.getItem("apptoken") ? (
            <Redirect push to="/todos" />
          ) : (
            <Redirect push to="/auth" />
          )}
          <Row>
            {/* <Col lg={12}>
              <Header />
            </Col> */}
            <Col lg={12}>
              <Switch>
                <Route exact path={`/todos`}>
                  <TodosPage />
                </Route>
                <Route path={`/auth`}>
                  <Authorize />
                </Route>
              </Switch>
            </Col>
          </Row>
        </Router>
      </Container>
    );
  }
}
