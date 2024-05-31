/**
 * test scenario for detailThreadReducer
 *
 * - detailThreadReducer function
 * - should return the initial state when given by unknown action
 * - should return the detailThread when given by RECEIVE_DETAIL_THREAD action
 */

import { describe, it, expect } from 'vitest';
import detailThreadReducer from './reducer';

describe('should return the initial state when given by unknown action', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };
    // action
    const nextState = detailThreadReducer(initialState, action);
    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_DETAIL_THREAD action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_DETAIL_THREAD',
      payload: {
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
      },
    };
    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });
});
