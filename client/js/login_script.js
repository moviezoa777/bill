
/* let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:4434/users.json");
xhr.send(); 

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let members = JSON.parse(xhr.responseText);
    }
  };


let btn = document.querySelector("#check_id");
btn.addEventListener("click", function(){
   
   for(const i=0; i<members.length; i++){
            
      if(members[i] == user_id){
        alert("로그인 되었습니다.");
        break;
      } else if(i != members.length){
        continue;
      } else {
        alert("아이디가 틀립니다.");
      }

   }  
          
});

*/


window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#user_id").focus();
  const loginForm = document.querySelector("#loginForm");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const sendData = {
      id: document.querySelector("#user_id").value.trim(),
      pw: document.querySelector("#user_pw").value.trim(),
      ip: "192.168.0.200",
    };
    const xhr = new XMLHttpRequest();
    const method = "POST"; // 받을때 GET, 보낼때 POST , 수정 PUT, PATCH, 삭제 DELETE
    const url = "http://localhost:4434/users";
    xhr.open(method, url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let received = JSON.parse(xhr.response);
        if (received.status === 200) {
          alert(`${received.nick}님, 로그인 되었습니다.`);
        } else {
          alert('아이디 또는 비밀번호를 확인하세요');
        }
      }
    };
    xhr.setRequestHeader("content-type", "application/json"); //json 타입 데이터라고 알려준다
    xhr.send(JSON.stringify(sendData)); //post 일때 전송할 데이터
  });
});