var btn1 = document.querySelector('#q1')
var container1 = document.querySelector('.q1-c')

btn1.addEventListener('click', function() {

    if(container1.style.display === 'block') {
        container1.style.display = 'none'
        btn1.textContent = "+"
    }

    else {
        container1.style.display = 'block'
        btn1.textContent = "-"
    }
});

var btn2 = document.querySelector('#q2')
var container2 = document.querySelector('.q2-c')

btn2.addEventListener('click', function() {

    if(container2.style.display === 'block') {
        container2.style.display = 'none'
        btn2.textContent = "+"
    }

    else {
        container2.style.display = 'block'
        btn2.textContent = "-"
    }
});

var btn3 = document.querySelector('#q3')
var container3 = document.querySelector('.q3-c')

btn3.addEventListener('click', function() {

    if(container3.style.display === 'block') {
        container3.style.display = 'none'
        btn3.textContent = "+"
    }

    else {
        container3.style.display = 'block'
        btn3.textContent = "-"
    }
});

var btn4 = document.querySelector('#q4')
var container4 = document.querySelector('.q4-c')

btn4.addEventListener('click', function() {

    if(container4.style.display === 'block') {
        container4.style.display = 'none'
        btn4.textContent = "+"
    }

    else {
        container4.style.display = 'block'
        btn4.textContent = "-"
    }
});
