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
                    </div class="menu-list" id="menuList"></div>
                </div>
            </div>
            `,
            // can be use eventlistener
            function: addEventListener('load', () => {
                // alert('hello world')
            }),
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