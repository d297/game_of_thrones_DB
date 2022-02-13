import React, { Component } from "react/cjs/react.production.min";
import ItemList from "../itemList";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";

class BookPage extends Component {
  gotService = new gotService();

  state = { error: false };
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    console.log(`Up - `, this.props);
    return (
      <ItemList
        onItemSelected={(itemId) => {
          this.props.history.push(`/books/${itemId}`);
        }}
        getData={this.gotService.getAllBooks}
        renderItem={({ name }) => `${name}`}
      />
    );
  }
}

export default withRouter(BookPage);
