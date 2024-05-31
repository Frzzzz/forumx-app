import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
  UP_VOTE_DETAIL_THREAD: 'UP_VOTE_DETAIL_THREAD',
  DOWN_VOTE_DETAIL_THREAD: 'DOWN_VOTE_DETAIL_THREAD',
  NEUTRAL_VOTE_DETAIL_THREAD: 'NEUTRAL_VOTE_DETAIL_THREAD',
  ADD_COMMENT: 'ADD_COMMENT',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  NEUTRAL_VOTE_COMMENT: 'NEUTRAL_VOTE_COMMENT',
};

function receiveDetailThreadActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
}

function cleardetailThreadActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_THREAD,
  };
}

function upVoteDetailThreadActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_DETAIL_THREAD,
    payload: {
      userId,
    },
  };
}

function downVoteDetailThreadActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_DETAIL_THREAD,
    payload: {
      userId,
    },
  };
}

function neutralVoteDetailThreadActionCreator(userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_DETAIL_THREAD,
    payload: {
      userId,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function upVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentActionCreator(commentId, userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

// thunk function
function asyncReceiveDetailThread(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(cleardetailThreadActionCreator());

    try {
      const detailThread = await api.getDetailThread(threadId);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteDetailThread() {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(upVoteDetailThreadActionCreator(authUser.id));
    try {
      await api.upVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteDetailThread() {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(downVoteDetailThreadActionCreator(authUser.id));
    try {
      await api.downVoteThread(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteDetailThread() {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(neutralVoteDetailThreadActionCreator(authUser.id));
    try {
      await api.neutralThreadVote(detailThread.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncAddComment({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread } = getState();
    try {
      const comment = await api.createComment({
        content,
        threadId: detailThread.id,
      });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(upVoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.upVoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { detailThread, authUser } = getState();
    dispatch(downVoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.downVoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncNeutralVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { detailThread, authUser } = getState();
    dispatch(neutralVoteCommentActionCreator(commentId, authUser.id));
    try {
      await api.neutralVoteComment(detailThread.id, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  cleardetailThreadActionCreator,
  receiveDetailThreadActionCreator,
  upVoteDetailThreadActionCreator,
  downVoteDetailThreadActionCreator,
  neutralVoteDetailThreadActionCreator,
  addCommentActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralVoteCommentActionCreator,
  asyncReceiveDetailThread,
  asyncUpVoteDetailThread,
  asyncDownVoteDetailThread,
  asyncNeutralVoteDetailThread,
  asyncAddComment,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
};
