function sendEmail() {
    var name = document.getElementById('name');
    var numberPeople = document.getElementById('number-people');
    var date = document.getElementById('date');
    var message = document.getElementById('message');

    window.open(`mailto:ngepotn@gmail.com?subject=${name.value}&body=${message.value} number of people:${numberPeople.value}`);
    name.value = '';
    numberPeople.value = '';
    message.value = '';
    date.value = '';
}

function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" pizza-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " pizza-red";
}
document.getElementById("myLink").click();
var slideIndex = 1;

function plusDivs(n) {
    slideIndex = slideIndex + n;
    showDivs(slideIndex);
}