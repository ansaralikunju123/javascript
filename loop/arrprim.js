var array=[16,33,45,13,55,66,9,24,12,8,1]
console.log(array[0])
if(array[0]<=1)
{
    console.log(array[0] + " is Not Prime")

}
else{
    for(i=2;i<array[0];i++)
    {
        if(array[0]%i==0){
        prime=1;
        break;
        }
    }
    if(prime==0)
    {
        console.log(array[0] + " is Prime")
    }
    else{
        console.log(array[0] + "is NOt  Prime")
    }
}