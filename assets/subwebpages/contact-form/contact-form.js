// ============================== Burger Menu =======================================

document.getElementById("menuBtn").addEventListener("click", () => {
    document.getElementById("menuBtnIcon-1").classList.toggle("hidden");
    document.getElementById("menuBtnIcon-2").classList.toggle("hidden");

    if (document.getElementById("toggleMenu").classList.contains("h-0")) {
        document.getElementById("toggleMenu").classList.toggle("h-screen");
    }
    
});