const arr=[[2, 5, 9, 6], 5]
let str=arr.join().split(',')
let newArr=[]

for(let i=0;i<str.length;i++){
    
    for(let j=i+1;j<str.length;j++){
            if(str[i]===str[j]){
                str.splice(j,1)
                str.splice(i,1)
        }
     
    }
}
 


console.log(str);