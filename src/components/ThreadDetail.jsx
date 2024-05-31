import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import CardActions from '@mui/material/CardActions';
import VoteButton from './VoteButton';
import { postedAt } from '../utils';

function ThreadDetail({
  id,
  title,
  body,
  owner,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  upVote,
  downVote,
  neutralVote,
}) {
  return (
    <section className="thread-detail">
      <button type="button" className="thread-item__category">
        #
        {category}
      </button>
      <header>
        <img src={owner.avatar} alt={owner} className="thread-item_user-avatar" />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{owner?.name}</p>
          <p className="talk-detail__user-id">
            @
            {owner.id}
          </p>
        </div>
      </header>
      <div>
        <span className="thread-detail__title"><strong>{title}</strong></span>
        <span className="thread-detail__body">{parse(`${body}`)}</span>
      </div>
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
          {postedAt(createdAt)}
        </span>
      </CardActions>
    </section>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
