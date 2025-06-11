function crashbrowser() {
  const result = window.confirm("Are you sure you want to crash the browser? (May god have mercy on your soul)");
    if (result) {
        window.alert("I warned you, here we go!");
        while (true) {
        console.error("Welcome to hell, your browser is now crashing!");
        }
    } else {
        window.alert("Scared a$$... good choice!");
    }

}