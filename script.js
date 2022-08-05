var images, arrayImage;


images = ['https://drive.google.com/uc?export=view&id=13y3rcRFizD1q96q4fvvCl8OvqlWsk1l6', 'https://drive.google.com/uc?export=view&id=1Sqr0gB-Vef81BGjIdUruAQ-opte0e8ZH', 'https://drive.google.com/uc?export=view&id=1SgBM5pjGBC9ceedQCmriJpKVq6L9ZHJE'];
let element_showing_image = document.getElementById('showing-image');
arrayImage = images.shift();
element_showing_image.setAttribute("src", arrayImage);
images.push(arrayImage);


document.getElementById('next-btn').addEventListener('click', (event) => {
  let element_showing_image2 = document.getElementById('showing-image');
  arrayImage = images.shift();
  element_showing_image2.setAttribute("src", arrayImage);
  images.push(arrayImage);

});

document.getElementById('previous-btn').addEventListener('click', (event) => {
  let element_showing_image3 = document.getElementById('showing-image');
  arrayImage = images.shift();
  element_showing_image3.setAttribute("src", arrayImage);
  images.push(arrayImage);

});
/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);