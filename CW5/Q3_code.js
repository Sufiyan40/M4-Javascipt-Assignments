let teamReward = {
    Jyoti: 287,
    Ashish: 283,
    Rahman: 285,
    Afzal: 267,
};

let sum = 0;

for (let score in teamReward) {
    if (teamReward.hasOwnProperty(score)) {
        sum += teamReward[score];
    }
}

console.log("Team_reward total score 'out of 1200' : " + sum + "!");