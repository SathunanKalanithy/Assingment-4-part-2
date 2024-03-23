const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Beautiful landscape',
  'pic3.jpg': 'Colorful flowers',
  'pic4.jpg': 'Mummy',
  'pic5.jpg': 'Butterfly'
};

const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('button');

/* Loop through the images */
imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/' + filename); // Assuming images are in 'images' directory
    newImage.setAttribute('alt', altTexts[filename]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
    });
});

/* Add a click event listener to the <button> */
btn.addEventListener('click', function() {
    const currentClass = btn.getAttribute('class');

    if (currentClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Darken effect
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Remove darken effect
    }
});
