const thumbnails = document.querySelectorAll(".thumbnail");
const pictureDialog = document.getElementById("pictureDialog");
const dialogPicture = document.getElementById("dialogPicture");

let currentIndex = 0;

function openPictureDialog(index) {
  currentIndex = index;

  const thumb = thumbnails[index];
  const bigSrc = thumb.dataset.big || thumb.src;

  dialogPicture.src = "";
  dialogPicture.alt = "";

  dialogPicture.src = bigSrc;
  dialogPicture.alt = thumb.alt;

  pictureDialog.showModal();
}

function closePictureDialog() {
  document.getElementById("pictureDialog").close();
}

function updateDialogPicture() {
  const thumb = thumbnails[currentIndex];
  const bigSrc = thumb.dataset.big || thumb.src;

  dialogPicture.src = bigSrc;
  dialogPicture.alt = thumb.alt;
}

function showPrevPicture() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  updateDialogPicture();
}

function showNextPicture() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  updateDialogPicture();
}

function handleKeys(event) {
  if (event.key === "ArrowRight") {
    showNextPicture();
  }

  if (event.key === "ArrowLeft") {
    showPrevPicture();
  }
}
