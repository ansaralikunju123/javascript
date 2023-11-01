var read=require('readline-sync')
var num=read.question('Enter A NumberS')
var i,prime=0;
if(num<=1)
{
    console.log("The Number is Not Prime")

}
else{
    for(i=2;i<num;i++)
    {
        if(num%i==0){
        prime=1;
        break;
        }
    }
    if(prime==0)
    {
        console.log("The Number is Prime")
    }
    else{
        console.log("The Number is  Prime")
    }
