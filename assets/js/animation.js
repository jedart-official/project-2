class AnimationMachine {
    constructor({
        triggerEl,
        editEl,
        startTransofrm = "",
        endTransform = "",
        startOpacity = "",
        endOpacity = "",
        transition = "all 0.5s ease",
        type = "scroll",
    } = {}) {
        this.triggerEl = document.querySelector(triggerEl);
        this.editEl = document.querySelector(editEl);
        this.startTransofrm = startTransofrm;
        this.endTransform = endTransform;
        this.startOpacity = startOpacity;
        this.endOpacity = endOpacity;
        this.transition = transition;
        this.type = type;
    }

    start() {
        this.editEl.style.transition = this.transition;
        switch (this.type) {
            case "scroll":
                document.addEventListener("scroll", () => {
                    let isVisible = this.elementInViewport();
                    this.startAnimation({ isVisible: isVisible });
                });
                break;
            case "DOM":
                document.addEventListener(
                    "DOMContentLoaded",
                    this.startAnimation({ isVisible: true })
                );
                break;
            case "both":
                document.addEventListener(
                    "DOMContentLoaded",
                    this.startAnimation({ isVisible: true })
                );
                document.addEventListener("scroll", () => {
                    let isVisible = this.elementInViewport();
                    this.startAnimation({ isVisible: isVisible });
                });
                break;
            default:
                document.addEventListener("scroll", () => {
                    let isVisible = this.elementInViewport();
                    this.startAnimation({ isVisible: isVisible });
                });
                break;
        }
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
