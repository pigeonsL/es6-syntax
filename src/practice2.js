const inject = (items, sections) => {
    //逆序排序，前面插入之后会影响后面的index插入位置
    sections.sort((a, b) => b.index - a.index);
    for(let obj of sections){
        let index = obj.index;
        items.splice(index, 0, obj.content);
    }
    return items;
}
export { inject };
