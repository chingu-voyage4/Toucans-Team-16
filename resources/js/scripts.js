var images = [], x=-1;
images[0] = "resources/images/arrival.jpg";
images[1] = "resources/images/cyborg2.jpg";
images[2] = "resources/images/home.jpg";

/*eslint-env browser*/
function displayNextImage(){
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}
/*eslint-env browser*/
function makeTheTime(){
    setInterval(displayNextImage,3000);
}