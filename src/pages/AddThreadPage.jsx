import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';
import Header from '../components/Header';

function AddThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };
  return (
    <>
      <Header />
      <section className="add-thread">
        <div className="add-thread__card">
          <h5 className="add-thread__h5">Buat Thread</h5>
        </div>
        <ThreadInput addThread={onAddThread} />
      </section>
    </>
  );
}

export default AddThreadPage;
