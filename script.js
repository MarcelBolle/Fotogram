const dialogRef = document.getElementById("pictureDialog");
const dialogPicture = document.getElementById("dialogPicture");
const thumbnails = document.querySelectorAll(".thumbnail");

let currentIndex = 0;

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    e.preventDefault();                             // Verhindert normales Link-Verhalten

    const bigPicture = thumb.getAttribute("href"); 
    dialogPicture.src = bigPicture;                 // Bild im Dialog setzen

    dialogRef.showModal();                          // Dialog öffnen
  });
});


const closeBtn = document.getElementById("closePictureDialogButton");
closeBtn.addEventListener("click", () => {
  dialogRef.close();
});

function showImageAt(index) {
  const thumb = thumbnails[index];
  const bigPicture = thumb.getAttribute("href");
  dialogPicture.src = bigPicture;
  dialogRef.showModal();
  currentIndex = index;
}

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", (e) => {
    e.preventDefault();
    showImageAt(index);
  });
});

const prevBtn = document.querySelector(".picture-back-nav");
const nextBtn = document.querySelector(".picture-next-nav");

nextBtn.addEventListener("click", () => {
  // TODO: currentIndex erhöhen und showImageAt() aufrufen
});

prevBtn.addEventListener("click", () => {
  // TODO: currentIndex verringern und showImageAt() aufrufen
});
