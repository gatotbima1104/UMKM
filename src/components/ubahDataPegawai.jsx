import React from 'react'
import { MdOutlineBookmarkAdd } from 'react-icons/md'

const EditPegawai = (props) => {
  const {children} = props
  return (
    <div>
      <div className="data-pegawai mt-3 p-3">
          <h5>
            <MdOutlineBookmarkAdd className="me-2" />
            {children}
          </h5>
        </div>
    </div>
  )
}

export default EditPegawai
