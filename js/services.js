
const ChooseDropSelect=document.getElementById('ChooseDropSelect');
const ChooseDropOptions=document.getElementById('ChooseDropOptions');

const ChooseDropSelectLikes=document.getElementById('ChooseDropSelectLikes');
const ChooseDropOptionsLikes=document.getElementById('ChooseDropOptionsLikes');

ChooseDropSelect.addEventListener('click',(e)=>
{
    console.log(e.target)
    ChooseDropOptions.classList.toggle('activeOptions');
})

ChooseDropSelectLikes.addEventListener('click',()=>
{
    ChooseDropSelectLikes.classList.toggle('ChooseDropSelectLikesActive');
    ChooseDropOptionsLikes.classList.toggle('activeOptionsLikes');
})