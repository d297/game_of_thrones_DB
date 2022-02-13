import React, { Component } from "react/cjs/react.production.min";
import { Col, Row, Container, Button } from "reactstrap";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../RowBlock";

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = { selectedChar: 130, error: false };
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  onItemSelected = (id) => {
    this.setState({ selectedChar: id });
  };
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllCharacters}
        renderItem={({ name, gender }) => `${name} (${gender})`}
      />
    );

    const charDetails = (
      <ItemDetails
        itemId={this.state.selectedChar}
        getData={this.gotService.getCharacter}
      >
        <Field field="gender" label="gender" />
        <Field field="born" label="Born" />
        <Field field="died" label="Died" />
        <Field field="culture" label="Culture " />
      </ItemDetails>
    );

    return <RowBlock right={itemList} left={charDetails} />;
  }
}
