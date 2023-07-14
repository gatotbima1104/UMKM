import "../App.css";
import { Container } from "react-bootstrap";
import FormPegawai from "../components/formPegawai";
import user from "../assets/user.png";
import Menu from "../components/navbar";
import EditPegawai from "../components/ubahDataPegawai";

function App() {
  return (
    <div id="profile">
      <Menu />
      <Container>
        <EditPegawai 
        children="Ubah Data Pegawai"
        />
      </Container>

      <Container className="d-flex justify-content-center">
        <div className="mt-5" id="content">
          <Container className="p-5">
            <div className="row">
              <div className="col-md-6">
                <FormPegawai />
              </div>
              <div className="col-md-6 text-center">
                <div className="profile-photo">
                  <h2 className="mb-4">Foto Petugas</h2>
                  <img src={user} alt="" />
                </div>
                <input
                  type="file"
                  id="fileInput"
                  className="form-control mt-2"
                />
                <div className="save mt-2 text-start">
                  <button className="btn btn-success">Simpan</button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default App;
