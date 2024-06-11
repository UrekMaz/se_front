import React from 'react';
import { useHistory } from 'react-router-dom';

function BackButton() {
    const history = useHistory();

    const handleBack = () => {
        if (history.length > 1) {
            history.goBack();
        }
    };

    return (
        <button onClick={handleBack} className="back-button">
            Back
        </button>
    );
}

export default BackButton;
