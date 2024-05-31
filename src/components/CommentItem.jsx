import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@mui/material/CardActions';
import VoteButton from './VoteButton';
import { postedAt } from '../utils';

function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralVote,
}) {
  return (
    <section className="comment-item">
      <div className="comment-item_container">
        <div className="comment-item_grid">
          <div className="comment-item_stack">
            <img className="comment-item_user-avatar" src={owner.avatar} alt="Avatar Icon" />
            <p className="comment-item_user-name">{owner.name}</p>
          </div>
        </div>
      </div>
      <p className="comment-item_user-content">{content}</p>
      <CardActions>
        <VoteButton
          id={id}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
          upVotesBy={upVotesBy}
          downVotesBy={downVotesBy}
        />
        <span className="thread-item__user-name">
          Dibuat oleh
          {' '}
          <img src={owner.avatar} alt={owner} className="thread-item_user-avatar" />
          {' '}
          <strong>{owner.name}</strong>
          {' '}
          {postedAt(createdAt)}
        </span>
      </CardActions>
    </section>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export { commentShape };

export default CommentItem;
