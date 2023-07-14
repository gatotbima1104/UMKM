import React from "react";
import Menu from "../components/navbar";
import EditPegawai from "../components/ubahDataPegawai";
import { Container } from "react-bootstrap";
import announce from "../assets/pengumuman.png";
import FormPengumuman from "../components/formPengumuman";

const Pengumuman = () => {
  return (
    <div id="profile">
      <Menu />

      <Container>
        <EditPegawai 
          children="Data Pengumuman"
        />
      </Container>

      <Container className="d-flex justify-content-center">
        <div className="mt-5" id="content">
          <Container className="p-5">
            <div className="row">
              <div className="col-md-6">
                <FormPengumuman />
              </div>
              <div className="col-md-6 text-center">
                <div className="profile-photo">
                  <h2 className="mb-4 fs-5">Foto Pengumuman</h2>
                  <img src={announce} alt="" />
                </div>

                <div className="save mt-2 text-end">
                  <button className="btn btn-success">Simpan</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Pengumuman;
