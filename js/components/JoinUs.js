var quesChechedAnswer = document.querySelectorAll(".ques__chechedAnswer");
var ansCheckedAnswer = document.querySelectorAll(".ans__checkedAnswer");
var iQues = document.querySelectorAll(".i__ques");
var iAns = document.querySelectorAll(".i__answ");
var checkedType = document.querySelectorAll(".Checked__type");
var checkedAnswer= document.querySelectorAll(".checked__answer");

// for questions 
for(let i=0;i<quesChechedAnswer.length; i++)
{
    quesChechedAnswer[i].addEventListener('click',()=>
    {
        quesChechedAnswer[i].classList.toggle('ques__chechedAnswerActive')
        iQues[i].classList.toggle('hideI');
        iAns[i].classList.toggle('showI');
        ansCheckedAnswer[i].classList.toggle('ans__checkedAnswerActive')
    })
}

// for checked types
for(let i=0;i<checkedType.length; i += 1)
{
    checkedType[i].addEventListener('click',()=>
    {
        console.log('alaa')
        for(let i=0;i<checkedType.length; i += 1)
        {
            checkedType[i].classList.remove('profile__ques__active');
        }
        for(let i=0;i<checkedAnswer.length; i += 1)
        {
            checkedAnswer[i].classList.remove('active__profile__ans');
        }
        checkedType[i].classList.add('profile__ques__active');
        checkedAnswer[i].classList.add('active__profile__ans')
    })
}