/* eslint-disable no-console */

export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  reportWithIterator.forEach((element) => {
    if (element !== reportWithIterator[0]) {
      output += ' ';
    }
    output += `${element}`;
    if (element !== reportWithIterator[reportWithIterator.length - 1]) {
      output += ' |';
    }
  });

  return output;
}
