const toggleMob=document.querySelector('.Toggle-Button');
const activeMob=document.querySelector('.Mob');

const loadingSection=document.querySelector('.loader__section');
const htmlTag=document.querySelector('html')


toggleMob.addEventListener('click',()=>
{
    activeMob.classList.toggle('activeMob');
})




// loading page
window.onload=setTimeout(function(){
    loadingSection.style.display='none'; 
    htmlTag.style.overflowY='visible';
    document.body.style.overflowY='visible'},2000)
