export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
	  // assigned a value but never used
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
