document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // 로그인 폼 제출 시 sessionStorage의 정보와 비교
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // 페이지 새로고침 방지

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // sessionStorage에서 저장된 값 가져오기
        const storedEmail = sessionStorage.getItem('email');
        const storedPassword = sessionStorage.getItem('password');

        // 이메일과 비밀번호 비교
        if (email === storedEmail && password === storedPassword) {
            alert('로그인되었습니다.');
            // 내 정보 페이지로 리디렉션
            window.location.href = 'detail.html';
        } else {
            alert('일치하는 회원 정보가 없습니다.');
        }
    });
});
