import React from "react";
import { Form } from "react-bootstrap";

const FormUMKM = () => {
  return (
    <div>
      <Form className="data">
        <Form.Group className="mb-3">
          <Form.Label>Nomer Seri Usaha</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nama Usaha</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>No Telepon Usaha</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tanggal Mulai Usaha</Form.Label>
          <Form.Control type="datetime" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Modal Usaha</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Pendapatan</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Id Kategori</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Jenis Usaha</Form.Label>
          <Form.Control type="text" list="myList" />
            <datalist id="myList">
                <option value="Makanan" />
                <option value="Minuman" />
                <option value="Pakaian" />
                <option value="Kecantikan" />
            </datalist>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormUMKM;
