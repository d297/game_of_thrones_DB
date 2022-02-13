import React, { Component } from "react/cjs/react.production.min";
import { Col, Row, Container, Button } from "reactstrap";
import ItemList from "../itemList";
import ItemDetails, { Field } from "../itemDetails";
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../RowBlock";

export default class HomePage extends Component {
  gotService = new gotService();

  state = { selectedChar: 1, error: false };
  componentDidCatch() {
    this.setState({
      error: true,
    });
  }
  onItemSelected = (id) => {
    this.setState({ selectedChar: id });
    console.log("Selected ID Home - ", this.state.selectedChar);
  };
  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllHouses}
        renderItem={({ name }) => `${name} `}
      />
    );

    const charDetails = (
      <ItemDetails
        itemId={this.state.selectedChar}
        getData={this.gotService.getHouse}
      >
        {
          //name - передаем функцию
        }
        <Field field="region" label="Region" />

        <Field field="coatOfArms" label="Coat Of Arms " />
        <Field field="words" label="Words " />
      </ItemDetails>
    );

    return <RowBlock right={itemList} left={charDetails} />;
  }
}
