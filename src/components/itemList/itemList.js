import React, { Component } from "react";
import "./itemList.css";

import Spinner from "../spinner";
export default class ItemList extends Component {
  // gotService = new gotService(); - вызываем на уровень выше
  state = {
    itemList: null,
  };
  componentDidMount() {
    const { getData } = this.props;
    getData().then((itemList) => {
      this.setState({ itemList });
    });
  }
  renderItems(arr) {
    return arr.map((item, i) => {
      const { id } = item;
      const label = this.props.renderItem(item);
      console.log(item);
      return (
        <li
          key={i + 1}
          className="list-group-item"
          id={i + 1}
          onClick={() => this.props.onItemSelected(i + 1)}
        >
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) return <Spinner />;
    const items = this.renderItems(itemList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
