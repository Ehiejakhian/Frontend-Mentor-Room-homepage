
({
  plugins: ['jsdom-quokka-plugin'],
  jsdom: {
    file: 'index.html' // Replace with your specific HTML filename or path
  }
})

const services = [
  {
    img: [
      "./assets/images/desktop-image-hero-1.jpg",
      "./assets/images/mobile-image-hero-1.jpg"
    ],
    heading: "Discover innovative ways to decorate",
    content: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    img: [
      "./assets/images/desktop-image-hero-2.jpg",
      "./assets/images/mobile-image-hero-2.jpg"
    ],
    heading: "We are available all across the globe",
    content: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    img: [
      "./assets/images/desktop-image-hero-3.jpg",
      "./assets/images/mobile-image-hero-3.jpg"
    ],
    heading: "Manufactured with the best materials",
    content: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
];


let currentSlide = 1;
// Event delegation
let hero_section = document.querySelector('.hero');
hero_section.addEventListener('click', (e) => {
  if (e.target.closest('.left')) {
    console.log('left clicked');
    (currentSlide <= 1) ? currentSlide = 1 : currentSlide--;
    domTime(currentSlide);
  } else if (e.target.closest('.right')) {
    console.log('right clicked');
    (currentSlide >= 3) ? currentSlide = 3 : currentSlide++;
    domTime(currentSlide);
  }
});

function domTime(currentSlide) {
  let hero_section = document.querySelector('.hero');
  
  services.forEach((service, i) => {
    if ((i + 1) == currentSlide) {
      hero_section.innerHTML = `
        <div class="hero__img">
        ${service.img.map((src, j) => `<img src="${src}" alt="hero image" class="${j === 0 ? 'desktop' : 'mobile'}"/>`).join('')}
        </div>
        <div class="hero__btns">
          <button class="left"><img src="./assets/images/icon-angle-left.svg" alt="angle-left"></button>
          <button class="right"><img src="./assets/images/icon-angle-right.svg" alt="angle-right"></button>
        </div>
        <div class="hero__content">
          <h1>${service.heading}</h1>
          <p>${service.content}</p>
          <button class="btn"><span>Shop now</span><img src="./assets/images/icon-arrow.svg" alt=""></button>
        </div>
      `;
    }
  })
}

domTime(currentSlide);
// setInterval(()=>console.log(currentSlide), 1000)

let df = ['cat', 'dog'];
