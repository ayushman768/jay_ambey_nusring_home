function MyTab(evt, Active_tab) {
    var i, tablinks, tabcontent;
    tabcontent = document.getElementsByClassName('tab_content');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(Active_tab).style.display = "block";
    evt.currentTarget.className += " active";


}

var y = document.getElementById('my_header');

var sticky = y.offsetTop;

var nav = function mynav() {

    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');


    } else {
        y.classList.remove('sticky');

    }

};

function menu() {
    var btn = document.querySelector('.Navigation_Jay_Ambey_Nurshing_Home');
    if (btn.style.display === "block") {
        btn.style.display = "none";
    } else {
        btn.style.display = "block";
    }
}