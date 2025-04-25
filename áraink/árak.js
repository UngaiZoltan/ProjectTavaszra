let otherVersion = document.getElementById("other-version")
let bigScreenTable = document.getElementById("big-screen-table")

function changeTable() {
    if (bigScreenTable.classList.contains("show")) {
        otherVersion.classList.add("show");
        otherVersion.classList.remove("hidden");

        bigScreenTable.classList.add("hidden");
        bigScreenTable.classList.remove("show");
    } else {
        otherVersion.classList.add("hidden");
        otherVersion.classList.remove("show");

        bigScreenTable.classList.add("show");
        bigScreenTable.classList.remove("hidden");
    }
}