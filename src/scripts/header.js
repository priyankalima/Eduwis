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
                // active humburger nav
                toggleBtn.addEventListener('click',()=>{
                    toggleBtn.classList.toggle('toggle-nav')
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
                fetch('./content.json').then(res=> res.json()).then((data)=>{
                    // console.log(data)
                   data.header.banner.forEach((item)=>{
                    carouselContent.innerHTML += `
                    <div class="carousel">
                        <div class="container">
                            <div class="carousel-item d-row-rspn" id="carouselItem">
                                <div class="banner-title d-col" id="bannerTitle">
                                  <span class="heading">
                                  <span style="color:var(--secondary-color) !important;">Eduwis:</span> 
                                  ${item.heading}</span>
                                  <span class="title">${item.title}</span>
                                  <span class="para">${item.para}</span>
                                  <button>Get Started</button>
                                </div>
                                <div class="banner-img" id="bannerImg">
                                  <img src=${item.img}>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
                   })
                })
                
                // create 4 buttons
                for (let i = 0; i < 4; i++) {
                    carouselControl.innerHTML += `
                        <input type="radio" name="tab" id=${'tab' + i}>
                        <label for=${'tab' + i} id="label"></label>
                        `
                }
                // defind carousel tabs,content and manin carousel elemnt
                const tabs = document.getElementsByName('tab');
                const content = document.getElementsByClassName('carousel');
                const element = document.getElementById("carouselContent");
                // by default check the first input is checked
                document.getElementsByName('tab')[0].checked = true;
                // manual slider
                tabs.forEach((t, i) => {
                    t.addEventListener('click', () => {
                        if (document.getElementById('tab' + i).checked) {
                            const scrollPosition = content[i].offsetLeft;
                            element.scrollTo(scrollPosition, 0);
                        }
                    })
                })
                // auto slider
                let counter = 0;
                setInterval(() => {
                    counter++;
                    if (counter >= 4) {
                        counter = 0;
                    }
                    document.getElementById('tab' + counter).checked = true;
                    const scrollPosition = content[counter].offsetLeft;
                    element.scrollTo(scrollPosition,0);
                }, 5000)

            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            id:"info",
            className:"info",
            innerHTML:`
            <svg width="317" class="left" height="304" viewBox="0 0 317 304" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M186.347 177.505C143.18 121.679 304 64.5095 275.5 -0.490479H-17V300.382C100.578 302.742 331.838 306.046 316.25 300.382C296.765 293.303 240.307 247.287 186.347 177.505Z" fill="#0E48DD" />
            </svg>
            <svg width="302" class="right" height="304" viewBox="0 0 302 304" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M130.653 125.514C173.82 181.34 13 238.51 41.5 303.51H334V2.63663C216.422 0.276855 -14.8383 -3.02686 0.750061 2.63663C20.2354 9.716 76.6931 55.7319 130.653 125.514Z" fill="#0E48DD" />
            </svg>
            <div class="container d-col">
                <span class="info-title">Digitize Your School With Our Integrated Platform</span>
                <form class="d-row-rspn">
                   <input type="text" placeholder="Your Name">
                   <input type="email" placeholder="Your Email">
                   <input type="number" placeholder="Your Phone No.">
                   <button type="submit">Book A Demo</button>
                </form>
            </div>
            `
        }
    )
)