/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

function isEmpty(array){
    if(array.length > 0) return false;
    return true;
}
var asteroidCollision = function(asteroids) {
    let ans = []
    let arraySize = 0;
    asteroids.forEach(rock=>{
        if(isEmpty(ans)){
            console.log("array empty. rock pushed");
            ans.push(rock);
 
        }
        else if(rock > 0){
            console.log(rock, "positive, rock pushed");
            ans.push(rock);
       
        }
        else{
            console.log(rock, " negative. looping");
            if(ans[ans.length-1] < 0){
                ans.push(rock);
            }
            else{
                while(ans[ans.length-1] > 0){
                    console.log("enter while loop");
                    if(ans[ans.length-1] + rock == 0){
                        ans.pop();
                        break;
                    }
                    else if(ans[ans.length-1] + rock < 0){
                        ans.pop();
                        if((ans[ans.length-1] < 0)){
                            ans.push(rock);
                            break;
                        }
                        if(isEmpty(ans)){
                            ans.push(rock);
                            break;
                        }
                    }
                    else{
                        console.log("Rock [", rock, "] smaller than [", ans[ans.length-1], "]. Rock destroyed on impact");
                        break;
                    }
                }
            }
            
            
        }
    })

    return ans;
};

let test = [1,-2,-2,-2];
console.log(asteroidCollision(test));