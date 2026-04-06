function CalculateResult(){
    let n=document.getElementById("subject").value;
    let i;
    let total=0;
    for(i=0; i<n; i++){
        let x=parseFloat(prompt("enter subject no. " + (i+1)));
        total+=x;
    }
    let avg=total/n;
    let grade;
    if(avg>90){
        grade= "A"}
    else if(avg>=80){
        grade= "B";}
    else if(avg>=70){
        grade= "C";}
    else if(avg>=60){
        grade= "D";}
    else{
        grade= "F";
    }
    let r=document.getElementById("result").innerHTML="Total Marks= "+total+"</br>"+"Average Marks= "+ avg+"</br>"+"Grade= "+grade;
    console.log(r)
}