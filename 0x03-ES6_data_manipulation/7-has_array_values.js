export default function hasValuesFromArray(set, narr) {
  const arr = narr;
  let status;

  for (const ele of arr) {
    set.has(ele) ? status = true : status = false;
  }

  return status;
}
