function showMobileMenu({
    trigger,
    menu,
    bodyClass = "lock",
    menuClass = "show",
} = {}) {
    const triggerEl = document.querySelector(trigger);
    const menuEl = document.querySelector(menu);

    if (!triggerEl || !menuEl) {
        console.error("Error: trigger or menu element not found");
        return;
    }

    function toggleMenu() {
        menuEl.classList.toggle(menuClass);
        document.body.classList.toggle(bodyClass);
    }

    triggerEl.addEventListener("click", toggleMenu);
}

showMobileMenu({ trigger: ".header__burger", menu: ".header__mobile" });
