import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveDetailThread,
  asyncUpVoteDetailThread,
  asyncNeutralVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncAddComment,
  asyncUpVoteComment,
  asyncNeutralVoteComment,
  asyncDownVoteComment,
} from '../states/detailThread/action';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import ThreadDetail from '../components/ThreadDetail';
import Loading from '../components/Loading';
import Header from '../components/Header';

function DetailPage() {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailThread(id));
  }, [id, dispatch]);

  const onUpVoteThreadDetail = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncUpVoteDetailThread());
    }
  };

  const onDownVoteThreadDetail = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncDownVoteDetailThread());
    }
  };

  const onNeutralVoteThreadDetail = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncNeutralVoteDetailThread());
    }
  };

  const onCommentSubmit = (content) => {
    dispatch(asyncAddComment({ content }));
  };

  const onUpVoteComment = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncUpVoteComment());
    }
  };

  const onDownVoteComment = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncDownVoteComment());
    }
  };

  const onNeutralVoteComment = () => {
    if (authUser === null) {
      alert('Login First');
    } else {
      dispatch(asyncNeutralVoteComment());
    }
  };

  if (!detailThread) {
    return (
      <>
        <Header />
        <p>Thread Tidak ditemukan!</p>
      </>
    );
  }

  if (authUser === null) {
    return (
      <>
        <Header />
        <section className="detail-page">
          <Loading />
          <ThreadDetail
            {...detailThread}
            upVote={onUpVoteThreadDetail}
            downVote={onDownVoteThreadDetail}
            neutralVote={onNeutralVoteThreadDetail}
          />
          <p className="detail-page__comment">
            <Link className="link-login" to="/login">Login</Link>
            {' '}
            <span>untuk memberi komentar</span>
          </p>
          <br />
          <CommentList
            comments={detailThread?.comments}
            upVoteComment={onUpVoteComment}
            downVoteComment={onDownVoteComment}
            neutralVoteComment={onNeutralVoteComment}
          />
        </section>
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="detail-page">
        <Loading />
        <ThreadDetail
          {...detailThread}
          upVote={onUpVoteThreadDetail}
          downVote={onDownVoteThreadDetail}
          neutralVote={onNeutralVoteThreadDetail}
        />
        <CommentInput addComment={onCommentSubmit} />
        <p className="detail-page__comment">
          Komentar (
          {detailThread?.comments?.length}
          )
        </p>
        <CommentList
          comments={detailThread?.comments}
          upVoteComment={onUpVoteComment}
          downVoteComment={onDownVoteComment}
          neutralVoteComment={onNeutralVoteComment}
        />
      </section>
    </>
  );
}

export default DetailPage;
