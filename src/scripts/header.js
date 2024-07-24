// creating element inside header
header.append(
    Object.assign(
        document.createElement('nav'),
        {
            id: "navbar",
            className: "navbar",
            innerHTML: `
            <div class="container d-row-rspn">
                <div class="logo d-flex">
                    <img id="logoImg" class="logo-img" alt="logo image">
                    <div id="toggleBtn" class="toggle-btn"></div>
                </div>
                <div id="menu">
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
                toggleBtn.innerHTML = `
                <div></div>
                <div></div>
                <div></div>`
                // menu and resmenu when the media is max wifth 600px then dhow resmenu else menu
                function myFunction(x) {
                    if (x.matches) {
                        // menu.classList.add('res-menu')
                        menu.classList.remove('menu')
                        menu.style.display = "none"
                    } else {
                        menu.classList.add('menu')
                        menu.classList.remove('rspn-menu')
                        menu.style.display = "block"
                    }
                }
                // Create a MediaQueryList object
                const media = window.matchMedia("(max-width: 600px)")
                // Call the match function at run time
                myFunction(media);
                // Add the match function as a listener for state changes
                media.addEventListener("change", function () {
                    myFunction(media);
                });
                // hide and show the menu
                toggleBtn.addEventListener('click', () => {
                    if (menu.classList.contains('rspn-menu')) {
                        // remove menu classlist
                        menu.classList.remove('rspn-menu');
                        menu.style.display = "none";
                    }
                    else {
                        // add menu classlist
                        menu.classList.add('rspn-menu')
                        menu.style.display = "block";
                    }
                })
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