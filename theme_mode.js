console.log("dark/light mode")
document.getElementById("checkbox").addEventListener("change", () =>{
    if(document.body.className.indexOf("dark") === -1) {
        document.body.classList.add("dark")
    } else {
        document.body.classList.remove("dark")
    }
})
