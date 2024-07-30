main.append(

    Object.assign(
        document.createElement('section'),
        { 
            innerHTML:`
            <div class="container">
                <div class="d-row-rspn">
                    <div class="left-content d-col" id="leftContent"></div>
                    <div class="right-image" id="rightImage"></div>
                </div>
                <div class="slider-container">
                <div class="slider d-flex" id="slider"></div>
                <button class="left" id="left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none" viewBox="0 0 58 58">
                    <g filter="url(#a)">
                    <circle cx="25" cy="25" r="25" fill="#fff" transform="matrix(-1 0 0 1 54 4)"/>
                    </g>
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m24.25 29.193 4.5-4.5m-4.5 4.5 4.5 4.5m-4.5-4.5h10.5"/>
                    <defs>
                    <filter id="a" width="58" height="58" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix values="0 0 0 0 0.576665 0 0 0 0 0.576665 0 0 0 0 0.576665 0 0 0 0.25 0"/>
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_161"/>
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_161" result="shape"/>
                    </filter>
                    </defs>
                </svg>
                </button>
                <button class="right" id="right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none" viewBox="0 0 58 58">
                    <g filter="url(#a)">
                        <circle cx="29" cy="29" r="25" fill="#fff"/>
                    </g>
                    <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m34.75 29.193-4.5-4.5m4.5 4.5-4.5 4.5m4.5-4.5h-10.5"/>
                    <defs>
                        <filter id="a" width="58" height="58" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix values="0 0 0 0 0.576665 0 0 0 0 0.576665 0 0 0 0 0.576665 0 0 0 0.25 0"/>
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_0_156"/>
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_156" result="shape"/>
                        </filter>
                    </defs>
                  </svg>
            </button>
            </div>
            </div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then((data)=>{
                    const item = data.main.sectionOne;
                    leftContent.innerHTML += `
                    <span class="title">${item.title}</span>
                    <span class="heading">${item.heading}</span>
                    <span class="para">${item.para}</span>
                    <button>Request for free Demo </button>
                    `
                    rightImage.innerHTML +=`
                    <img src=${item.img}>
                    `
                    item.other.forEach(elmnt=>{
                        slider.innerHTML += `
                        <div class="slider-content">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src=${elmnt.img} alt="Avatar">
                                    <div class="drop-trnsp"></div>
                                    <p>${elmnt.title}</p>
                                </div>
                                <div class="flip-card-back">
                                    <span class="title">${elmnt.title}</span> 
                                    <span class="para">${elmnt.para}</span>
                                </div>
                            </div>
                        </div>
                        `
                    })
                    const element = document.getElementById('slider');
                    const sliderContent = document.querySelector('.slider-content')
                    const width = element.scrollWidth-sliderContent.offsetWidth;
                    
                    left.addEventListener('click',()=>{
                        element.scrollBy(-width,0)
                    })
                    right.addEventListener('click',()=>{
                        element.scrollBy(width,0)
                    })
                    
                })
            })
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="container">
                <div class="top-title d-col">
                     <span>Module Overview</span>
                     <span>Comprehensive ERP Modules with role-based portal benefits, user-friendly 
                     dashboards and customization reports
                     </span>
                </div>
                <div class="bottom-content" id="bottomContent"></div>
            </div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    data.main.sectionTwo.module.forEach((item,i) => {
                        bottomContent.innerHTML += `
                          <input type="radio" id=${'moduletab' + i} name="moduleTab" >
                          <label for=${'moduletab' + i}>${item.name}</label>
                          <div class="tab-content ">
                            <div class="content-container">
                            ${
                                item.list.map(data =>{
                                    return`
                                    <div class="content-items">
                                         <div class="d-flex">
                                            <img src=${data.icon}>
                                            <span>${data.name}</psna>
                                         </div>
                                         <p>${data.para}</p>
                                    </div>`
                                }).join("")
                            }
                            </div>
                          </div>
                        `
                    });
                    document.getElementsByName('moduleTab')[0].checked = true;
                })
            })
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="container d-flex">
                 <div class="left-content d-col" id="aboutLeftContent"></div>
                 <div class="right-image" id="aboutRightContent"></div>
            </div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main.sectionThree
                    console.log(item);
                    aboutLeftContent.innerHTML = `
                    <span class="title">${item.title}</span>
                    <span class="heading">${item.heading}</span>
                    <span class="para">${item.para}</span>
                    <div class="tabs">
                         ${
                            item.detail.map((data,i)=>{
                                return`
                                <input type="radio" name="abouttab" id=${'abouttab' + i}>
                                <label for=${'abouttab' + i}>${data.name}</label>
                                <p>${data.para}</p>
                                `
                            }).join("")
                         }
                    </div>
                    `
                    document.getElementsByName('abouttab')[0].checked = true;
                    aboutRightContent.innerHTML = `
                    <img src=${item.img}>
                    `
                })
            })
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="container d-flex">
                 <div class="section-04-left-image" id="section04LeftImage"></div>
                 <div class="section-04-right-content d-col" id="section04RightContent"></div>
            </div>`,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main.sectionFour;
                    section04LeftImage.innerHTML =`
                    <img src=${item.img}>
                `
                    section04RightContent.innerHTML =`
                    <span class="heading">Discover the <span class="customize">EDUWIS</span> Advantage </span>
                    <span class="title">${item.title}</span>
                    <span class="para">${item.para}</span>
                    <div class="store-link">
                      <a><img src=${item.playstore}></a>
                      <a><img src=${item.appstore}></a>
                    </div>
                    `
                })
            })
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="container d-col">
                 <div class="section-05-top d-col" id="section05Top"></div>
                 <div class="section-05-bottom" id="section05Bottom"></div>
            </div>
            `,
            function:addEventListener('load',()=>{
                  fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main.sectionFive;
                    section05Top.innerHTML = `
                    <span class="title">FAQ</span>
                    <span class="heading">${item.title}</span>
                    `
                    item.faq.forEach((elmnt,i)=>{
                        section05Bottom.innerHTML += `
                        <div class="accordion">
                            <input type="radio" name="accordion" id=${'accordion' + i}>
                            <label for=${'accordion' + i}>
                               <span class="title">${elmnt.title}</span>
                               <span class="arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.7929 14C16.2383 14 16.4614 13.4614 16.1464 13.1464L12.3536 9.35355C12.1583 9.15829 11.8417 9.15829 11.6464 9.35355L7.85355 13.1464C7.53857 13.4614 7.76165 14 8.20711 14H15.7929Z" fill="#0239C7" />
                                    </svg>
                               </span>
                            </label>
                            <div class="content">${elmnt.content}</div>
                        </div>
                      `
                    })
                    document.getElementsByName('accordion')[0].checked = true;
                  })
            })
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:`
            <div class="container">
                <div class="section-06-top d-col" id="section06Top"></div>
                <div class="section-06-bottom" id="section06Bottom"></div>
                <div class="cto-btn"> <button>Explore more</button></div>
            </div>
            `,
            function:addEventListener('load',()=>{
                  fetch('./content.json').then(res=>res.json()).then(data=>{
                    const item = data.main.sectionSix;
                    section06Top.innerHTML = `
                      <span class="title">Read Blog</span>
                      <span class="heading">${item.title}</span>
                    `
                    item.blog.forEach(elmnt=>{
                        section06Bottom.innerHTML += `
                            <div class="blog-container d-col">
                             <img src=${elmnt.img}>
                             <div class="content d-col">
                                <span class="title">${elmnt.title}</span>
                                <span class="date">${elmnt.date}</span>
                             </div>
                            </div>
                        `
                    })
                  })
                  
            })
        } 
    )
)