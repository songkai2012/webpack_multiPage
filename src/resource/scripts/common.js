export  default {
  add:(...params)=>{
      let count = 0;
      for(let i of params){
          count+=i;
      }
      return count;
}
};