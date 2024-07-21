let Arr = [1, 4, 9, 5, 7];
 
function arrayRotate(arr) {
    arr.unshift(arr.pop());
    return arr;
}
 
function rotation() {
    let rotateArr = arrayRotate(Arr);
    console.log("Elements of array = ["+ rotateArr + "]");
}
 
rotation();