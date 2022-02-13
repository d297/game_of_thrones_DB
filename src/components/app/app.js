import React, { Component } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";
import gotService from "../../services/gotService";
import HomePage from "../homePage/homePage";
import BookPage from "../bookPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BooksItem from "../booksItem";

class App extends Component {
  gotService = new gotService();
  state = {
    show: false,
    error: false,
  };

  componentDidCatch() {
    console.log("error");
    this.setState({
      error: true,
    });
  }

  toogleRandomeChar = () => {
    const value = this.state.show;
    this.setState({ show: !value });
    console.log(value);
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <BrowserRouter>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {this.state.show && <RandomChar />}
              <Button
                className="mb-5"
                color="primary"
                onClick={this.toogleRandomeChar}
              >
                Toogle random character
              </Button>
            </Col>
          </Row>
          <Switch>
            <Route path="/characters" component={CharacterPage} />
            <Route path="/homes" component={HomePage} />
            <Route path="/books" exact component={BookPage} />
            <Route
              path="/books/:id"
              render={({ match }) => {
                const { id } = match.params;

                return <BooksItem bookId={id} />;
              }}
            />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
