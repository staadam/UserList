export const flatNestedObject = (nestedObject, prefix = '') => {
  return Object.keys(nestedObject).reduce((acc, valueKey) => {
    const pre = prefix.length ? prefix + '.' : '';
    const isCurrentValueObject = typeof nestedObject[valueKey] === 'object' && nestedObject[valueKey];

    if (isCurrentValueObject) Object.assign(acc, flatNestedObject(nestedObject[valueKey], pre + valueKey));
    else acc[pre + valueKey] = nestedObject[valueKey];

    return acc;
  }, {});
};
