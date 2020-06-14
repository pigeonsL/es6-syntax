const parseData = input =>{
    let result = [];
    for(let i = 0; i < input.data.length; ++i){
        let obj = {};
        for(let j = 0; j < input.column.length; ++j){
            let name = input.column[j].name;
            obj[name] = input.data[i][j];
        }
        result.push(obj);
    }
    return result;
}
export { parseData };
