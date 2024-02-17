let userScore=0
let compScore=0

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg")

const generateCompChoice=()=>{
    const choices=["stone","paper","scissor"]
    const ind=Math.floor(Math.random()*3);
    return choices[ind];
}

const showResult=(userWin,userChoice,compChoice)=>{
    if(userWin===true){
        msg.textContent=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore+=1
        document.querySelector("#user").textContent=userScore
    }else{
        msg.textContent=`You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore+=1
        document.querySelector("#comp").textContent=compScore
    }
}
const playGame=(userChoice)=>{
    const compChoice=generateCompChoice();
    console.log(userChoice,compChoice);
    if(userChoice===compChoice){
        msg.textContent="Match was draw! Play again";
        msg.style.backgroundColor="rgb(8, 8, 74)"
    }else{
        userWin=true;
        if(userChoice==="stone"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false:true;
        }else{
            userWin=compChoice==="stone"? false:true;
        }
        showResult(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})