const birthdayDate=document.querySelector(".input-date");
const luckyNumber=document.querySelector(".lucky-number");
const btnCheck=document.querySelector(".btn-check");
const displayText=document.querySelector(".text");

btnCheck.addEventListener("click", function checkBirthdayIsLucky(){
    if(luckyNumber.value>0){
    var dob = birthdayDate.value.replaceAll("-","");
    var sum=0;
    for(var i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i)); 
    }
    if((sum % luckyNumber.value) == 0 )
    {
        displayText.innerText="Hurray! Your birthday is lucky🚀";
    }else{
        displayText.innerText="Ooops! You missed it🥺";
    }
  }else{
      displayText.innerText="Invalid input";
  }
});