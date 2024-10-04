document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    const joinoutButton = document.getElementById('joinoutButton');

    // 로그아웃 버튼 클릭 시
    logoutButton.addEventListener('click', (event) => {
        alert('로그아웃되었습니다.');
        // 로그인 페이지로 리디렉션
        window.location.href = 'login.html';
    })

    // 회원탈퇴 버튼 클릭 시 sessionStorage 정보 삭제
    joinoutButton.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 링크 동작 방지

        // sessionStorage의 모든 정보 삭제
        sessionStorage.clear();

        alert('탈퇴가 완료되었습니다! 메인 페이지로 이동합니다.');
        // 메인 페이지로 리디렉션
        window.location.href = 'main.html';
    });

    // 내 정보 표시 (세션에 저장된 데이터 사용)
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const nickname = sessionStorage.getItem('nickname');

    if (username && email && nickname) {
        document.getElementById('username').textContent = username;
        document.getElementById('email').textContent = email;
        document.getElementById('nickname').textContent = nickname;
    } else {
        alert('로그인 정보가 없습니다. 로그인 페이지로 이동합니다.');
        window.location.href = 'login.html';
    }
});
