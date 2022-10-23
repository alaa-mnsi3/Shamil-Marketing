const profileQues=document.querySelectorAll('.profile__ques');
const profileAns =document.querySelectorAll('.profile__ans');

console.log(profileQues)
for(let i=0;i<profileQues.length; i += 1)
{
    profileQues[i].addEventListener('click',()=>
    {   
        for(let i=0;i<profileQues.length; i += 1)
        {
            profileQues[i].classList.remove('profile__ques__active');
        }
        for(let i=0;i<profileQues.length; i += 1)
        {
            profileAns[i].classList.remove('active__profile__ans');
        }
        profileQues[i].classList.add('profile__ques__active');
        profileAns[i].classList.add('active__profile__ans')
    })
}