export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (errors) {
    queue.push(String(errors));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
