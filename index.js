
//var resultField = $("#txt");
var btnSwitch=0;
function ONN(){
    btnSwitch=2;
    $("#txt").val(0);
    var audio=new Audio("audio/on.mp3");
    audio.play();
}
function OFF(){
    btnSwitch=0;
    $("#txt").val('');
    var audio=new Audio("audio/off.mp3");
    audio.play();
}
function btnVal(num){
    if(btnSwitch==1){
    var previousVal=$("#txt").val();
    $("#txt").val(previousVal + num);
    }
    else if(btnSwitch==2){
        $("#txt").val(num); 
        btnSwitch=1;
    }
}
function arithMatic(arith){
   var prev=$("#txt").val();
   if(btnSwitch==1){
   $("#txt").val(prev+arith);
   }
}

function calculate(){
    if(btnSwitch==1){
    try{
    var result=eval($("#txt").val());
    }
    catch(err){
        alert(err);
    }
    finally{
    $("#txt").val(result);
    }
    var audio=new Audio("audio/sexy.mp3");
    audio.play();
   }

}
function txtClear(){
    if(btnSwitch==1){
    $("#txt").val('');
    }
}
function txtDelete(){
    if(btnSwitch==1){
    var val=$("#txt").val();
    if(val != ''){
        var del=$("#txt").val().slice(0,-1);
        $("#txt").val(del);
    }
   }
}