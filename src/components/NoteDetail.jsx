import React from 'react';
import PropTypes from 'prop-types';

function NoteDetail({title, createdAt, body}) {
  return (
    <div className='detail-page'>
      <h2 className='detail-page__title'>{title}</h2>
      <p className='detail-page__createdAt'>{createdAt}</p>
      <p className='detail-page__body'>{body}</p>
    </div>
  );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteDetail;
