const option1 = document.querySelector(".op-btn1")
const option2 = document.querySelector(".op-btn2")
const option3 = document.querySelector(".op-btn3")
const option4 = document.querySelector(".op-btn4")
const option5 = document.querySelector(".op-btn5")
const option6 = document.querySelector(".op-btn6")
const option7 = document.querySelector(".op-btn7")
const option8 = document.querySelector(".op-btn8")
const option9 = document.querySelector(".op-btn9")
const option10 = document.querySelector(".op-btn10")
const option11 = document.querySelector(".op-btn11")
const option12 = document.querySelector(".op-btn12")
const option13 = document.querySelector(".op-btn13")
const option14 = document.querySelector(".op-btn14")
const option15 = document.querySelector(".op-btn15")
let counter=0;
const showBtn = document.querySelector(".forbtn")
const nextBtn = document.querySelector(".nextbtn")

const questioncont = document.querySelector(".maintext")

option1.addEventListener("dblclick", openquestion1)
option2.addEventListener("dblclick", openquestion2)
option3.addEventListener("dblclick", openquestion3)
option4.addEventListener("dblclick", openquestion4)
option5.addEventListener("dblclick", openquestion5)
option6.addEventListener("dblclick", openquestion6)
option7.addEventListener("dblclick", openquestion7)
option8.addEventListener("dblclick", openquestion8)
option9.addEventListener("dblclick", openquestion9)
option10.addEventListener("dblclick", openquestion10)


showBtn.style.display = 'none'
nextBtn.style.display = 'none'

const quiz=[
    {
        question:  `<img src="David Warner Young pic.jpg" width ="250px" height="250px"> <br> Who is this cricket player?`,
        ans:"David Warner"
    },
    {
        question:`<img src="Tilicho_Lake.jpg" width ="250px" height="250px"> <br> Name the lake`,
        ans:"Tilicho Lake",
    },
    {
        question: `<img src="AL Rayyan.jpg" width ="400px" height="250px"> <br> Guess the famous football stadium name`,
        ans: "Al Rayyan"
    },
    {
        question: `<img src="Alpaca.jpg" width ="320px" height="250px"> <br> Guess the animal's name`,
        ans: "Alpaca"
    },
    {
        question: `<img src="Binayo.jpg" width ="300px" height="250px"> <br> Guess the traditional musical instrument`,
        ans: "Binayo"
    },
    {
        question: `<img src="Dharan Dhankuta Highway (MAdan Bhandari Highway).jpg" width ="300px" height="250px"> <br> Guess the highway's name`,
        ans: "Dharan Dhankuta Highway \(Madan Bhandari Highway)"
    },
    {
        question: `<img src="Kyiv (city of ukriane).jpg" width ="300px" height="250px"> <br> Guess the city`,
        ans: "Kyiv or Kiev"
    },
    {
        question: `<img src="Mt Killimanjaro.jpg" width ="300px" height="250px"> <br> Guess the Mountain`,
        ans: "Mount Kilimanjaro"
    },
    {
        question: `<img src="Raspberry PI.jpg" width ="300px" height="250px"> <br> Guess the name of this hardware part`,
        ans: "Raspberry PI"
    },
    {
        question: `<img src="Gautam Adani.jpg" width ="350px" height="250px"> <br> Guess the person`,
        ans: "Gautam Adani"
    },


]

function openquestion1(){
    counter+=1;
   const quiz_for_1=quiz[0].question
   let ans_for_1=quiz[0].ans
   questioncont.innerHTML=quiz_for_1; 
   option1.style.display='none';
   option1.style.backgroundColor="red"
   option2.style.display='none';
   option3.style.display='none';
   option4.style.display='none';
   option5.style.display='none';
   option5.style.display='none';
   option6.style.display='none';
   option6.style.display='none';
   option7.style.display='none';
   option8.style.display='none';
   option9.style.display='none';
   option10.style.display='none';
   showBtn.style.display = 'block';
   nextBtn.style.display = 'block';
   showBtn.addEventListener("click", ()=>{
    questioncont.innerHTML=ans_for_1;
   })
 }




function openquestion2(){
    const quiz_for_1=quiz[1].question
    let ans_for_1=quiz[1].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option2.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion3(){
    const quiz_for_1=quiz[2].question
    let ans_for_1=quiz[2].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option3.style.display='none';
    option3.style.backgroundColor="red"
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion4(){
    const quiz_for_1=quiz[3].question
    let ans_for_1=quiz[3].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option4.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion5(){
    const quiz_for_1=quiz[4].question
    let ans_for_1=quiz[4].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option5.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion6(){
    const quiz_for_1=quiz[5].question
    let ans_for_1=quiz[5].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option6.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion7(){
    const quiz_for_1=quiz[6].question
    let ans_for_1=quiz[6].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option7.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion8(){
    const quiz_for_1=quiz[7].question
    let ans_for_1=quiz[7].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option8.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}   

function openquestion9(){
    const quiz_for_1=quiz[8].question
    let ans_for_1=quiz[8].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option9.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';

    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function openquestion10(){
    const quiz_for_1=quiz[9].question
    let ans_for_1=quiz[9].ans
    counter=counter+1;
    questioncont.innerHTML=quiz_for_1; 
    option1.style.display='none';
    option2.style.display='none';
    option10.style.backgroundColor="red"
    option3.style.display='none';
    option4.style.display='none';
    option5.style.display='none';
    option5.style.display='none';
    option6.style.display='none';
    option6.style.display='none';
    option7.style.display='none';
    option8.style.display='none';
    option9.style.display='none';
    option10.style.display='none';
    showBtn.style.display = 'block';
    nextBtn.style.display = 'block';
    showBtn.addEventListener("click", ()=>{
     questioncont.innerHTML=ans_for_1;
    })
}

function getNext(){
    if(counter<10){
        questioncont.innerHTML="Select Option";
        option2.style.display='flex';
        option1.style.display='flex';
        option3.style.display='flex';
        option4.style.display='flex';
        option5.style.display='flex';
        option5.style.display='flex';
        option9.style.display='flex';
        option6.style.display='flex';
        option6.style.display='flex';
        option7.style.display='flex';
        option8.style.display='flex';
        option10.style.display='flex';
        showBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    else{
        window.open("streams.html", "_self");
    }

}