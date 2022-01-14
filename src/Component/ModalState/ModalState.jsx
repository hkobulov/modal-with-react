import React from "react";
import './ModalState.scss';

function ModalState({modal, setModal}) {

    return <>
        <div className={`modal ${modal ? 'modal--open' : null}`} onClick={(evt) => {
            if(evt.target.matches('.modal')){
                setModal(false)
            }
        }}>
            <div className="modal--inner">
                <h1 className="modal--inner__heading">
                    Assalamu alaykum
                </h1>

                <button className="modal--inner__btn" onClick={() => setModal(false)}>
                    x
                </button>
            </div>
        </div>

        <button className="modalstate__btn" onClick={() => setModal(true)}>Modal (state)</button>
    </>
}

export default ModalState;