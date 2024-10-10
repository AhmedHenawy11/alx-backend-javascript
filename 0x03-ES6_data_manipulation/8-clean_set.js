export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }

  const { length } = string;
  let words = '';

  const filteredArr = [...set].filter((element) => element.slice(0, length) === string);
  const cuttedWords = filteredArr.map((element) => (element.slice(length, element.length - 1)));

  cuttedWords.forEach((element) => {
    words += element;
    // eslint-disable-next-line
    element !== cuttedWords[cuttedWords.length - 1] ? words += '-' : words += '';
  });

  return words;
}
