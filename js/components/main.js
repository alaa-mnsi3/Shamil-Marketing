// for mobile menu
const toggleMob=document.querySelector('.Toggle-Button');
const activeMob=document.querySelector('.Mob');

// close Menu mobile
const closeMOb=document.querySelector('#closeMOb');

//open otherServices
const otherServicesLists=document.querySelector('#otherServices__Lists__mob')
const otherServicesIcon=document.getElementById('otherServices__icon__mob')

// for loading
const loadingSection=document.querySelector('.loader__section');
const htmlTag=document.querySelector('html')

// for message me
const closeMessange = document.getElementById('closeMessange__me');
const messangeMeBlock = document.getElementById('MessangeMe__block');
const messangeDiv=document.querySelector('.messange__Me');


// for mobile Menu
toggleMob.addEventListener('click',()=>
{
    activeMob.classList.toggle('activeMob');
})
closeMOb.addEventListener('click',()=>
{
    activeMob.classList.remove('activeMob');
})

// // open otherServices
otherServicesIcon.addEventListener('click',()=>{
    otherServicesLists.classList.toggle('otherServices__ListsActive__mob')
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
    console.log(y)

    if (y >= 1700) 
    {
        messangeDiv.style.pointerEvents='visible';
        messangeDiv.style.opacity='1';
    } 
    if(y <= 1700)
    {
        messangeDiv.style.pointerEvents='none';
        messangeDiv.style.opacity='0';
    }
    // else() {
    // //     messangeDiv.style.pointerEvents='none';
    // //     messangeDiv.style.opacity='0';
    // // }
};

window.addEventListener("scroll", myScrollFunc);

// loading page
window.onload=setTimeout(function(){
    loadingSection.classList.add('loader__sectionActive')  ;
    htmlTag.style.overflowY='visible';
    document.body.style.overflowY='visible'  
},2000)
