import {store} from '../store';
import down from '../../actions/down';
import { REFRESH } from '../constants';

// const fall = () => {
//     setTimeout(() => {
//         store.dispatch(down())
//     }, 500);
// }


const fall = () => {
  let playing = store.getState().playing;
  const fallPromise = new Promise((resolve, reject) => {
    resolve(playing);
  });
  
  // fallPromise.then((value) => {
  //   store.dispatch(value)
  //   // expected output: "foo"
  // });
  return fallPromise;
}


export default fall;