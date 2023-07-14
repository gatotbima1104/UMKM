import React from "react";
import { Form} from "react-bootstrap";

const FormPegawai = () => {
  return (
    <div>
      <Form className="data">
        <Form.Group className="mb-3">
          <Form.Label>Nama Petugas</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Jenis Kelamin</Form.Label>

          <Form.Check type="checkbox" label="Laki-laki" />
          <Form.Check type="checkbox" label="Perempuan" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>No. HP</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        
      </Form>
    </div>
  );
};

export default FormPegawai;
