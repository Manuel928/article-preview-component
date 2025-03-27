const sharebtn = document.getElementById("btn")
const sharePopUp = document.getElementById("share-popup");


sharebtn.addEventListener("mouseover", () => {
    sharePopUp.style.display = (sharePopUp.style.display === "none") ? "flex" : "none";
});
window.addEventListener("click", () => {
    sharePopUp.style.display = "none";

})