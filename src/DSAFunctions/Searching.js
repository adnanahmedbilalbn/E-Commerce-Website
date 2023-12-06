
const linearSearch = (array, target) => {
  // console.log(array, target)
    for (let i = 0; i < array.length; i++) {
      if (array[i].title === target) {
        // console.log(array[i].title)
        return array[i].title;
      }
        // console.log(array[i], target)
    }
    // return -1;
    return " Product Not Found";
  };
  
export default linearSearch
  