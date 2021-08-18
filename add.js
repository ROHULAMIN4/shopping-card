function forcase(ifadd){
    const input=document.getElementById('case-input');
    let inputvalue=input.value;
    
    input.value=inputvalue;
    if(ifadd==true){
        inputvalue=parseInt(inputvalue)  + 1;
    }
    else if(ifadd==false && inputvalue>0){
        inputvalue=parseInt(inputvalue)  - 1;
    }
    input.value=inputvalue;
    const change=document.getElementById('totall-case');

    const changeupdate=change.innerText=inputvalue*59;
    return changeupdate;
  
}

function forphone(ifadd){
    const input=document.getElementById('phone-input');
    let inputvalue=input.value;
    
    input.value=inputvalue;
    if(ifadd==true){
        inputvalue=parseInt(inputvalue)  + 1;
    }
    else if(ifadd==false && inputvalue>0){
        inputvalue=parseInt(inputvalue)  - 1;
    }
    input.value=inputvalue;
    const change=document.getElementById('phone-totall');

    const changeupdate=change.innerText=inputvalue*1219;
    return changeupdate;
}
function updateprice(){
    const inputc=document.getElementById('phone-input');
    let caseinput=inputc.value;
    const inputp=document.getElementById('case-input');
    let phoneinput=inputp.value;
    const casetotall=caseinput * 59;
    const phonetotall=phoneinput * 1219;
    console.log(phonetotall);
     const totall=casetotall + phonetotall;
     const tax=totall/10;
     const fullfinal=tax+ totall;
    document.getElementById('sub-total').innerText=totall;
    document.getElementById('tax').innerText=tax;
    document.getElementById('totall').innerText=fullfinal;
    return totall;
}
document.getElementById('case-plus').addEventListener('click',function(){
    forcase(true);
    updateprice()
})
document.getElementById('case-minus').addEventListener('click',function(){
    forcase(false)
    updateprice()
})
document.getElementById('phone-plue').addEventListener('click',function(){
    forphone(true)
    updateprice()

})
document.getElementById('phone-minus').addEventListener('click',function(){
    forphone(false)
    updateprice()

})