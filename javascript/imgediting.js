let saturate =document.getElementById("saturate"),
contrast =document.getElementById("contrast"),
brightness =document.getElementById("brightness"),
sepia =document.getElementById("sepia"),
grayscale =document.getElementById("grayscale"),
blur =document.getElementById("blur"),
huerotate =document.getElementById("hue-rotate"),
upload =document.getElementById("upload"),
download =document.getElementById("download"),
img =document.getElementById("img"),
reset = document.querySelector("span"),
imgbox = document.querySelector(".img-box");
const canvas =document.getElementById("canvas"),
ctx = canvas.getContext("2d");//draw picture in two dimentions in canvas-1-

function resetValue(){
    ctx.filter="none";
    saturate.value="100";
    contrast.value="100";
    brightness.value="100";
    sepia.value="0";
    grayscale.value="0";
    blur.value="0";
    huerotate.value="0";
        ctx.drawImage(img,0,0,canvas.width, canvas.height);

}

window.onload = function(){
    download.style.display="none";
    reset.style.display="none";
    imgbox.style.display="none";
}
upload.onchange = function(){//hide all buttons
    resetValue();
    download.style.display="block";
    reset.style.display="block";
    imgbox.style.display="block";
    //upload the image file from your device 
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);//input upload in files location
    file.onload =function(){// locate photo file after it loaded in img tag src 
        img.src = file.result;
    }
    img.onload = function(){//draw picture in canvas
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,canvas.width, canvas.height);
        img.style.display="none";
    }
}
//filters operations on img
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter)=>{
    filter.addEventListener("input", function(){
        ctx.filter=
        `saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)`;

        ctx.drawImage(img,0,0,canvas.width, canvas.height);
    })
})

//download photo with no filters
// download.onclick = function(){
//     download.href = img.src;

// }

//download photo with filter
download.onclick = function(){
        download.href = canvas.toDataURL();//we can write nothing inside this function and the photo will be downloaded as png not jpeg
}

