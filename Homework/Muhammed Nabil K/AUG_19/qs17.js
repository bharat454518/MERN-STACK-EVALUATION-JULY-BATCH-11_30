function descending(arr){
    let flag=0
    for(i=0;i<arr.length-1;i++)
    {
      if(arr[i]<arr[i+1])
      {
        flag=1
      }
    }
    if(flag==0)
    {
      console.log("array is in descending order")
    }
    else{
      console.log("array not in descending order")
      
    }
  }
  var arr1=[6,5,4,3,2,1]
  descending(arr1)