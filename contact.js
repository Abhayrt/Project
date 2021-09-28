
let nameNode=document.getElementById("fname");
let spanNode1=document.getElementById("error1");
function validate1(){
    spanNode1.innerHTML="";
    let name=nameNode.value;

    if (name==''){
        spanNode1.innerHTML="This field is required";
        nameNode.style.border="3px solid red";
    }

    else{
        nameNode.style.border="3px solid green";
    }
}



let spanNode2=document.getElementById("error2");
let ageNode=document.getElementById("age");
function validate2()
{
    spanNode2.innerHTML="";
    let   ageData=ageNode.value;
    
    if(ageData=='')
    {
       spanNode2.innerHTML="this field is required";
       ageNode.style.border="3px solid red";
    }
    else if(ageData<1)
    {
        spanNode2.innerHTML="invalid enter positive number";
        ageNode.style.border="3px solid red"; 
    }
    
    else{
              ageNode.style.border="3px solid green";
    }
}



let genderNode=document.getElementById("gender");
let spanNode3=document.getElementById("error3");
function validate3(){
    spanNode3.innerHTML="";
    let gen=genderNode.value;

    if (gen==''){
        spanNode3.innerHTML="This field is required";
        genderNode.style.border="3px solid red";
    }

    else{
        genderNode.style.border="3px solid green";
    }
}



let spanNode4=document.getElementById("error4");
let MobNode=document.getElementById("mobileno");
function validate4()
{
    spanNode4.innerHTML="";
    let   MobData=MobNode.value;
    
    if(MobData=='')
    {
       spanNode4.innerHTML="this field is required";
       MobNode.style.border="3px solid red";
    }
    else if(MobData.length<10 || MobData.length>10)
    {
        spanNode4.innerHTML="invalid enter 10 digit number";
        MobNode.style.border="3px solid red"; 
    }
    
    else{
              MobNode.style.border="3px solid green";
    }
}




