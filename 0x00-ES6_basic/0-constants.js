export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  let combination = 'But sometimes let';
  combination += ' is okay'; // Append ' is okay' to the combination

  return combination;
}

export function taskNext() {
  const combination = getLast(); // Use const to declare combination, no need to reassign
  return combination;
}
