$().ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        const email = $('input[name="email"]').val();
        const password = $('input[name="password"]').val();
        const storedEmail = sessionStorage.getItem('email');
        const storedPassword = sessionStorage.getItem('password');

        // 세션값과 비교 후 로그인
        if(email === storedEmail && password === storedPassword) {
            sessionStorage.setItem('login', 'y');

            alert('로그인되었습니다!');
            location.href = 'landing.html';
        } else {
            alert('일치하는 회원 정보가 없습니다.');
        }
    });
});