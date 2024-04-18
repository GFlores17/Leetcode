/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let curWord = [];
    let wordsArray= [];

    for(let i = 0; i <= s.length; i++){
        console.log(s[i]);
        if(s[i] == " " || i == s.length){
            wordsArray.push(curWord);
            curWord = [];
        }
        else{
            curWord.push(s[i]);
        }
    }

    //console.log(wordsArray);
    console.log("words as char:", wordsArray);

    var stringifiedWordsArray = [];

    wordsArray.forEach(word=>{
        var joinedWord = word.join('');
        stringifiedWordsArray.push(joinedWord);
    })

    console.log(stringifiedWordsArray);
    stringifiedWordsArray = stringifiedWordsArray.reverse();
    console.log("strigifiedArray:", stringifiedWordsArray);

  
    stringifiedWordsArray = stringifiedWordsArray.join(' ');
    console.log("joined array:", stringifiedWordsArray)
    return stringifiedWordsArray;
};