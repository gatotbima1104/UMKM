import React from "react";
import Menu from "../components/navbar";
import { Container } from "react-bootstrap";
import EditPegawai from "../components/ubahDataPegawai";
import FormUMKM from "../components/formUMKM";
import { Form } from "react-bootstrap";

const InsertDUKM = () => {
  return (
    <div id="profile">
      <Menu />
      <Container>
        <EditPegawai children="Ubah Data UMKM" />
      </Container>

      <Container className="d-flex justify-content-center">
        <div className="mt-5" id="content">
          <Container className="p-5">
            <div className="row">
              <div className="col-md-6">
                <FormUMKM />
              </div>
              <div className="col-md-6">
                <Form className="data">
                  <Form.Group className="mb-3">
                    <Form.Label>Id Pemilik</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nama Pemilik</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Alamat Pemilik</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>No Telepon Pemilik</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Jenis Kelamin</Form.Label>

                    <Form.Check type="checkbox" label="Laki-laki" />
                    <Form.Check type="checkbox" label="Perempuan" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Id Petugas</Form.Label>
                    <Form.Control type="number"/>
                  </Form.Group>
                </Form>
                
                <div className="save mt-2">
                  <a href="#" className="me-5">Kosongkan Data</a>
                  <button className="btn btn-success ms-4">Simpan</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default InsertDUKM;
