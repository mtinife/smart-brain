import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className='faceDetectFormSection'>
            <h1>Face Detector</h1>
            <p className=''>
                {'Detects faces in pictures you paste in. Try it out!'}
            </p>
            <div className='detectionForm'>
              <input type='text' placeholder="Paste Image Link Here" onChange={ onInputChange } />
              <button className='buttonStyle' onClick={ onButtonSubmit }>Detect</button>
            </div>
            <p>This project is made possible by the <a target="_blank" href="https://clarifai.com/">Clarifai</a> API.</p>
        </div> 
    );
}

export default ImageLinkForm;
