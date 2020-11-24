import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
     <Modal
        isOpen={!!props.selectedOption}   //must have   //!!props.selectedOption returns false if undefined, true if defined
        onRequestClose={props.handleDeleteSelectedOption}   //defining onRequestClose gives us the ability to close the modal by pressing the esc key or clicking the background
        contentLabel="Selected Option"
        closeTimeoutMS={4000}
        className="modal"
      >                       
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleDeleteSelectedOption}>Okay</button>
     </Modal>
)


export default OptionModal;