import { legacy_createStore } from 'redux';
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  }
  return count;
};
//reducer는 data를 modify하는 function임
//위에서는 reducer의 함수명을 countModifier로 했고
//countModifier가 return하는 값은 data가 된다
const countStore = legacy_createStore(countModifier);

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });
console.log(countStore.getState());
