import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import Modal from 'react-modal';
import jsonp from 'jsonp';
import AddButton from './AddButton.js';
import './modal.css';
import './books.css';

Modal.setAppElement('#root');

const Books = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const openImageModal = () => setImageModalOpen(true);
    const closeImageModal = () => setImageModalOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const barcode = new FormData(event.target).get('barcode');
        console.log('Barcode Scanned:', barcode);

        const url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + barcode;

        jsonp(url, null, (error, data) => {
            if (error) {
                console.error('Error fetching data:', error);
                closeModal();
            } else {
                const bookData = data[`ISBN:${barcode}`];
                if (bookData && bookData.thumbnail_url) {
                    setThumbnailUrl(bookData.thumbnail_url);
                    openImageModal();
                } else {
                    closeModal();
                }
            }
        });
    };

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
                <button onClick={closeModal} className={'close'}></button>
                <h2>Scan Book Now!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="barcode" placeholder="ISBN" autoFocus/>
                    <button type="submit">Submit</button>
                </form>
            </Modal>

            <Modal isOpen={imageModalOpen} onRequestClose={closeImageModal} className={'modal'}>
                <button onClick={closeImageModal} className={'close'}></button>
                <h2>Book Image</h2>
                {thumbnailUrl && <img src={thumbnailUrl} alt="Book Cover" />}
            </Modal>
            <h1>Welcome to the Books Page</h1>
            {/* Other content for the Home page */}
        </div>
    );
};

export default Books;
