import React from 'react'
import { Form} from "react-bootstrap";

const FormPengumuman = () => {
  return (
    <div>
       <Form className='data'>
        <Form.Group className="mb-3">
          <Form.Label>Judul Pengumuman</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tanggal</Form.Label>
          <Form.Control type="datetime" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Link Pengumuman</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        
      </Form>
    </div>
  )
}

export default FormPengumuman
