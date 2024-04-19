var sidenav=document.querySelector(".side-navbar")
var shopnow=document.getElementById(".header-button")
function shownavbar(){
sidenav.style.left="0"
}
function closenavbar(){
    sidenav.style.left="-60%"
    }
function shopButton() {
        // Redirect to the dress collection page
        window.location.href = "collection.html";
    }
function subscribe(){
    window.alert("successfully subcribed!!")
}
    