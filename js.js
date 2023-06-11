const d = new Date();
let ms = d.getMilliseconds();
console.log(ms);
for(var i=0;i<100;i++ ){
    console.log(i);
}
// var li = document.querySelectorAll('li');
// console.log(li);
// li.forEach(function(li, index){
//     li.style.background = 'red';
//     li.innerHTML = "list item" + index;
//     console.log(li.innerText);
// });
var obj = {
    'name':'sagar',
    'age':28,
    'edu':'MCA',
    'Year':'2020'
}
console.log(obj);
function save(data){
    // console.log(data);
}

var ManageBank = (function(){
    function constructor(urls){

    }
    return {
        init:function(urls){
            constructor(urls);
        },
        edit:function(urls){
            console.log(urls);
        }
    }
})();

ManageBank.edit('test/adat');
var jdata = $('#myForm');
console.log(jdata);

const d2 = new Date();
let ms2 = d.getMilliseconds();
console.log(ms2);

const parent = document.querySelector(".parent");
console.log(parent);
console.log(parent.children);

function addLanguage(lang){
    var li = document.createElement('li');
    // way 1
    // li.innerHTML = `${lang}`;
    // document.querySelector('.language').
    // appendChild(li)
    // Way 2
    li.appendChild(document.createTextNode(lang));
    document.querySelector('.language').
    appendChild(li)
}
addLanguage("python");
addLanguage("Java");

const secondLang = document.querySelector("li:nth-child(3)")
// secondLang.innerHTML = "Mojo";
const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);

// remove
// document.querySelector("li:last-child").remove();