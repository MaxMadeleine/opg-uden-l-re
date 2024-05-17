const galleryArray=['cat1.webp','cat2.jpg','cat3.webp','cat4.jpg','cat5.jpg','cat6.webp','cat7.jpg','cat8.jpeg','cat9.jpg','cat10.webp']

function createTiles(){
    const myAppElement = document.getElementById('carGallery');

    const bigSection = document.createElement('section');
    bigSection.id = "bigSection";
    Gallery.appendChild(bigSection);

    const tilesSection = document.createElement('section');
    tilesSection.id = "tilesSection";
    Gallery.appendChild(tilesSection);

    const bigImage = document.createElement('img');
    bigImage.src ='assets/img/cat1.webp'
    bigImage.id = "bigimg";
    bigSection.appendChild(bigImage);

    galleryArray.forEach(
        (imgName, index) => {
            if (index > 0) {
                console.log(index)
                const tilesImages= document.createElement('img')
                tilesImages.src = 'assets/img/' + imgName
                tilesImages.classList.add('tilesImages')
                tilesSection.appendChild(tilesImages);
 
                tilesImages.addEventListener('click', () => {
                    changeImage(tilesImages);
                });
            }
        }
    );
 
    function changeImage(clickedImage) {
        const bigimg = document.getElementById('bigimg');
        const bigimgUrl = bigimg.src;
 
        bigimg.src = clickedImage.src;
        clickedImage.src = bigimgUrl;
    }
}


createTiles();

document.addEventListener('DOMContentLoaded', function() {
    const cookiePolicy = document.getElementById('cookie-policy');
    const acceptButton = document.getElementById('accept-cookies');
    const form = document.getElementById('cookie-form');

    // Animate cookie policy in on page load
    setTimeout(() => {
        cookiePolicy.classList.add('show');
    }, 500); // Delay to ensure load event completes

    // Event listener for button to animate cookie policy out
    acceptButton.addEventListener('click', () => {
        cookiePolicy.classList.remove('show');

        // Collect and log the settings
        const formData = new FormData(form);
        const selectedCookies = [];
        formData.forEach((value, key) => {
            selectedCookies.push(value);
        });
        console.log('Cookie preferences:', selectedCookies);
    });
});