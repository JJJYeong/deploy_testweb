document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.getElementById('joinForm');

    // 폼 제출 시 sessionStorage에 정보 저장
    joinForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 페이지 새로고침 방지

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const nickname = document.getElementById('nickname').value;

        // sessionStorage에 정보 저장
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('nickname', nickname);

        alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');

        // 로그인 페이지로 리디렉션
        window.location.href = 'login.html';
    });
});
