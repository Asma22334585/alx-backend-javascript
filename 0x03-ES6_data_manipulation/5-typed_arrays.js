export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const x = new Int8Array(length);
  x.fill(value, position, position + 1);
  return new DataView(x.buffer);
}
