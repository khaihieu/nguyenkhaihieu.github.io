const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
const tabss = $$(".tab-items");
const tabActive = $(".tab-item.active");
const tabActives = $(".tab-items.active");
const line = $(".tabs .line");
const lines = $(".tabss .lines");
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";
lines.style.left = tabActives.offsetLeft + "px";
lines.style.width = tabActives.offsetWidth + "px";
tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});
tabss.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        // $(".tab-items.active").classList.remove("active");
        // $(".tab-pane.active").classList.remove("active");

        lines.style.left = this.offsetLeft + "px";
        lines.style.width = this.offsetWidth + "px";

        // this.classList.add("active");
        // pane.classList.add("active");
    };
});