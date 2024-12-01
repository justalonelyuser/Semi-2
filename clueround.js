const quiz=[
    {
        question:"Identify the given scientist on the basis of given clues",
        clue1:"One of the German - born theoretical physicist who was born on March 14 1879. ",
        clue2:"Named as   &quot; Person of the century &quot; by Times Magazine.",
        clue3:"Got Nobel prize in physics in 1921.",
        ans:"Albert Einstein"
    },
    {
        question:"Identify the given person on the basis of given clues . ",
        clue1:"He / she is a naturalized American business Magnate who was born on June 28 , 1971 in Pretoria , south Africa" ,
        clue2:"On December 13 , 2021 he / she was named as 'Person of the year'",
        clue3:"He / she is the founder of the Boring Company and chief engineer at spaceX",
        ans:"Elon Musk"
    },
    {
       question:"Identify the given actor on the basis of given clues . ",
       clue1:"One of the Indian actors whose All number plates are 555. ",
       clue2:"He is the owner of Dreamz Unlimited and Red Chilies Entertainment .",
       clue3:"Started his carrer from his first movie &quot; Deewana &quot;",
       ans:"Shah Rukh Khan"}]

        let mainquestion=document.querySelector(".formainquestion");
        let clue_1=document.querySelector(".clue1")
        let clue_2=document.querySelector(".clue2")
        let clue_3=document.querySelector(".clue3")
        let ams=document.querySelector(".ans1");
        let amsgiver=document.querySelector(".getans1");
        let givenext=document.querySelector(".getnextquestion");
        let firstclue_give=document.querySelector(".forfirstclue")
        let secondclue_give=document.querySelector(".forsecondclue")
        let thirdclue_give=document.querySelector(".forthirdclue")
        let counter=0;
        let counter_for_others=0;
        
        amsgiver.addEventListener("click", ()=>{
            ams.innerHTML=quiz[counter].ans;
        })
        givenext.addEventListener("click", ()=>{
            if(counter==0){
                mainquestion.innerHTML=quiz[counter].question;
                counter_for_others=counter;
                counter+=1;}
            else if (counter<=2){
                mainquestion.innerHTML=quiz[counter].question;
                clue_1.innerHTML=""
                clue_2.innerHTML=""
                clue_3.innerHTML=""
                ams.innerHTML=""
                counter+=1;
                counter_for_others+=1
            }
            else{
                window.open("streams.html", "_self")
            }
        })
        firstclue_give.addEventListener("click", ()=>{
            clue_1.innerHTML=quiz[counter_for_others].clue1;
        })
        secondclue_give.addEventListener("click", ()=>{
            clue_2.innerHTML=quiz[counter_for_others].clue2;
        })
        thirdclue_give.addEventListener("click", ()=>{
            clue_3.innerHTML=quiz[counter_for_others].clue3;
        })