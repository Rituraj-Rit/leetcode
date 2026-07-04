/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0; 
    for(let i = 0; i < sentences.length; i++){
        let words = 1;
        let sentence = sentences[i];
        for(let j = 0; j < sentence.length; j++){
            if(sentence[j] === ' '){
                words++;
            }
        }
        max = Math.max(max, words);
    }
    return max
};