const dialogRef = document.getElementById("pictureDialog");
const dialogPicture = document.getElementById("dialogPicture");
const thumbnails = document.querySelectorAll(".thumbnail");

// Klick auf Thumbnail -> Bild im Dialog setzen + Dialog öffnen
thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    e.preventDefault(); // Verhindert normales Link-Verhalten

    const bigPicture = thumb.getAttribute("href"); // Pfad aus href
    dialogPicture.src = bigPicture;                // Bild im Dialog setzen

    dialogRef.showModal();                         // Dialog öffnen
  });
});

// Schließen-Button im Dialog
const closeBtn = document.getElementById("closePictureDialogButton");
closeBtn.addEventListener("click", () => {
  dialogRef.close();
});
