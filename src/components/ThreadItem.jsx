import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import CardActions from '@mui/material/CardActions';
import { FaRegComment } from 'react-icons/fa';
import { postedAt } from '../utils';
import VoteButton from './VoteButton';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  upVote,
  downVote,
  neutralVote,
  threadOwner,
}) {
  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  const truncatedBody = body.length > 100 ? `${body.substring(0, 100)}...` : parse(body);

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__user-photo">
        <img src={threadOwner.avatar} alt={threadOwner.name} />
      </div>
      <div className="thread-item__detail">
        <div>
          <button type="button" className="thread-item__category">
            #
            {category}
          </button>
          <h1 className="thread-item__title">{title}</h1>
          <br />
          <span className="thread-item__body">{parse(truncatedBody)}</span>
        </div>
        <CardActions>
          <VoteButton
            id={id}
            upVote={upVote}
            downVote={downVote}
            upVotesBy={upVotesBy}
            downVotesBy={downVotesBy}
            neutralVote={neutralVote}
          />
          <FaRegComment />
          <span className="thread-item__total-comments">{totalComments}</span>
          <span className="thread-item__user-name">
            Dibuat oleh
            {' '}
            <strong>
              {threadOwner.name}
            </strong>
          </span>
          <span className="thread-item__created-at">{postedAt(createdAt)}</span>
        </CardActions>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  threadOwner: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export { userShape, threadItemShape };

export default ThreadItem;
