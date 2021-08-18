function updatecase(isif){
    const inputcase=document.getElementById("case-input");
    let inputeText=inputcase.value;
    
    inputcase.value=inputeText;
    if(isif==true){
        inputeText=parseInt(inputeText) + 1;
    }
    else if(isif==false && inputeText > 0){
        inputeText=parseInt(inputeText) - 1;
    }
    inputcase.value=inputeText;
    const caseinputnumber=document.getElementById('totall-case');
    const finalcase= caseinputnumber.innerText=inputeText * 59;
    return finalcase;
   
   

}
function updatephone(pif){
    let phoneInput=document.getElementById('phone-input');
    let phoneText=phoneInput.value;
    phoneInput.value=phoneText;
    if(pif==true ){
        phoneText=parseInt(phoneText)+1;
    }
    else if(pif==false&& phoneText > 0 ){
        phoneText=parseInt(phoneText)-1
    }
    phoneInput.value=phoneText;
    const balance=document.getElementById('phone-totall');
    const finalphone= balance.innerText=phoneText * 1219;
    return finalphone
   
}
function calculate(){
    const phoneInput=document.getElementById('phone-input');
    let phoneText=parseInt(phoneInput.value) ;
    const inputcase=document.getElementById("case-input");
    let inputeText=parseInt(inputcase.value);
    const phonetotall=phoneText * 1219;
    const casetotall=inputeText * 59;
    const totall=phonetotall + casetotall;
    // const tax=document.getElementById('tax');
    // const totallam=document.getElementById('totall');
    const taxamound=totall /10;
    const sum=totall+taxamound
 
    
    
    document.getElementById('sub-total').innerText=totall;
    document.getElementById('tax').innerText=taxamound;
    document.getElementById('totall').innerText=sum;
    
    
    
}
// phone use        handler
document.getElementById('phone-plue').addEventListener('click',function(){
updatephone(true)
calculate()


})
document.getElementById('phone-minus').addEventListener('click',function(){
    updatephone(false)
    calculate()
})


// case use handler
document.getElementById("case-plus").addEventListener('click',function(){
    updatecase(true)
    calculate()
})

document.getElementById('case-minus').addEventListener('click',function(){ updatecase(false)
    calculate()

})
// update subtotall tax and totall



