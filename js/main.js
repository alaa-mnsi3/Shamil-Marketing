const toggleMob=document.querySelector('.Toggle-Button');
const activeMob=document.querySelector('.Mob');

const loadingSection=document.querySelector('.loader__section');
const htmlTag=document.querySelector('html')

const closeMessange = document.getElementById('closeMessange__me');
const messangeMeBlock = document.getElementById('MessangeMe__block');
const messangeDiv=document.querySelector('.messange__Me')
toggleMob.addEventListener('click',()=>
{
    activeMob.classList.toggle('activeMob');
})


// close MessangeMe block
closeMessange.addEventListener('click',()=>{
    messangeMeBlock.style.display='none';
})

const x= setInterval(()=>{
    messangeMeBlock.classList.toggle('MessangeMe__blockHide')
},120000)

// show messange me
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 1000) {
        messangeDiv.style.pointerEvents='visible';
        messangeDiv.style.opacity='1';
    } else {
        messangeDiv.style.pointerEvents='none';
        messangeDiv.style.opacity='0';
    }
};

window.addEventListener("scroll", myScrollFunc);

// loading page
window.onload=setTimeout(function(){
    loadingSection.style.display='none'; 
    htmlTag.style.overflowY='visible';
    document.body.style.overflowY='visible'},2000)
