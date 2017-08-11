/*
 * App Actions
 *
 * Actions change things in your application
 * Since this app uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 */

import {

} from './constants';

/**
 * Load the data, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_TRANSACTIONS
 */
// export function loadData() {
//   return {
//     type: LOAD_DATA,
//   };
// }
