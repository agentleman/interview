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
//大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。
function largest(){
    let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    let largestArr = [0,0,0,0];
    for(let i =0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            // let num = arr[i][0];
            if(largestArr[i]<arr[i][j]){
                largestArr[i]=arr[i][j];
            }
        
        }
    }
    console.log(largestArr)
}


//确保字符串的每个单词首字母都大写，其余部分小写。
function fix_char(obj){
  let arr = obj.toLowerCase().split(" ");
  console.log(arr)
  for(let i=0;i<arr.length;i++){
     var char = arr[i].charAt(0);
     arr[i] = arr[i].replace(char,function replace(char){
         return char.toUpperCase();
     })
  }
     return arr.join(" ");
}

//找到提供的句子中最长的单词，并计算它的长度。
function longEst(obj){
    var arr = obj.split(" ");
    var num = 0;
    for(let i=0;i<arr.length;i++){
        var t = arr[i].length;
       if(t>num){
           num = t;
       }
    }
    return num
    console.log(num)
}

//如果给定的字符串是回文，返回true，反之，返回false。如果一个字符串忽略标点符号、大小写和空格，
//正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。
function palindrome(str) {
    var re = /[\W_]/g; 
    var lowRegStr = str.toLowerCase().replace(re,''); 
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  