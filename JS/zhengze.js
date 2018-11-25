let reg = new RegExp("^[0-9]*$",'g');
var state = reg.test('1222');
// console.log(state)

let reg1 = new RegExp("^[a-zA-Z]*$",'g');
let zimu = reg1.test('safdsdddd')
// console.log(zimu)

let reg2 = new RegExp("[A-Z|a-z|0-9]*$","g");
let zmsz = reg2.test('AFFFFsdss55554ss');
// console.log(zmsz);

let reg3 = new RegExp("[0-9]{3}");
let sfz = reg3.test('155')   ;
// console.log(sfz)

let reg4 = new RegExp("^\@+[a-z]{2}$");
let dhh = reg4.test('@sa');
// console.log(dhh)

let reg5 = new RegExp("^[A-Z]{2}[a-z]{1}$");
let daxie = reg5.test('SSc');
// console.log(daxie)

// let reg6 = new RegExp("^[a-zA-Z0-9]\w+\@[a-zA-Z]+\.{com|cn|org}$");
// let email = reg6.test('675740051sdf@qq.com')
// console.log(email);

let reg6 = new RegExp("^[a-zA-Z0-9]+\@[a-zA-Z]+\.(com|cn|org)");
let email = reg6.test('dfgd454@qq.com')
// console.log(email);

    //  var ps = document.createElement('div');
    //  ps.innerText=('dkjfhkjfhkj');
    //  console.log(ps);
    //  var xinD = document.getElementsByTagName('div')[0];
    //  console.log(xinD);
    //  var span = document.createElement('span');
    //  span.innerHTML='地方基地';
    //  document.body.appendChild(ps);
    //  console.log(span);
    //  ps.appendChild(span);
    //  console.log(ps);
    //  var parents = ps.parents;
    //  console.log(parents)
    //  var childs = ps.childNodes;
    //  console.log(childs);
    //  var text = ps.firstChild;
    //  console.log(text)
    // //  ps.removeChild(text)
    //  var parents = span.parentNode;
    //  console.log(parents)  
    //  console.log(childs[0].nodeType);
    //  console.log(childs[0].nodeName);
    
    
var add = document.getElementById('event');
var p1 = document.querySelectorAll('p')[0];
// console.log(add);
// add.addEventListener('click',function(e){
//      var el = e.target;
//      console.log(el)
//      e.stopPropagation();
//      e.preventDefault();
//      var text = el.innerHTML;
//      console.log(text)
// })
//封装
function bindEvent (elem,type,selector,fn){
   if (fn ==null){
       fn = selector;
       selector= null;
   }
   elem.addEventListener(type,function(e){
    if(selector){
        //代理
        var target = e.target;
        if(target.matches(selector)){
            fn.call(target,e)
        }
    }else{
        //不是代理
        fn(e);
    }
   })
}


function fn (){}


bindEvent(add,'click','p',function(e){
    e.preventDefault();
    // console.log(this.innerHTML);
    // alert(this.innerHTML)
});
bindEvent(p1,'click','p',function(e){console.log(this.innerHTML)})
