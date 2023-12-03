// Linear search function
const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].name === target) {
        // Element found, return its index
        console.log(array[i].name)
        return array[i].name;
      }
        console.log(array[i], target)

    }
    return -1;
  };
  
export default linearSearch
  