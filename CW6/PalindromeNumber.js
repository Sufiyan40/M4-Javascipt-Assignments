function isPalindrome(p){
    let str = p.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome(3876)); 
console.log(isPalindrome(5005));    
console.log(isPalindrome("sissis"));    
console.log(isPalindrome("simsis"));    
      