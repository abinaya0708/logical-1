//Which one is largest number-----

let a=12;
let b=8;
let c=20;

if((a>b)&&(a>c)){
    document.write("a is greater")
}

 else if((b>a)&&(b>c)){
    document.write("b is greater")
}

else if((c>a)&&(c>b)){
    document.write("c is greater")
}

else{
    console.log("Enter different values")
}

//-------------------------------------------------------------------------------------------------

//find sum and average of an array

let arr=[1,2,8,11];
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}

document.write(sum);


let average=sum/arr.length;

document.write(average);