import React, { useState, useEffect } from "react";
import "./itemList.css";
import Spinner from "../spinner";

export default function ItemList({ getData, onItemSelected, renderItem }) {
  const [itemList, updateList] = useState([]);

  useEffect(() => {
    getData().then((data) => {
      updateList(data);
    });
  }, []);

  function renderItems(arr) {
    return arr.map((item, i) => {
      const label = renderItem(item);
      return (
        <li
          key={i + 1}
          className="list-group-item"
          id={i + 1}
          onClick={() => onItemSelected(i + 1)}
        >
          {label}
        </li>
      );
    });
  }

  if (!itemList) return <Spinner />;
  const items = renderItems(itemList);

  return <ul className="item-list list-group">{items}</ul>;
}
