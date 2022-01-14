import React from 'react';
import './App.scss';
import ModalRef from './Component/ModalRef/ModalRef';
import ModalState from './Component/ModalState/ModalState';


function App() {
  const headingRef = React.useRef()
  const [modal, setModal] = React.useState(false)

  return (
    <>
      <h1 className='heading'>Hikmatulloh</h1>

      <ModalRef ref={headingRef}/>

      <ModalState modal={modal} setModal={setModal}/>
    </>
  )
}

export default App;