export default function setFromArray(set, array) {
  // Iterate through each element in the array
  for (const value of array) {
    // If the set doesn't have the current value, return false
    if (!set.has(value)) {
      return false;
    }
  }
  // If all values exist in the set, return true
  return true;
}
