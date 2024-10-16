$().ready(function() {
    console.log("document loaded.");

    if(sessionStorage.getItem('login') === 'y') {
        $('#username').text(sessionStorage.getItem('username'));
        $('.buttons').hide();
        $('.userInfo').show();
    } else {
        $('.buttons').show();
        $('.userInfo').hide();
    }

    $('.login').click(function() {
        location.href = 'login.html';
    });
    $('.signup').click(function() {
        location.href = 'signup.html';
    });

    // 로그아웃
    $('.logout').click(function() {
        if(confirm('로그아웃하시겠습니까?')) {
            sessionStorage.removeItem('login');

            alert('로그아웃되었습니다!');
            location.href = 'landing.html';
        }
    });

    // carousel
    let idx = 0;
    function slide() {
        const offset = -idx * 100;
        $('.carousel-container').css('transform', `translateX(${offset}%)`);
    }

    $('.prev').click(function() {
        idx = (idx === 0) ? $('.carousel-item').length - 1 : idx - 1;
        slide();
    });
    $('.next').click(function() {
        idx = (idx === $('.carousel-item').length - 1) ? 0 : idx + 1;
        slide();
    });

    // card
    const cardData = [
        { title: "HTML/CSS", text: "HTML is the standard markup language for creating web pages and web applications. CSS is a style sheet language used for describing the presentation of a document written in a markup language such as HTML." },
        { title: "JavaScript", text: "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." },
        { title: "Java/Spring", text: "Java is the most popular programming language. The Spring Framework is an application framework and inversion of control container for the Java platform." },
        { title: "Database", text: "Database is an organized collection of data or a type of data store based on the use of a database management system (DBMS), the software that interacts with end users, applications, and the database itself to capture and analyze the data." },
    ];

    cardData.forEach(data => {
        const truncatedText = data.text.length > 250 ? data.text.substring(0, 250) + '...' : data.text;
        const card = `
            <div class="card">
                <a href="detail.html">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${truncatedText}</p>
                </a>
            </div>
        `;
        $('#cardContainer').append(card);
    });

    // mode change
    $('.changeColor').click(function() {
        if(this.value === 'light') {
            $('*').not('.prev, .next, footer, .login-container *').css('color', '#F2DBFF');
            $('body').css('background-color', 'rebeccapurple');
            $('header').css('background-color', 'indigo');
            $('.changeColor').css('background-color', '#FAF2FF');
            $('.changeColor, .login, .signup, .logout').css('color', 'black');
            $('.changeColor').text('Light');
            this.value = 'dark';
        } else {
            $('*').not('.prev, .next, footer, .login-container *').css('color', 'black');
            $('body').css('background-color', '#FAF2FF');
            $('header').css('background-color', '#F2DBFF');
            $('.changeColor').css('background-color', 'rebeccapurple');
            $('.changeColor').css('color', '#ffffff');
            $('.changeColor').text('Dark');
            this.value = 'light';
        }
    });
});