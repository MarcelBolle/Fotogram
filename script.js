const dialogRef = document.getElementById("pictureDialog");
const dialogPicture = document.getElementById("dialogPicture");

function openPictureDialog(params) {
    dialogRef.showModal();
}

function closePictureDialog() {
    dialogRef.close();
}





// const thumbs = document.querySelectorAll(".thumbnail");

// thumbs.forEach((thumb) => {
//     thumb.addEventListener("click" , (e) => {
//         e.preventDefault();

//         const fullImg =thumb.getAttribute("href")
//         console.log(fullImg);
//     })
// })