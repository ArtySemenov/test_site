var randomColours = ['#324D5C', '#46B29D', '#F0CA4D', '#E37B40', '#F53855', '#FFBC67', '#DA727E', '#AC6C82', '#685C79', '#455C7B', '#E88B2F', '#C74728', '#E85F2F']

var randomGradient = ['linear-gradient(10deg, #f95700, #f95e05 18%, #fa7111 44%, #fa9126 75%, #fbb03b)', 'linear-gradient(10deg, #11998e, #14a08d 18%, #1db389 45%, #2bd383 76%, #38ef7d)', 'linear-gradient(10deg, #c0392b, #bd3a32 14%, #b63b45 34%, #aa3e65 58%, #994291 85%, #8e44ad)', 'linear-gradient(10deg, #191654, #1b1d57 11%, #1f3061 28%, #275071 47%, #317c87 69%, #3fb4a3 93%, #43c6ac)']






function randomBackground(e, ar = randomColours) {
    var t = ar[Math.floor(Math.random() * ar.length)];
    console.log(t);
    e.style['background'] = ar[Math.floor(Math.random() * ar.length)];
}

function normalBackground(e) {
    e.style['background'] = '#2b3133';
}

function sendMail() {
    console.log('awdawd');
}


// Get the modal
var modal = document.getElementById('myModal');

var images = document.getElementsByClassName('myImg');

// Get the image and insert it inside the modal - use its "alt" text as a caption
for (var i = 0; i < images.length; i++) {

    images[i].addEventListener('click', function () {
        var img = images[i];
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "block";
        modalImg.src = this.src;
        modalImg.alt = this.alt;
        captionText.innerHTML = this.alt;


    });


}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


modal.onclick = function () {
    modal.style.display = "none";
}
