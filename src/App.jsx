import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Modal } from 'bootstrap'
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;
console.log(baseUrl);
console.log(apiPath);


function App() {
  useEffect(() => {
    (async () => {
      const res = await axios.get('https://randomuser.me/api/');
      console.log(res);

    })()
  }, [])

  //導入modal功能
  const modalRef =useRef(null);

  useEffect(()=>{
    new Modal (modalRef.current);
  },[])

  const handleModalShow = ()=>{
    const modalInstance =Modal.getInstance(modalRef.current);
    modalInstance.show()
  }

  const handleModalHide = ()=>{
    const modalInstance =Modal.getInstance(modalRef.current);
    modalInstance.hide()
  }


  return (
    <>
      
      <button type="button" className="btn btn-primary" onClick={handleModalShow}>
        Launch demo modal
      </button>

      <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalHide}></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalHide}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
