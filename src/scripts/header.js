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
                    <div id="toggleBtn" class="toggle-btn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
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
                // menu and resmenu when the media is max wifth 600px then dhow resmenu else menu
                const media = window.matchMedia("(max-width: 600px)")
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
                myFunction(media);
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
            className: "banner d-flex",
            innerHTML: `
             <div class="carousel-content" id="carouselContent"></div>
             <div class="carousel-control" id="carouselControl"></div>
            `,
            function: addEventListener('load', () => {
                // create carousel content
                for (let i = 0; i < 4; i++) {
                    carouselContent.innerHTML += `
                        <div class="carousel">
                            <div class="container">
                                <div class="carousel-item d-flex" id="carouselItem">
                                    <div class="banner-title" id="bannerTitle">title</div>
                                    <div class="banner-img" id="bannerImg">image</div>
                                </div>
                            </div>
                        </div>
                        `
                }
                // create 4 buttons
                for (let i = 0; i < 4; i++) {
                    carouselControl.innerHTML += `
                        <input type="radio" name="tab" id=${'tab' + i}>
                        <label for=${'tab' + i} class="tab"></label>
                        `
                }
                // first input should be check as default
                document.getElementsByName('tab')[0].setAttribute ('checked',"checked")
                // get all the tabs and content
                const tabs = document.getElementsByName('tab');
                console.log(tabs)
                const contents = document.getElementsByClassName('carousel');
                console.log(contents.length)
                  
                for(let i =0 ; i < tabs.length ; i++){
                    console.log(tabs[i])
                    // if(document.getElementById('tab'+ i).checked){
                    //     console.log('tab'+ i + 'is checkde')
                    // }
                    console.log(contents);
                    // contents[i].style.display = "none"
                    tabs[i].addEventListener('click',()=>{
                        // alert('clicked')
                        console.log(contents[i].offsetLeft)
                        const chekcLeft = contents[i].offsetLeft;
                        if(document.getElementById('tab'+ i).checked){
                            contents[i].style.marginLeft =  -chekcLeft + "px";
                        }
                    })
                }
                 

            })
        }
    )
)