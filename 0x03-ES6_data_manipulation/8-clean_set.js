function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || set.size === 0 || startString === '') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

export default cleanSet;
