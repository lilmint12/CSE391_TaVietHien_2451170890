const images = [

"https://placehold.co/800x400?text=Image+1",
"https://placehold.co/800x400?text=Image+2",
"https://placehold.co/800x400?text=Image+3",
"https://placehold.co/800x400?text=Image+4",
"https://placehold.co/800x400?text=Image+5"

];

let currentIndex = 0;

let slideshow = null;
const commands = [

"Next Image",
"Previous Image",
"Start Slideshow",
"Stop Slideshow",
"Open Modal"

];
const galleryImage =
document.querySelector("#galleryImage");

const indicator =
document.querySelector("#indicator");

const modal =
document.querySelector("#imageModal");

const modalImage =
document.querySelector("#modalImage");

const palette =
document.querySelector("#paletteOverlay");

const commandInput =
document.querySelector("#commandInput");

const commandList =
document.querySelector("#commandList");
function renderImage(){

galleryImage.src =
images[currentIndex];

indicator.textContent =
`${currentIndex+1}/${images.length}`;

modalImage.src =
images[currentIndex];

}
function nextImage(){

currentIndex++;

if(currentIndex >= images.length){

currentIndex = 0;

}

renderImage();
}

function previousImage(){

currentIndex--;

if(currentIndex < 0){

currentIndex =
images.length - 1;

}

renderImage();
}
function startSlide(){

if(slideshow) return;

slideshow =
setInterval(
nextImage,
2000
);

}

function stopSlide(){

clearInterval(slideshow);

slideshow = null;
}
galleryImage.addEventListener(
"click",
()=>{
modal.classList.remove("hidden");
}
);
function openPalette(){

palette.classList.remove("hidden");

commandInput.value = "";

renderCommands(commands);

commandInput.focus();

}

function closePalette(){

palette.classList.add("hidden");

}
function renderCommands(list){

commandList.innerHTML = "";

list.forEach(command=>{

const li =
document.createElement("li");

li.textContent = command;

li.tabIndex = 0;

li.addEventListener(
"click",
()=>executeCommand(command)
);

commandList.appendChild(li);

});

}
function executeCommand(command){

switch(command){

case "Next Image":
nextImage();
break;

case "Previous Image":
previousImage();
break;

case "Start Slideshow":
startSlide();
break;

case "Stop Slideshow":
stopSlide();
break;

case "Open Modal":
modal.classList.remove(
"hidden"
);
break;

}

closePalette();

}
commandInput.addEventListener(
"input",
e=>{

const keyword =
e.target.value
.toLowerCase();

const filtered =
commands.filter(
cmd =>
cmd
.toLowerCase()
.includes(keyword)
);

renderCommands(filtered);

}
);
document.addEventListener(
"keydown",
e=>{

if(
e.ctrlKey &&
e.key.toLowerCase()==="k"
){

e.preventDefault();

openPalette();

return;
}

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="ArrowLeft"){

previousImage();

}

if(e.key===" "){

e.preventDefault();

if(slideshow){

stopSlide();

}else{

startSlide();

}

}

if(e.key==="Escape"){

closePalette();

modal.classList.add(
"hidden"
);

}

const num =
parseInt(e.key);

if(
!isNaN(num) &&
num>=1 &&
num<=images.length
){

currentIndex = num - 1;

renderImage();

}

if(
e.key==="Enter" &&
document.activeElement.tagName==="LI"
){

document.activeElement.click();

}

}
);
document
.querySelector("#prevBtn")
.addEventListener(
"click",
previousImage
);

document
.querySelector("#nextBtn")
.addEventListener(
"click",
nextImage
);

document
.querySelector("#openPalette")
.addEventListener(
"click",
openPalette
);
modal.addEventListener(
"click",
e=>{

if(e.target === modal){

modal.classList.add(
"hidden"
);

}

}
);
renderImage();