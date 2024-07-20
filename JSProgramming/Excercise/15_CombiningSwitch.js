
function switchTest(letter) {
switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':     
    case 'U':
        return "Given Letter is Vowel : "+letter;
        
    default:
        return "Given Letter is Consonant : "+letter;
        
}
}
console.log(switchTest('a'));
console.log(switchTest('Z'));

