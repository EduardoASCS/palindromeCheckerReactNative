function palindrome(str) {
  const onlyLetters = str.toString().match(/[[A-Za-z0-9]/g);

  const string = onlyLetters
    .join('')
    .toLowerCase();

  const stringReversed = onlyLetters
    .reverse()
    .join('')
    .toLowerCase();

  if (string === stringReversed) {
    return `"${str}" is a palindrome!`;
  } else {
    return `"${str}" is not a plindrome.`;
  }
}

export default palindrome;
