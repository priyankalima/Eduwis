const file = [
    "./src/scripts/header.js",
    "./src/scripts/main.js",
    "./src/scripts/footer.js"
]

// console.log(file);
// fetch scripts inside body tag
file.forEach(item =>{
    // console.log(item)
    document.body.appendChild(
        Object.assign(
            document.createElement('script'),
            {
                src:item
            }
        )
    )
})