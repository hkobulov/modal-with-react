import React from "react";
import './ModalRef.scss'

const ModalRef = React.forwardRef((props, ref) => {
    return <>

        <div ref={ref} className="modal" onClick={(evt) => {if(evt.target.matches('.modal')) ref.current.classList.remove('modal--open')}}>
            <div className="modal--inner">
                <h1 className="modal--inner__heading">
                    Assalamu alaykum
                </h1>

                <button onClick={() => ref.current.classList.remove('modal--open')} className="modal--inner__btn">
                    x
                </button>
            </div>
        </div>

        <button className="modalref__btn" onClick={() => ref.current.classList.add('modal--open')}>Modal (ref)</button>
    </>
})

export default ModalRef;