const file = [
    "./src/scripts/header.js",
    "./src/scripts/main.js",
    "./src/scripts/footer.js"
]

// console.log(file);
// fetch scripts inside body tag
file.forEach(item =>{
    const script = document.createElement('script')
    script.src = item;
    document.body.appendChild(script)
})