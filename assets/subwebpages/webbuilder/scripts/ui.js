document.querySelectorAll(".dropdownToggler").forEach((btn) => {
    btn.addEventListener("click", () => {
        const getAttribute = btn.getAttribute("data-section");
        document.querySelectorAll(".dropdownMenu").forEach(dropdownMenu => {
            if (dropdownMenu.id === getAttribute) {
                dropdownMenu.classList.toggle("scale-0");
            }
        });
    });
});


document.querySelectorAll(".toggleBtnTwo").forEach((btn) => {
    console.log(btn);
    btn.addEventListener("click", () => {

        const getAttribute = btn.getAttribute("data-section");
        

        document.querySelectorAll(".dropdownMenuTwo").forEach(section => {
            if(section.id === getAttribute) {
                section.classList.toggle("h-0");
            } 
        });
    });
});