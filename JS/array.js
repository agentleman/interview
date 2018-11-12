function concat (){
    let arr1 = [1,23,3];
    let arr2 = [1,45,2,6];
    let arr3 = arr1.concat(arr2);
    console.log(arr3);
    console.log(arr3.join('*'));
    console.log(arr3.push('aa','bb'),arr3)
}
concat();

function substr(a,c){
    let str = 'agentleman';
    console.log(str.substr(a,c));
};
function substring(a,c){
    let str = 'agentleman';
    console.log(str.substring(a,c));
};
function forEach(){
    let newArr = [];
    let str = [3,2];
    str.forEach(function (value,ind) {
        newArr.unshift(value);
        if (newArr.length == str.length){
            console.log(newArr)
        }
    })
}
function sort (){
    // let arr = ['a','g','e','n','t','l','e'];
    let arr1 = [4,5,8,1,234];
    console.log(arr1.sort((a,b) => {return (b-a)}));
}