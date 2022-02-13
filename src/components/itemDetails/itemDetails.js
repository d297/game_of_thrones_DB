import React, { Component } from "react";
import "./itemDetails.css";
import gotService from "../../services/gotService";

const Field = ({ item, field, label }) => {
  console.log("Field - ", item, field, label);
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Field };

export default class ItemDetails extends Component {
  gotService = new gotService();
  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
    console.log("HomePage - ", this.props);
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) this.updateItem();
  }

  updateItem() {
    const { itemId, getData } = this.props;
    console.log("itemId = ", itemId);
    if (!itemId) {
      return;
    }
    getData(itemId).then((item) => {
      //***** */
      this.setState({ item });
    });
  }

  render() {
    if (!this.state.item) {
      return <span className="select-error">Please select character</span>;
    }
    const { item } = this.state;
    //const { name, gender, born, died, culture } = this.state.char;
    const { name } = this.state.item;
    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { item });
          })}
          {/*<li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
    </li>*/}
        </ul>
      </div>
    );
  }
}
