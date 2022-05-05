let h1= document.querySelector('h1')
let h2= document.querySelector('h2')
let h3= document.querySelector('h3')
let h4= document.querySelector('h4')

let bxlDate = new Date()
h1.innerHTML="bruxelle: "+bxlDate.toLocaleString('en-Us')

let ancho ="anchorage: "+bxlDate.toLocaleString('en-US', { timeZone: 'America/Anchorage' });
h2.innerHTML=ancho

let russia="Saint-Petersburg: "+bxlDate.toLocaleString('en-US', { timeZone: 'Europe/Moscow' })
h3.innerHTML=russia


let iceland="Reykjavik: "+bxlDate.toLocaleString('en-Us')
h4.innerHTML=iceland



//2
//2.1
let p = document.querySelector('.p')
 let nowdate = Date.now()
 console.log(nowdate);
 let myDate = new Date('august 16,1997 08:30:00').getTime()
 console.log(myDate);
 
 let total = nowdate-myDate
 

let days=Math.floor(total/3600/24/1000)
p.innerHTML=days +" days I am born"
//2.2
let p2 = document.querySelector('.p2')
let currentDate = Date.now()

let oldDate = new Date('1970').getTime()


let totalOfSecond = currentDate-oldDate

let days2 = Math.floor(totalOfSecond/3600/24/1000)

p2.innerHTML=days2 + " days since 1970"


//3
//3.1

let p3= document.querySelector('.p3')
let current_date =  Date.now();
let hours = 80000*3600*1000
console.log(hours);
let result = current_date+hours
let afterDate= new Date(result)
p3.innerHTML=afterDate

//3.2
let input = document.querySelector('#number')
let p4 = document.querySelector('.p4')
function convert(){
    let nowdate= Date.now()
    let value = input.value*3600*1000
    let result = nowdate+value
    p4.innerHTML=new Date(result)



}

document.addEventListener('keyup', convert)