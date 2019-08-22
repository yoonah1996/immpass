/*
"transformAsHTML" 함수를 작성합니다.

사원들의 정보를 HTML 엘리먼트의 형태로 변형할 수 있는 함수 "transformAsHTML" 함수를 작성하세요.
사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];

위의 배열이 input으로 주어진다면, SpecRunner의 transformAsHTML 결과 창이 다음과 같은 HTML로 렌더링되어야 합니다.
SpecRunner.html 파일을 열어보면, transformAsHTML 결과 창을 어떻게 접근해야 하는지 알 수 있습니다.

<ul id="container">
  <li>
    <a class="name">Joe Blow</a>
    <div class="age">42</div>
  </li>
  <li>
    <a class="name">Mary Jenkins</a>
    <div class="age">36</div>
  </li>
</ul>

* Note:
<a> 태그로 만들어진 사원의 이름을 클릭할 경우, 제공되는 printRole 함수를 실행하여,
해당 사원의 role이 콘솔에 출력되도록 하십시오.

*/

function printRole(user) {
  // Joe Blow를 클릭하면 clerk 이
  // Mary Jenkins를 클릭하면 manager 가 찍힙니다.
  // 이 함수는 수정하지 마십시오.
  console.log(user.role);
}

function transformAsHTML(array) {
  // your code here
}