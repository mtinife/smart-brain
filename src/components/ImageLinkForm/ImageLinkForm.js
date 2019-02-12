import React from 'react';
import '../ImageLinkForm/ImageLinkForm';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 white'>
                {'This magic brain will detect faces in your pictures. Try it out!'}
            </p>
            <p className='f5 white'>
                {'Paste in a url in the box below and click "Detect"'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={ onInputChange } />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-pink' onClick={ onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div> 
    );
}

export default ImageLinkForm;