/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_TRANSACTIONS_SUCCESS,
  LOAD_TRANSACTIONS,
  LOAD_TRANSACTIONS_ERROR,
  CHANGE_EMOTION,
} from './constants';

// The initial state of the App
const initialState = fromJS({

});

function homeReducer(state = initialState, action) {
    default:
      return state;
  }
}

export default appReducer;
