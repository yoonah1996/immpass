/*
"transformEmployeeData" 함수를 작성합니다.

사원들의 정보를 다른 형태로 변형 할 수 있는 함수 "transformEmployeeData" 함수를 작성하세요.
사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

[
  [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
  [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
];

위의 배열이 input으로 주어진다면, 다음과 같은 output을 리턴해야 합니다.

[
  { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
  { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
];

입력값에는 예시와 다른 키값들이 있을 수도 있고 사원수가 다를 수도 있습니다.

* Constraint: 반드시 Array의 map 메소드와 reduce 메소드를 사용해서 문제를 해결해야 합니다.

*/
 // 1.array의 첫번째 열을 가져와서 map하면 그배열인 ['firstName', 'Joe']식으로 나온다 reduce로 객체를 만들어 준다

// function transformEmployeeData(array) {
//   let newobj = {};
//   let newarr = [];

//   for(let i=0; i<array.length; i++){
//     array[i].map(x=> x.reduce((a,b)=> newobj[a] = b));
//     newarr.push(newobj);
//     newobj = {};
//   }
//   return newarr;
// }







function transformEmployeeData(array) {
  let newobj = {};
  let newarr = [];

  var a = array.map(x=> (newobj = {}) && (x.reduce(function(pre, value){
    console.log(value);
    newobj[value[0]] = value[1];
    console.log(newobj);
    return newobj;


  }, {})));
  console.log(a);
  return a;
}
  // var value = [ 'firstName', 'Mary' ];
  // var value = [ 'firstName', 'Mary' ];
  // //TODO: firstName, 'Mary'
  // val = value[0] 
  // (x => newobj[x[0]] = x[1]);

  // var arr2 = array.reduce(function (pre, value) {
  //   value.map(x => newobj[x[0]] = x[1]);
  //   newarr.push(newobj);
  //   newobj = {};
  //   pre = newarr;
  // //   return pre;
  // // }, []);
  // // newarr = arr2;
  // array.map(x=> x.reduce(function(pre, value){
    
  //   value.map(x => newobj[x[0]] = x[1]);

  //   return newobj;


  
  
// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = transformEmployeeData;
}
