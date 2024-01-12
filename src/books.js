import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import AddButton from './AddButton.js';
import Modal from 'react-modal';
import './modal.css';
import './books.css';

Modal.setAppElement('#root');

const Books = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #736372; }'}</style>
            </Helmet>

            <AddButton onClick={openModal}/>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={'modal'}>
                <h2>Scan Book Now!</h2>
                <button onClick={closeModal}>X</button>
            </Modal>
            <h1>Welcome to the Books Page</h1>
            {/* Other content for the Home page */}
        </div>
    );
};

export default Books;