//dynamic image gallery
function gallery(e) {
    var img_preview = document.getElementById('img-preview')
        ;
    img_preview.src = e.firstElementChild.src;
}
