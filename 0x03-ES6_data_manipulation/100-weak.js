const weakMap = new WeakMap();
const queryAPI = (endpoint) => {
  const queries = (weakMap.get(endpoint) || 0) + 1;
  if (queries >= 5) throw new Error('Endpoint load is hight');
  weakMap.set(endpoint, queries);
};
export { weakMap, queryAPI };
