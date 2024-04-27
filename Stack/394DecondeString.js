/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  
    s = s.split('');
    let curString = [];
    let multiplier = [];
    let decoded = [];
    let bracketsOpen = false;

    console.log(s);
    s.forEach(letter=>{
        console.log(letter);

        if(letter == ']'){
            console.log("Bracket closed!!");
            multiplier = multiplier.join('');
            multiplier = parseInt(multiplier);
            console.log("multi:", multiplier);
            console.log("curString:", curString)

            if(multiplier == NaN){
                multiplier = 1;
            }
            for(let i = 0; i < multiplier; i++){
                for(let j = 0; j < curString.length; j++){
                    decoded.push(curString[j]);
                }
            }
            multiplier = [];
        }
        else if(letter == '['){
            console.log("BRACKETS OPEN");
            bracketsOpen = true;
        }

        else if(bracketsOpen){
            console.log("brackets open! pushing.")
            curString.push(letter);
        }
        else if(!bracketsOpen){
            console.log("brackets closed! pushing multi");
            multiplier.push(letter);
        }
       
    })

    return decoded;
};

let test = '3[a]2[bc]';
console.log(decodeString(test));
