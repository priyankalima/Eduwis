// creating element inside header
header.append(
    Object.assign(
        document.createElement('nav'),
        {
            id: "navbar",
            className: "navbar",
            innerHTML: `
            <div class="container">
                <div class="logo">
                    <img id="logoImg" class="logo-img" alt="logo image">
                    <div id="toggleBtn" class="toggle-btn"></div>
                </div>
                <div class="menu">
                    <div class="cto-btn">
                        <button>Book Free Demo</button>
                        <button>Parent Login</button>
                    </div>
                    <div class="menu-list" id="menuList"></div>
                </div>
            </div>
            `,
            // can be use eventlistener
            function: addEventListener('load', () => {
                fetch('./content.json').then((res) => res.json()).then((data) => {
                    const item = data.header;
                    // add logo image
                    logoImg.src = item.logo;
                    // add menu lists
                    item.menu.forEach(data => {
                        menuList.innerHTML += `<a href="">${data}</a>`
                    })
                })
                // create toggle button and show only the max width is 600px
                const media = window.matchMedia("(max-width: 600px)");
                function myFunction(media) {
                    if (media.matches) { // If media query matches
                        toggleBtn.innerHTML = `
                           <div></div>
                           <div></div>
                           <div></div>
                        `
                    }
                }
                myFunction(media);
                media.addEventListener('change', () => {
                    myFunction(media);
                })
                // hide and show the menu when the max width 600px

            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            id: "banner",
            className: "banner",
            innerHTML: `
            <div class="container">
                <div class="slider" id="slider">
                    <div class="banner-title" id="bannerTitle">title</div>
                    <div class="banner-img" id="bannerImg">image</div>
                </div>
            </div>
            `,
            function: addEventListener('load', () => {

            })
        }
    )
)