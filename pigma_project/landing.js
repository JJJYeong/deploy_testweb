$().ready(function() {
    console.log("loaded");
    $('.userInfo').hide();

    $('.login').click(function() {
        $('.buttons').hide();
        $('.userInfo').show();
    });

    $('.logout').click(function() {
        $('.buttons').show();
        $('.userInfo').hide();
    });
});