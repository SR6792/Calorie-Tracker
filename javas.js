const btn=document.querySelector(".btn");
const inp=document.querySelector(".inp");
const main=document.querySelector(".caltrack");
//created dom for entering food and their calories
const list=document.createElement("div");
const food=document.createElement("div");
const cal=document.createElement("div");
list.style.cssText=' margin-top:20px;display:flex; gap:40px;';
food.innerHTML= "Food";
cal.innerHTML= "Calorie";
let sum=0;
//for api
async function enterFood(){
    try{
        if(inp.value){
        const foodName=inp.value.toLowerCase().trim();
        const title = foodName.charAt(0).toUpperCase() + foodName.slice(1);//first letter cap
        food.innerHTML +=`<br>${title}`;
        const response =await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${title}`);//fetch api
        const data=response.json();
        cal.innerHTML+='<br>500';
        sum+=cal;
        list.appendChild(food);
        list.appendChild(cal);

        inp.value="";//after getting the input then the input box should be empty
        }
        else{
            alert("Enter food name");
        }
    }
    catch(err){
        console.error(err);
    }
}
main.appendChild(list);
btn.addEventListener("click",enterFood);
