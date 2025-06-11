function showCitation() {
    var today = new Date();
    var month = today.getMonth() + 1; // Months are zero-indexed
    var day = today.getDate();
    var year = today.getFullYear();
    
    var fullDate = month + "-" + day + "-" + year;

    var citation = "''FancyBacterias Website.'' Github.io, 2025, fancybacteriayt.github.io/FancyBacteria-s-Offical-Website/. Accessed" + fullDate + ".";
    
    document.getElementById("citation-area").textContent = citation;
}