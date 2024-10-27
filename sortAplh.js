let string = "welcome to my github page"
//convert string to arr
let stringArr = string.split(" ")

//function always return the lowest alp e.g [returns 1 for word1 and 2 for word2]

function checkStr(word1, word2, i){
  if(word1[i].toLowerCase().charCodeAt() > word2[i].toLowerCase().charCodeAt()){
    return 2
  }else if(word1[i].toLowerCase().charCodeAt() < word2[i].toLowerCase().charCodeAt()){
    return 1
  }else{
    if(word1.length-1 <= i){
      return 1
    }else if(word2.length-1 <= i){
      return 2
    }else{
     return checkStr(word1,word2,i + 1)
    }
  }
}

function mergeArr(arr1, arr2){
  let stack = []
  let i = 0
  let j = 0
  while(i < arr1.length && j< arr2.length){
    //checks if arr2[j] is the smallest 
    //if you choose to sort in descending order just change 2 to  1
    if(checkStr(arr1[i], arr2[j], 0) == 2){
      stack.push(arr2[j])
      j++
    }else{
      stack.push(arr1[i])
      i++
    }
  }
  //concatenate remaining element in either arr1 or arr2
  return stack.concat(arr1.slice(i), arr2.slice(j))
}



function mergeSort(arr){
 
  if(arr.length <= 1){
    return arr
  }
  
  let mid = Math.floor(arr.length / 2)
  
  let leftArr = mergeSort(arr.slice(0, mid))
  let rightArr = mergeSort(arr.slice(mid))
  return mergeArr(leftArr, rightArr)

}

console.log(mergeSort(stringArr))