const weakMap = new WeakMap();

let count = 0;

function queryAPI(endpoint) {
  weakMap.set(endpoint, count += 1);
  const numOfCalls = weakMap.get(endpoint);
  if (numOfCalls >= 5) {
    throw new Error('Endpoint load is high.');
  }
}

export { weakMap, queryAPI };
