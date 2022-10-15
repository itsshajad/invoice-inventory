import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import FormModal from "./components/FormModal";
import TotalComponent from "./components/TotalComponent";

function App() {
  const [modalShow, setModalShow] = useState(false);

  const localstorageItem = JSON.parse(localStorage.getItem("items"));

  const [items, setItems] = useState(
    localstorageItem == null ? [] : localstorageItem
  );

  const handleDelete = (id) => {
    const updateItems = items.filter((items) => items.id !== id);
    setItems(updateItems);

    localStorage.setItem("items", JSON.stringify(updateItems));
  };

  return (
    <>
      <div className="App">
        <Table responsive>
          <thead>
            <tr>
              <th colSpan={10} />
              <th
                className="pointer blue-table align-center"
                onClick={() => setModalShow(true)}
              >
                {" "}
                Add New Item
              </th>
            </tr>
            <tr>
              {tableHeading.map((heading, key) => (
                <th className="blue-table" key={key}>
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((items, key) => (
              <tr key={key}>
                <th className="grey-table">{key + 1}</th>
                <th className="light-grey-table">{items.name}</th>
                <th className="light-grey-table">{items.rate}</th>
                <th className="light-grey-table">{items.quantity}</th>
                <th className="grey-table">{items.basic_cost}</th>
                <th className="light-grey-table">{items.discount}</th>
                <th className="grey-table">{items.discount_amt}</th>
                <th className="grey-table">{items.final_basic_cost}</th>
                <th className="light-grey-table">{items.taxes}</th>
                <th className="grey-table">{items.tax_amt}</th>
                <th className="grey-table">{items.total_cost}</th>
                <th
                  className="blue-table pointer"
                  onClick={() => handleDelete(items.id)}
                >
                  Delete
                </th>
              </tr>
            ))}
          </tbody>
          <TotalComponent items={items} />
        </Table>
      </div>
      <FormModal
        localstorageItem={localstorageItem}
        items={items}
        setItems={setItems}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;

const tableHeading = [
  "#",
  "Name",
  "Rate",
  "Quantity",
  "Basic Cost",
  "Discount (%)",
  "Discount Amt",
  "Final Basic Cost",
  "Taxes %",
  "Tax Amt",
  "Total Cost",
  "Tools",
];
