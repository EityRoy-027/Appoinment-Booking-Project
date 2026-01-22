let before=document.querySelectorAll('.before');
let after=document.querySelectorAll('.after');
let calender=document.querySelector('#calender');
let calenderfeb=document.querySelector('#calenderfeb');
let calendermarch=document.querySelector('#calendermarch');
let calenderapril=document.querySelector('#calenderapril');
let calendermay=document.querySelector('#calendermay');
let calenderjune=document.querySelector('#calenderjune');
let calenderjuly=document.querySelector('#calenderjuly');
let calenderaugust=document.querySelector('#calenderaugust');
let calenderseptember=document.querySelector('#calenderseptember');
let calenderoctober=document.querySelector('#calenderoctober');
let calendernovember=document.querySelector('#calendernovember');
let calenderdecember=document.querySelector('#calenderdecember');
let count=0;
let calenderbox=document.querySelectorAll('.calenderbox');
let conti=document.querySelector('#continue');
let one=document.querySelectorAll('.one');
let timeslot=document.querySelector('#timeslot');
 let circle1=document.querySelector('#circle1');
let circle2=document.querySelector('#circle2');
let circle3=document.querySelector('#circle3');
let circle4=document.querySelector('#circle4');
let apm=document.querySelectorAll('.apm');
let conti2=document.querySelector('#conti');
let infor=document.querySelector('#information');
let book=document.querySelector('#book');
let confirms=document.querySelector('#confirm');
let another=document.querySelector('#another');
let back1=document.querySelector('#back1');
let back2=document.querySelector('#back2');
let maincalenderbox=document.querySelector('#maincalenderbox');


for(let i=0;i<after.length;i++){
after[i].addEventListener('click',function(){
 
console.log(count);
count++; 

if(count==1){
    calenderfeb.style.display='block';
    calender.style.display='none';
    
}
 else if(count==2){
    calendermarch.style.display='block';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

 else if(count==3){
    calenderapril.style.display='block';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

else if(count==4){
    calendermay.style.display='block';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

else if(count==5){
    calenderjune.style.display='block';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==6){
    calenderjuly.style.display='block';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

else if(count==7){
    calenderaugust.style.display='block';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==8){
    calenderseptember.style.display='block';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==9){
    calenderoctober.style.display='block';
    calenderseptember.style.display='none';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==10){
    calendernovember.style.display='block';
    calenderoctober.style.display='none';
    calenderseptember.style.display='none';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==11){
    calenderdecember.style.display='block';
    calendernovember.style.display='none';
    calenderoctober.style.display='none';
    calenderseptember.style.display='none';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
    


    

})
}

for(let i=0;i<before.length;i++){
before[i].addEventListener('click',function(){
 
console.log(count);
count--;    

if(count==0){
    calenderfeb.style.display='none';
    calender.style.display='block';
    
}

else if(count==1){
    calenderfeb.style.display='block';
    calender.style.display='none';
    
}
 else if(count==2){
    calendermarch.style.display='block';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

 else if(count==3){
    calenderapril.style.display='block';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

else if(count==4){
    calendermay.style.display='block';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

else if(count==5){
    calenderjune.style.display='block';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==6){
    calenderjuly.style.display='block';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}

else if(count==7){
    calenderaugust.style.display='block';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==8){
    calenderseptember.style.display='block';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==9){
    calenderoctober.style.display='block';
    calenderseptember.style.display='none';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==10){
    calendernovember.style.display='block';
    calenderoctober.style.display='none';
    calenderseptember.style.display='none';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
else if(count==11){
    calenderdecember.style.display='block';
    calendernovember.style.display='none';
    calenderoctober.style.display='none';
    calenderseptember.style.display='none';
    calenderaugust.style.display='none';
    calenderjuly.style.display='none';
    calenderjune.style.display='none';
    calendermay.style.display='none';
    calenderapril.style.display='none';
    calendermarch.style.display='none';
    calender.style.display='none';
    calenderfeb.style.display='none';
   
}
 


    

})
}

for(let i=0;i<one.length;i++){

one[i].addEventListener('click',function(){
    console.log(one[i]);
    one[i].style.backgroundColor='rgb(39, 117, 165)';
    one[i].style.color='rgb(250, 250, 250)';

    // for(let i=0;i<conti.length;i++){
        conti.style.backgroundColor='rgb(39, 117, 165)';
        console.log(conti);

    
    
    
})

}

   conti.addEventListener('click',function(){
    timeslot.style.display='flex';
    maincalenderbox.style.display='none';
    circle1.style.backgroundColor='rgba(28, 197, 39, 0.43)';
    circle2.style.backgroundColor='blue';
 


    
        })

for(let i=0;i<apm.length;i++){
    apm[i].addEventListener('click',function(){
        apm[i].style.backgroundColor='rgb(39, 117, 165)';
          conti2.style.backgroundColor='rgb(39, 117, 165)';

          conti2.addEventListener('click',function(){
            timeslot.style.display='none';
            infor.style.display='flex';
            circle1.style.backgroundColor='rgba(21, 211, 4, 0.43)';
             circle2.style.backgroundColor='rgba(36, 198, 7, 0.43)';
    circle3.style.backgroundColor='blue';
          })
    })
}

book.addEventListener('click',function(){
    infor.style.display='none';
    confirms.style.display='flex';
       circle1.style.backgroundColor='rgba(21, 211, 4, 0.43)';
             circle2.style.backgroundColor='rgba(36, 198, 7, 0.43)';
    circle3.style.backgroundColor='rgba(36, 198, 7, 0.43)';
    circle4.style.backgroundColor='blue';
})


 back1.addEventListener('click',function(){

  timeslot.style.display='none';
 maincalenderbox.style.display='block';
  circle1.style.backgroundColor='blue';
   circle2.style.backgroundColor='rgba(31, 31, 31, 0.432)';

    })


   back2.addEventListener('click',function(){

  timeslot.style.display='flex';
 infor.style.display='none';
  circle2.style.backgroundColor='blue';
   circle3.style.backgroundColor='rgba(31, 31, 31, 0.432)';

    })    

another.addEventListener('click',function(){
  
    // maincalenderbox.style.display='flex';
    timeslot.style.display='none';
 infor.style.display='none';
})
