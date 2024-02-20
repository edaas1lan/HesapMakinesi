const title=document.querySelector('h1');
const buttons=document.querySelectorAll('button');
const resetbutton=document.getElementById('resetbutton');

let baslangic=0;
let operatorvalue='';
let bekleme=false;//beklemediği durumda ilk sayıyı giriyor demek

function sendnumbervalue(number){
    // console.log(number);
    // title.textContent=number;
    if(bekleme){
        title.textContent =number;
        bekleme=false;
    }
    else{
        const displayvalue=title.textContent;
        title.textContent=displayvalue==='0'? number : displayvalue+number;
    }

}
function adddecimal(){
    if(!title.textContent.includes('.'))//icermiyorsa ekle
    {
        title.textContent=`${title.textContent}.`;
    }
}
function useoperator(operator){
  const simdiki= Number(title.textContent);

  if(operatorvalue && bekleme){
    operatorvalue=operator;
    return;
  }
  if(!baslangic){
    baslangic=simdiki;
  }
  else{
    const sonuc=calc[operatorvalue](baslangic,simdiki)
    title.textContent=sonuc;
    baslangic=sonuc;

  }
  bekleme=true;
  operatorvalue=operator;
}

const calc={
    '/':(firsnumber,secondnumber)=>firsnumber/secondnumber,
    '*':(firsnumber,secondnumber)=>firsnumber*secondnumber,
    '+':(firsnumber,secondnumber)=>firsnumber+secondnumber,
    '-':(firsnumber,secondnumber)=>firsnumber-secondnumber,
    '=':(firsnumber,secondnumber)=>secondnumber,
}

buttons.forEach((button)=>{
    if(button.classList.length===0){
        button.addEventListener('click',()=>sendnumbervalue(button.value));
    }
    else if(button.classList.contains('operator')){
        button.addEventListener('click',()=>useoperator(button.value));

    }
    else if(button.classList.contains('decimal')){
        button.addEventListener('click',()=>adddecimal());

    }
});
function resetall(){
    title.textContent='0';
    baslangic=0;
    operatorvalue='';
    bekleme=false;
}
resetbutton.addEventListener('click',resetall)