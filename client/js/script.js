
// ====================carousel ======================

const swiper = document.querySelector('.carousel_wrapper');
const prevButtons = document.querySelectorAll('.carousel_prev');
const nextButtons = document.querySelectorAll('.carousel_next');
const bullets = document.querySelectorAll('.carousel_circle');

let currentSlide = 0;

function showSlide(slideIndex) {
    swiper.style.transform = `translateX(-${slideIndex * 1000}px)`;
    currentSlide = slideIndex;

    bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

prevButtons.forEach((prevButton) => {
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    });
});

nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', () => {
        if (currentSlide < 3) {
            showSlide(currentSlide + 1);
        }
    });
});

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        showSlide(index);
    });
});

showSlide(0);


// ====================아이디&비번 ======================

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#user_id").focus();
    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const sendData = {
        id: document.querySelector("#user_id").value.trim(),
        pw: document.querySelector("#user_pw").value.trim(),
        //ip: "127.0.0.1",
        ip: "192.168.0.200",
      };

      const xhr = new XMLHttpRequest();
      const method = "GET"; // 받을때 GET, 보낼때 POST , 수정 PUT, PATCH, 삭제 DELETE
      const url = "http://localhost:4434/users";
      xhr.open(method, url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          let received = JSON.parse(xhr.responseText);
          if (received.id === user_id && received.pw === user_pw) {
            alert(`${received.id}님, 로그인 되었습니다.`);
          } else {
            alert('아이디 또는 비밀번호를 확인하세요');
          }
        }
      };
      xhr.setRequestHeader("content-type", "application/json"); //json 타입 데이터라고 알려준다
      xhr.send(JSON.stringify(sendData)); //post 일때 전송할 데이터
    });
  });

  
















