import tasksReducer from './tasksReducer.js';

let initialState = [];
let actions = [
  { type: 'added', id: 1, text: 'Visit Kafka Museum' },
  { type: 'added', id: 2, text: 'Watch a puppet show' },
  { type: 'deleted', id: 1 },
  { type: 'added', id: 3, text: 'Lennon Wall pic' },
];

let finalState = actions.reduce(
  tasksReducer,
  initialState
);

const output = document.getElementById('output');
output.textContent = JSON.stringify(
  finalState,
  null,
  2
);
