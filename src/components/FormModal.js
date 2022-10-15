import React from "react";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const FormModal = (props) => {
  const { items, setItems } = props;

  const [formData, setFormData] = useState({
    id: 1,
    name: "",
    rate: "",
    quantity: "",
    discount: 2,
    taxes: 10,
  });

  const {
    name,
    rate,
    quantity,
    discount,
    basic_cost = rate * quantity,
    discount_amt = (basic_cost * discount) / 100,
    final_basic_cost = basic_cost - discount_amt,
    taxes,
    tax_amt = (final_basic_cost * taxes) / 100,
    total_cost = final_basic_cost + tax_amt,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let temp = { ...formData };
    temp.basic_cost = temp.rate * temp.quantity;
    temp.discount_amt = (temp.basic_cost * temp.discount) / 100;
    temp.final_basic_cost = temp.basic_cost - temp.discount_amt;
    temp.tax_amt = (temp.final_basic_cost * temp.taxes) / 100;
    temp.total_cost = temp.final_basic_cost + temp.tax_amt;
    temp.id = items.length + 1;

    const invoiceItem = [...items, temp];

    setItems(invoiceItem);

    localStorage.setItem("items", JSON.stringify(invoiceItem));
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">
          {" "}
          <h5>Invoice</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter Product Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Rate</Form.Label>
            <Form.Control
              required
              type="number"
              name="rate"
              value={rate}
              onChange={handleChange}
              placeholder="Enter Product Rate"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              required
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleChange}
              placeholder="Enter Quantity"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Basic Cost</Form.Label>
            <Form.Control
              required
              type="number"
              value={basic_cost}
              disabled
              placeholder="Basic Cost"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Discount (%)</Form.Label>
            <Form.Control
              required
              type="number"
              value={discount}
              onChange={handleChange}
              name="discount"
              placeholder="Basic Cost"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Discount Amount</Form.Label>
            <Form.Control
              required
              type="number"
              value={discount_amt}
              name="discount-amt"
              disabled
              placeholder="Discount Amount"
            />
          </Form.Group>{" "}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Final Basic Cost</Form.Label>
            <Form.Control
              required
              type="number"
              value={final_basic_cost}
              name="final-basic-cost"
              disabled
              placeholder="Final Basic Cost"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Taxes (%)</Form.Label>
            <Form.Control
              required
              type="number"
              value={taxes}
              onChange={handleChange}
              name="taxes"
              placeholder="Taxes"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tax Amt</Form.Label>
            <Form.Control
              required
              type="number"
              value={tax_amt}
              disabled
              name="tax-amount"
              placeholder="Tax Amount"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Total Cost </Form.Label>
            <Form.Control
              required
              type="number"
              value={total_cost}
              disabled
              name="tax-amount"
              placeholder="Tax Amount"
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
};

export default FormModal;
