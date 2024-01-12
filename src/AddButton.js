import React from 'react';
import './addButton.css';
const AddButton = ({ onClick }) => {
    return (
        <button type={'button'} onClick={onClick} className={'addButton'}>
            Add Book
        </button>
    );
};

export default AddButton;
