export default function setFromArray(array, value) {
  const set = new Set(array);
  return set.has(value);
}
