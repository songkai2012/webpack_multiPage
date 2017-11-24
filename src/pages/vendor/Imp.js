export default {
    getDate:(time)=>{
        return new Date(time/1000);
    },
    add:(...params)=>{
        let count = 0;
        for(let item of params){
            count += item;
        }
        return count;
    }
}