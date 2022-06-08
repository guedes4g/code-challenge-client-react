export const toMap = (list, keyAccessor) => {
  return list.reduce((acc, item) => {
    acc[keyAccessor(item)] = item;
    return acc;
  }, {});
};
