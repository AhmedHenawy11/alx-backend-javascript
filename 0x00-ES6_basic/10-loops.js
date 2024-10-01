export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    // find index of element
    const index = array.indexOf(value);
    // update the value of each item
    array[index] = appendString + value; // eslint-disable-line no-param-reassign
  }

  return array;
}
