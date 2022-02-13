import React, { Component } from "react";
import gotService from "../../services/gotService";
import ItemDetails, { Field } from "../itemDetails";

export default class BooksItem extends Component {
  gotService = new gotService();

  render() {
    return (
      <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
        <Field field="authors" label="Authors" />
        <Field field="publisher" label="Publisher" />
        <Field field="numberOfPages" label="Number Of Pages " />
        <Field field="isbn" label="ISBN" />
      </ItemDetails>
    );
  }
}
