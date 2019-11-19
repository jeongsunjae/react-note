// 리액트 챌린지 2일차
// 1. Array.map

const days = ["Mon", "Tue", "Wed"];

// 함수를 실행하는 요소에 대하여 수행되며 '새로운' 배열을 반환
// ``(백틱) 문자를 사용하면
const whatMap = days.map(day => `${day} !!`);
// 각 요일에 !!를 더한 값을 가진 배열을 반환하게된다.

// map 함수는 index 요소 또한 반환 할 수 있다 index 는 키값으로 사용 가능
const whatMap2 = days.map((day, index) => `${index} ${day} !!`);

// 2. Array.filter

// filter는 function 조건을 만족하는 새로운 배열을 반환한다

const numbers = [2, 45, 6346, 65, 23, 56, 7];

// filter안의 조건이 15보다 큰 이상의 숫자임으로 그에 만족하는 숫자만 반환된다.
const bigger = numbers.filter(number => number > 15);

// 3. forEach, includes, push

// forEach는 새로운 배열을 반환하지 않는다. 각 요소 하나 씩을 반환
let posts = ["Hi", "Hello", "Bye"];

posts.forEach(post => console.log(post));

// (map, filter)와 forEach 차이점 forEach는 새로운 배열 반환 안함!

//push는 배열에 요소를 추가
posts.push("new");

if (posts.includes("Hi")) {
  // includes는 해당 배열에 요소가 있는지 검사한다.
}

// 2일차 과제

// addZeros: Add zeros to all the numbers. Return an array of numbers.
// 다음과 같이 Map 함수를 사용하여 기존 객체에 10을 곱한 새로운 배열을 반환
addZeros = numbers => numbers.map(number => number * 10);
//moreThanFifty: Remove the numbers that are not more than 50. Return an array of numbers.
// filter를 사용하여 50보다 큰 숫자 들만 새로운 배열로 반환
moreThanFifty = addZeros => addZeros.filter(addZero => addZero > 50);
// removeFirst: Remove the first element of the array. Return an array of numbers.
// 구조 분해 할당을 통해 첫번째 요소를 제거한 나머지 배열 반환
removeFirst = moreThanFifty => {
  //구조분해할당
  const [first, ...rest] = moreThanFifty;

  return rest;
};
// sumAll: Sum all the elements of the array. Return ONE number.
// reducer 함수를 통해 요소들을 모두 더한 뒤 반환
const reducer = (accumulator, currentValue) => accumulator + currentValue;
return noFirst.reduce(reducer);
// divide: Take a number and divide it into an array.
// split를 사용하여 각 자리 나눔
divide = sumAll => {
  const div = String(sumAll);

  return div.split("");
};

// 구조 분해 할당을 통해 요소 각각 반환하는 방법도 있다.
divide = param5 => [...(param5 + "")];
