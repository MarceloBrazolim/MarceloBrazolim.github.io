function navRetract() {
    document.getElementById("mainPage").classList.remove("mainPage-pad");
    document.getElementById("nav-button-retract").classList.add("hidden");
    document.getElementById("nav-button-expand").classList.remove("hidden");
    document.getElementById("nav-button1-retract").classList.add("hidden");
    document.getElementById("nav-button1-expand").classList.remove("hidden");
    document.getElementById("nav").classList.toggle("nav-retract");
    document.getElementById("mainPage").classList.toggle("mainPage-retract");
    document.getElementById("nav-background-ext").classList.toggle("hidden");
    document.getElementById("photo").classList.add("photo-retract");
    document.getElementById("photo").classList.remove("photo");
    document.getElementById("btnTxt1").classList.add("hidden");
    document.getElementById("btnTxt2").classList.add("hidden");
    document.getElementById("btnTxt3").classList.add("hidden");
    document.getElementById("btnTxt4").classList.add("hidden");
    document.getElementById("btnTxt5").classList.add("hidden");
    document.getElementById("nav-btn-1").classList.add("nav-i-icon-retract");
    document.getElementById("nav-btn-2").classList.add("nav-i-icon-retract");
    document.getElementById("nav-btn-3").classList.add("nav-i-icon-retract");
    document.getElementById("nav-btn-4").classList.add("nav-i-icon-retract");
    document.getElementById("nav-btn-5").classList.add("nav-i-icon-retract");
    document.getElementById("footer").classList.add("footer-retract")
}