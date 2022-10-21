const toggleMob=document.querySelector('.Toggle-Button');
const activeMob=document.querySelector('.Mob');

const loadingSection=document.querySelector('.loader__section');
const htmlTag=document.querySelector('html')

// const ChooseDropSelect=document.getElementById('ChooseDropSelect');
// const ChooseDropOptions=document.getElementById('ChooseDropOptions');

// const ChooseDropSelectLikes=document.getElementById('ChooseDropSelectLikes');
// const ChooseDropOptionsLikes=document.getElementById('ChooseDropOptionsLikes');

toggleMob.addEventListener('click',()=>
{
    activeMob.classList.toggle('activeMob');
})

// ChooseDropSelect.addEventListener('click',(e)=>
// {
//     console.log(e.target)
//     ChooseDropOptions.classList.toggle('activeOptions');
// })

// ChooseDropSelectLikes.addEventListener('click',()=>
// {
//     ChooseDropOptionsLikes.classList.toggle('activeOptionsLikes');
// })

// loading page
window.onload=setTimeout(function(){
    loadingSection.style.display='none'; 
    htmlTag.style.overflowY='visible';
    document.body.style.overflowY='visible'},2000)
