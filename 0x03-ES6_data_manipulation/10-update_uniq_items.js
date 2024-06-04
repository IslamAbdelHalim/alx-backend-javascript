export default function updateUniqueItems(map) {
  if (map.constructor !== Map) {
    throw new Error('Cannot process');
  }

  for (const obj of map.keys()) {
    if (map.get(obj) === 1) {
      map.set(obj, 100);
    }
  }
}
