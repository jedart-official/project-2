class AnimationMachine {
    constructor({
        triggerEl,
        editEl,
        startTransform = "",
        endTransform = "",
        startOpacity = "",
        endOpacity = "",
        transition = "all 0.5s ease",
        useScrollHandler = true,
        useDOMHandler = false,
    } = {}) {
        this.triggerEl = document.querySelector(triggerEl);
        this.editEl = document.querySelector(editEl);
        this.startTransform = startTransform;
        this.endTransform = endTransform;
        this.startOpacity = startOpacity;
        this.endOpacity = endOpacity;
        this.transition = transition;
        this.useScrollHandler = useScrollHandler;
        this.useDOMHandler = useDOMHandler;
    }

    start() {
        if (!this.triggerEl) {
            console.error("Trigger element not found");
            return;
        }

        if (!this.editEl) {
            console.error("Edit element not found");
            return;
        }

        this.editEl.style.transition = this.transition;
        if (this.useScrollHandler) {
            this.addScrollHandler();
        }
        if (this.useDOMHandler) {
            this.addDOMHandler();
        }
    }

    addScrollHandler() {
        document.addEventListener("scroll", () => {
            let isVisible = this.elementInViewport();
            this.startAnimation({ isVisible: isVisible });
        });
    }

    addDOMHandler() {
        document.addEventListener(
            "DOMContentLoaded",
            this.startAnimation({ isVisible: true })
        );
    }

    elementInViewport() {
        var bounds = this.triggerEl.getBoundingClientRect();
        return (
            bounds.top + bounds.height > 0 &&
            window.innerHeight - bounds.top > 0 &&
            bounds.left + bounds.width > 0 &&
            window.innerWidth - bounds.left > 0
        );
    }

    startAnimation({ isVisible }) {
        if (isVisible) {
            this.editEl.style.transform = `translateX(${this.endTransform})`;
            this.editEl.style.opacity = this.endOpacity;
        } else {
            this.editEl.style.transform = `translateX(${this.startTransofrm})`;
            this.editEl.style.opacity = this.startOpacity;
        }
    }
}
