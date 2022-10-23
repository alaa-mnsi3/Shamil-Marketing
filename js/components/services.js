
const ChooseDropSelect=document.getElementById('ChooseDropSelect');
const ChooseDropOptions=document.getElementById('ChooseDropOptions');

const ChooseDropOptionsServices=document.querySelectorAll('.ChooseDropOptionsServices');
const ChooseDropSelectServices=document.querySelectorAll('.ChooseDropSelectService');

ChooseDropSelect.addEventListener('click',(e)=>
{
    console.log(e.target)
    ChooseDropOptions.classList.toggle('activeOptions');
})

console.log(ChooseDropSelectServices)

for(let i=0;i<ChooseDropSelectServices.length; i += 1)
{
    ChooseDropSelectServices[i].addEventListener('click',()=>
    {
        // ChooseDropSelectServices.forEach(item => item.classList.remove('ChooseDropSelectLikesActive'))
        ChooseDropSelectServices[i].classList.toggle('ChooseDropSelectLikesActive');
        ChooseDropOptionsServices[i].classList.toggle('activeOptionsLikes');
    })
}