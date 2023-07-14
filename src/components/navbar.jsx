import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { PiPrinterLight } from 'react-icons/pi'
import { FaUser } from 'react-icons/fa'

const Menu = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#" id="title" className="">
            <FaUser className="me-2 fs-2" /> Data pegawai
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-center"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link href="/petugas" className="text-white">
                Data Pegawai
              </Nav.Link>
              <Nav.Link href="/DUKM" className="text-white">
                Data UMKM
              </Nav.Link>
              <Nav.Link href="/pengumuman" className="text-white">
                Pengumuman
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="button">
            <Button variant="outline-success" className="me-3 custom-outline">
              {" "}
              <AiOutlinePlus /> Tambah
            </Button>
            <Button variant="outline-success" className="custom-outline">
              {" "}
              <PiPrinterLight /> Cetak
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
