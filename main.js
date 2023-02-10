//課題 問１
let scores = [10,15,20,25];
console.log(scores);
for (let i = 0; i < scores.length;i++ ) {
    if(scores[i]%2 ===0){
        console.log(`${scores[i]}は偶数です`);}
}

//課題 問２
let car = { gass:20.5 , num:1234 };
console.log(car);
console.log(`ガソリンは${car.gass}です`);
console.log(`ナンバーは${car.num}です`);

//練習
let scores1 = [50,60,70,80,90,'百'];
for (let i = 0; i < scores1.length; i++) {
    console.log(`得点は${scores1[i]}点です`)
}

let human = {
    name:'yamada',
    height:170,
    weight:60,
    gender:"男",
    age:30
};

console.log(human.name);
console.log(human.height);
console.log(`年齢は${human.age}歳です`);
