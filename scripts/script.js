const input = document.querySelector("input");
const button = document.querySelector("button");



button.addEventListener('click', () => {
    let str = input.value;



// const str =
//   "src=//player.vimeo.com/video/818323603?title=0&byline=0&portrait=0&badge=0&color=ffffff&h=6d3c4e1b35";
const fir = /\/(\d+)\?/;
const sec = /&h=([^"]*)/;
const matchesFir = str.match(fir);
const matchesSec = str.match(sec);

const link = `https://vimeo.com/${matchesFir[1]}/${matchesSec[1]}`;

if (link.includes('"') || link.includes(";")) {
  link = link.replace(/"/g, "");
}

window.open(link, "_blank");
})