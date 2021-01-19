'use strict';

// hex color의 16진수를 담은 array. randomHexColor를 생성하려고 만든거.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  let hexColor = '#'; // 16진법 hexcode가 항상 #으로 시작하니까 이걸 할당하고 시작하는거지.
  // hexcode는 6개의 16진수로 되어있으니까 for문을 6번 반복하는거. 죄다 알고리즘이네.
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; // += : 기존 값에 해당 값을 더해서 넣음. = : overwrite(해당 값을 덮어씀.) 
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  // <span>의 text와 body의 color 모두 랜덤으로 생성된 hexColor 값을 할당해서 변화를 주려고 함.
})

// 위에 hexColor += hex[0]; 에서 []안에 들어갈 random index값을 얻기 위한 함수.
function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
  // app.js랑 마찬가지로 hex의 index를 랜덤하게 생성하려면 hex.length( = 16)만큼을 곱해야 0 ~ 15.999... 사이의 값이 나옴.
  // 그래야 Math.floor로 integer값을 구할 수 있음.
}