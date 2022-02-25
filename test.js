function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (x % 2 === 0) {
      answer.push(x);
    }
  }
  return answer;
}
