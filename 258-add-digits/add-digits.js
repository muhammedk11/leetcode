/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num)

 {
    let arr=num.toString().split("");
  let sum=0;

   do{ 
     sum=0;
    for(let i=0;i<arr.length;i++){
          sum=sum+Number(arr[i])
    }
    arr=sum.toString().split("")

   }while(sum>9);
   return sum

    
};