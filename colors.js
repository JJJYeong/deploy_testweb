function nightDayHandler(self) {
    var target = document.querySelector('body');
    var alist = document.querySelectorAll('a');

    if(self.value === 'night') {
        target.style.color = 'white';
        target.style.backgroundColor = 'black';
        self.value = 'day';
        var i = 0;
        while ( i < alist.length) {
            if(alist[i].className !== 'active') {
                alist[i].style.color = 'powderblue';
                console.log(alist[i]);
            }
            i = i + 1 ;
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        var i = 0;
        while ( i < alist.length) {
            if(alist[i].className !== 'active') {
                alist[i].style.color = 'blue';
                console.log(alist[i]);
            }
            i = i + 1 ;
        }
    }
}