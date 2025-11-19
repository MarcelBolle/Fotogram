
const FADE_DURATION_MS = 200;
const THUMBNAILS = document.querySelectorAll(".thumbnail");
const DIALOG_PICTURE = document.getElementById("dialogPicture");
const DIALOG_REF = document.getElementById("pictureDialog");

let currentIndex = 0;

/* Opens the picture dialog with the image at the given index.*/

function openPictureDialog(index) {
  currentIndex = index;
  const pictureSource = THUMBNAILS[index].dataset.big;
  showPictureInDialog(pictureSource);
}

 /* Shows the given picture source inside the dialog with a fade animation.
  @param {string} pictureSource - Source of the image to show.*/
 
function showPictureInDialog(pictureSource) {
  if (!DIALOG_REF || !DIALOG_PICTURE) {
    return;
  }

  if (!DIALOG_REF.open) {
    DIALOG_REF.showModal();
  }

  DIALOG_PICTURE.classList.remove("fade-in");
  DIALOG_PICTURE.classList.add("fade-out");

  window.setTimeout(() => {
    DIALOG_PICTURE.src = pictureSource;
    DIALOG_PICTURE.classList.remove("fade-out");
    DIALOG_PICTURE.classList.add("fade-in");
  }, FADE_DURATION_MS);
}

      /* Closes the picture dialog*/

function closePictureDialog() {
  if (!DIALOG_REF) {
    return;
  }

  DIALOG_REF.close();
}

      /* Shows the next picture in the thumbnail list.*/

function showNextPicture() {
  const lastIndex = THUMBNAILS.length - 1;

  if (currentIndex >= lastIndex) {
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }

  openPictureDialog(currentIndex);
}

      /* Shows the previous picture in the thumbnail list.*/

function showPrevPicture() {
  const lastIndex = THUMBNAILS.length - 1;

  if (currentIndex <= 0) {
    currentIndex = lastIndex;
  } else {
    currentIndex -= 1;
  }

  openPictureDialog(currentIndex);
}

      /*Use ArrowKeys and Esc without(!) EventListener */

function handleKeys(event) {
  if (event.key === "Escape") {
    closePictureDialog();
  }

  if (event.key === "ArrowRight") {
    showNextPicture();
  }

  if (event.key === "ArrowLeft") {
    showPrevPicture();
  }
}
