let glasses = document.querySelectorAll(".glass");
let amount = document.querySelector(".amount");
let level = document.querySelector(".water-level");
let clicked = false;

for(let i = 0; i<glasses.length; i++){
    glasses[i].addEventListener("click", ()=>{
        if(!glasses[i].classList.contains("change-color")){
            for(j = 0; j<=i; j++){
                glasses[j].classList.add("change-color");
                amount.innerText = (2-((i+1)/4)) + "L";
                level.innerText = (25*(i+1)/2) + "%";
                level.style.height = `${(25*(i+1)/2)}%`;
                amount.style.height = `${100 - (25*(i+1)/2)}%`;
            }
        }
        else{
            for(j = i; j<glasses.length; j++){
                glasses[j].classList.remove("change-color");
                if( i == 0){
                    amount.innerText = "2L";
                }
                else{
                    amount.innerText = (2-((8-i)/4)) + "L";
                }
                level.innerText = (25*i/2) + "%";
                level.style.height = `${(25*i/2)}%`;
                amount.style.height = `${100 - (25*i/2)}%`;          
            }
        }
        
    });
}

let changeHeight = ()=>{

}