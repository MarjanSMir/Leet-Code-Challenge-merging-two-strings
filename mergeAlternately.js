/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
let word1 = "ls"
let word2 = "father"
//ffaamtihleyr

var mergeAlternately = function (word1, word2) {
    const counter = Math.max(word1.length, word2.length)
    let arrword = []
    let arrword1 = []
    let arrword2 = []
    for (var i = 0; i < counter; i++) {
        let letter1 = word1.charAt(i)
        arrword1.push(letter1)
        let letter2 = word2.charAt(i)
        arrword2.push(letter2)
        if (i % 2 == 0) {
            arrword.push(arrword1[i])
            arrword.push(arrword2[i])
        } else {
            arrword.push(arrword1[i])
            arrword.push(arrword2[i])
        }
    }



    return arrword.join('').toString()
};

console.log(mergeAlternately(word1, word2))
