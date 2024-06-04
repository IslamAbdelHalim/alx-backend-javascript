export default function cleanSet(set, startString) {
  const start = startString;
  const arr = [];

  if (start.length === 0) {
    return '';
  }

  for (const ele of set) {
    if (ele.startsWith(start)) {
      arr.push(ele.slice(start.length));
    }
  }

  return arr.join('-');
}
