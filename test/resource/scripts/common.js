module.exports = {
  add(...data){
      let count = 0;
      for(let i of data){
          count+=i;
      }

      return count;
  }
};