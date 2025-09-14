//create dom obj for the main box,input box and also btn
const box = document.querySelector('.input');
const food_item = document.querySelector('.inp');
const btn = document.querySelector('.btn');
//to create a list of all items u enter
const list = document.createElement('ul');
//create dom obj so as to print total cal
const tot_cal = document.createElement('div');
//to calc total cal put sum=0
const sum = 0;
btn.addEventListener('click',()=>{
    const inp = food_item.value.toLowerCase();
    console.log(inp);
    const li = document.createElement('li');
    li.textContent += inp; 
    list.append(li);
});
box.append(list);

box.appendChild(tot_cal);
tot_cal.textContent = `Total Calorie: ${sum}`;

tot_cal+= sum + kcal;

//define kcal as cal of food item written