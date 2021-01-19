'use strict';

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  // get random number between 0 - 3 colors[index] 
  // colors의 index값이 0 - 3 이니까
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber]; // <span>의 텍스트도 colors에 저장된 string들로 바꾸려는거.
})

// randomNumber를 얻을 수 있게 해주는 함수를 만든 거.
function getRandomNumber(){
  // Math.random() 함수는 0 이상 1 미만의 구간에서 근사적으로 
  // 균일한(approximately uniform) 부동소숫점 의사난수를 반환하며, 
  // 이 값은 사용자가 원하는 범위로 변형할 수 있다. 
  // 난수 = 정의된 범위 내에서 무작위로 추출된 수. 
  
  // 그래서 Math.random()은 보통 0~0.9999...까지의 수를 return하기 때문에
  // 랜덤하게 integer를 반환받으려면
  // Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9 요런 식으로 쓰인다.
  return Math.floor(Math.random() * colors.length);
  // 0 - 3만 받으려면, 0 ~ 3.9999... 이 숫자만 일단 return받아야하고, 그러려면 4(즉, color.length)만큼을 곱해줘야 함.
  // Math.floor() 함수는 주어진 수 이하의 가장 큰 정수를 return해줌.
}