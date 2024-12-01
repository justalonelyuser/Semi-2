const db=[
    //final
    {
        question:"What is the length of MT. K2[In meters]",
        ans:"8611 m"
    },
    {
        question:"What is the length of Mahendra Highway?[In km]",
        ans:"1,028 KM"
    },
    {
        question:"What is the area of Bardia National Park?",
        ans:"968 KM<sup>2"
    }
    ]

let nextq=document.querySelector(".getnextquestion");
let giveans=document.querySelector(".getans1");
let qholder=document.querySelector(".forq");
counter=0;
nextq.addEventListener("click", ()=>{
    if(counter<=2){
        qholder.innerHTML=db[counter].question;
    }
    else{
        window.open("streams.html", "_self");
    }
})
giveans.addEventListener("click", ()=>{
    if(counter<=2){
        qholder.innerHTML=db[counter].ans;
        counter=counter+1;
    }
    else{

    }
})