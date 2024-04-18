/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    var word = s; 
    //console.log("word:", word)
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    var vowelsArray = [];
    var indecesArray = [];
    var flippedWord = [];

    var map = new Map();

    for(var i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            indecesArray.push(i);
            vowelsArray.splice(0,0,s[i]);
        }
    }

    indecesArray.forEach((item, index) =>{
        map.set(item, vowelsArray[index]);
    })

    for(var i = 0; i < word.length; i++){
         indecesArray.includes(i) ? flippedWord.push(map.get(i)) : flippedWord.push(word[i])
    }


    flippedWord = flippedWord.join('');


    return flippedWord;
    
};

var testCases = ["hello", "leetcode", "volunteer", "euphoria", "ambiguity"];
var answers = [];
testCases.forEach(word=>{
    answers.push(reverseVowels(word));
})

console.log("\n\n 345. Reverse Vowels of a String\n")
console.log("Given a string s, reverse only all the vowels in the string and return it. \nThe vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.\n")
console.log("---------------------------------------------------")
console.log("EXPECTED RESULTS : ");
console.log("['holle', 'leotcede','velentuor', 'aiphorue', 'imbugiaty']");
console.log("ACTUAL RESULTS: ");
console.log(answers);
console.log("---------------------------------------------------")

/* NOTE: This is my first successful solution to the problem. Currently looking at optimizing. Ideally will
involve a two pointer solution.*/