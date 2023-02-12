function showMobileMenu({ trigger, menu }) {
    trigger = document.querySelector(trigger);
    menu = document.querySelector(menu);
    trigger.addEventListener("click", () => {
        menu.classList.toggle("show");
        let body = document.getElementsByTagName("body")[0];
        body.classList.toggle("lock");
    });
}

showMobileMenu({ trigger: ".header__burger", menu: ".header__mobile" });
