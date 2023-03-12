import { legacy_createStore } from 'redux';
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');
number.innerText = '0';
const countModifier = (count = 0, action) => {
  console.log(action);
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
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
//subscribe는 state의 변화를 알 수 있게 해줌
const handleAdd = () => {
  countStore.dispatch({ type: 'ADD' });
};

const handleMinus = () => {
  countStore.dispatch({ type: 'MINUS' });
};
add.addEventListener('click', () => handleAdd());
minus.addEventListener('click', () => handleMinus());
