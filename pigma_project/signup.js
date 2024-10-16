$().ready(function() {
    $('#signupForm').submit(function(e) {
        e.preventDefault();

        const username = $('input[name="name"]').val();
        const email = $('input[name="email"]').val();
        const password = $('input[name="password"]').val();
        
        // 회원가입
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
        location.href = 'login.html';
    });
});