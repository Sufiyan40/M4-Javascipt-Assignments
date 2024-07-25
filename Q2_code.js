function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    else {
        return false;
    }
}

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));