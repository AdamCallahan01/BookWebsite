import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import ReviewCards from './ReviewCards';
import './PopUp.css';

const PopUp = (props)  => {
  const [scrollableModal, setScrollableModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);    //Set Spoiler visibility
  const [isVisibleSummary, setIsVisibleSummary] = useState(false);    //Set Summary visibility

  //visibility of spoilers
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  //visibility of summary
  const toggleVisibilitySummary = () => {
    setIsVisibleSummary(!isVisibleSummary);
  };

  return (
    <>
      <MDBBtn id='openPopUp' className='openPopUp' onClick={() => setScrollableModal(!scrollableModal)}>More Info</MDBBtn>

      <MDBModal show={scrollableModal} setShow={setScrollableModal} tabIndex='-1'>
        <MDBModalDialog scrollable size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{props.book.book_title}</MDBModalTitle>
              <MDBBtn
                className='btn-close'
                color='none'
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <h4>
                Author: {props.book.author_name} <br/>
                Series: {props.book.series_name} <br/>
                Score: {props.book.rating}
              </h4>
              <p>
                Reading Time: {props.book.date_started} - {props.book.date_finished}    &emsp;
                Review Posted On: {props.book.date_posted}  &emsp;
                Format: {props.book.format}
              </p>
              <h4>Review: </h4>
              <p>
              {props.book.review}
              </p>
              <h4>Review with spoilers:                 
                <button className={`dropdown-button ${isVisible ? 'open' : ''}`} onClick={toggleVisibility}>
                    <span className="arrow"></span>
                </button>
              </h4>
                {isVisible && (
                    <p className="fade-in-animation">{props.book.review_spoilers}</p>
                )}
              <h4>Summary: 
                <button className={`dropdown-button ${isVisibleSummary ? 'open' : ''}`} onClick={toggleVisibilitySummary}>
                    <span className="arrow"></span>
                </button>
              </h4>
                {isVisibleSummary && (
                    <p className="fade-in-animation">{props.book.summary}</p>
                )}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setScrollableModal(!setScrollableModal)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default PopUp