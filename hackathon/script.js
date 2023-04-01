function showGallery(imgSrc) {
  document.getElementById("gallery-img").src = imgSrc;
  document.getElementById("gallery-overlay").style.display = "block";
}

function hideGallery() {
  document.getElementById("gallery-overlay").style.display = "none";
}

function addPhoto() {
  document.getElementById("file-button").click();
}

document.getElementById("add-photo-button").addEventListener("click", addPhoto);

document.getElementById("file-button").addEventListener("change", function() {
  var file = document.getElementById("file-button").files[0];
  var reader = new FileReader();

  reader.onloadend = function() {
    var newImg = document.createElement("img");
    newImg.src = reader.result;
    newImg.onclick = function() { showGallery(reader.result); };
    document.getElementById("gallery").appendChild(newImg);
  }

  if (file) {
    reader.readAsDataURL(file);
  }
});
