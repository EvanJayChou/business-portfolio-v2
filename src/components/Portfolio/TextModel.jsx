import React from 'react';
import './TextModel.css';

const TextModel = ({content, onClose}) => {
    return (
        <div className="model-overlay" onClick={onClose}>
            <div className="model-content" onClick={(e) => e.stopPropagation()}>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <h2>{content.subtitle}</h2>
                <div id='github'>
                    <a href={content.link} target="_blank">GitHub Link</a>
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default TextModel;