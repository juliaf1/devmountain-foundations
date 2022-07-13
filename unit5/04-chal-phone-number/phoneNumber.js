const createPhoneNumber = array => {
  const areaCode = array.slice(0, 3).join('');
  return `(${areaCode}) ${array.slice(3, 6).join('')}-${array.slice(6, 10).join('')}`;
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // => returns "(123) 456-7890"