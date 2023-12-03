const ascInsertionSort = (array) => {
    const sortedArray = [...array];
    const length = sortedArray.length;
    for (let i = 1; i < length; i++) {
      let current = sortedArray[i];
      let j = i - 1;
      while (j >= 0 && sortedArray[j].price > current.price) {
        sortedArray[j + 1] = sortedArray[j];
        j = j - 1;
      }
      sortedArray[j + 1] = current;
    }
    return sortedArray;
  };

  export default ascInsertionSort