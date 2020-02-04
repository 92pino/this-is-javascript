const realArr = ['a', 'b', 'c'];
const arrLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    lenght: 3
};

// map 함수 사용하여 key값 value값 뽑아내기
const resultArr = Object.keys(arrLike).map((key) => {
    console.log([String(key), arrLike[key]]);
});

// entries 메서드를 사용하여 변환
let result_entries = Object.entries(arrLike);
console.log(result_entries);

for (let [key, value] of result_entries) {
    console.log(`key : value === ${key} : ${value}`)
}