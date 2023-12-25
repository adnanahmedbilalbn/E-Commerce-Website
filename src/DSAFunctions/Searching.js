
function linearSearch(array, target){
    for (let i = 0; i < array.length; i++) {
      if (array[i].title === target) {
        return array[i];
      }
    }
    return -1;
  };
  
export default linearSearch