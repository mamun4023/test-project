
exports.numberOfWords = async (str :  string)=> { 
    const words = str.match(/\S+/g); 
    if(words.length!==0){ 
        return words.length; 
    } 
    else{ 
        return 0; 
    } 
} 

exports.numberOfCharacters = async (str : string)=> { 

    if(str.length!==0){ 
        return str.replace(/[^a-z]/gi, "").length
    } 
    else{ 
        return 0; 
    } 
} 


exports.longestWord = async(str : string) => {
    let arr = str.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < arr.length; i++) {
        if (longest < arr[i].length) {
            longest = arr[i].length;
            longest_word = arr[i];
        }
    }
    return longest_word;
};