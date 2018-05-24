import React from 'react';
import ReactDOM from 'react-dom';
import {toastr} from 'react-redux-toastr';
import ImageContainer from '../containers/ImageContainer';

const Main = () => (
  <div>
    <ImageContainer/>
   <button
          onClick={() => toastr.success('The title', 'The message')}
          type="button">Toastr Success</button>
  </div>
);

export default Main;
