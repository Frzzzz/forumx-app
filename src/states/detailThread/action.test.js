/**
 * skenario test
 *
 *  - asyncReceiveDetailThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncReceiveDetailThread,
  receiveDetailThreadActionCreator,
} from './action';

const fakeDetailThread = {
  detailThread: {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    owner: {
      id: 'users-1',
      name: 'John Doe',
      avatar: 'https://generated-image-url.jpg',
    },
    upVotesBy: [],
    downVotesBy: [],
    comments: [
      {
        id: 'comment-1',
        content: 'Ini adalah komentar pertama',
        createdAt: '2021-06-21T07:00:00.000Z',
        owner: {
          id: 'users-1',
          name: 'John Doe',
          avatar: 'https://generated-image-url.jpg',
        },
        upVotesBy: [],
        downVotesBy: [],
      },
    ],
  },
};

const fakeErrorResponse = new Error('Ups, something went wrong');
describe('asyncReceiveDetailThread thunk', () => {
  beforeEach(() => {
    api._getDetailThread = api.getDetailThread;
  });
  afterEach(() => {
    api.getDetailThread = api._getDetailThread;
  });
  // delete and back up data
  delete api._getDetailThread;
  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getDetailThread = () => Promise.resolve(fakeDetailThread);
    // mock dispatch
    const dispatch = vi.fn();
    // action
    await asyncReceiveDetailThread(fakeDetailThread)(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveDetailThreadActionCreator(fakeDetailThread),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getDetailThread = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();
    // action
    await asyncReceiveDetailThread(fakeDetailThread)(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
