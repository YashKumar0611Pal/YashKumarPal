const images = [
    "car1.jpg",
    "car2.jpg",
    "car3.jpg",
    "car4.jpg",
    "car5.jpg"
];

let current = 0;

const mainImage = document.getElementById("mainImage");

// Show image when thumbnail is clicked
function showImage(image) {

    mainImage.src = image.src;

    // Get only the file name
    const fileName = image.src.split("/").pop();

    current = images.indexOf(fileName);

}

// Next button
function nextImage() {

    current++;

    if(current >= images.length){
        current = 0;
    }

    mainImage.src = images[current];

}

// Previous button
function previousImage(){

    current--;

    if(current < 0){
        current = images.length - 1;
    }

    mainImage.src = images[current];

}

// Automatic slideshow
setInterval(nextImage,3000);