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
            </div>
            <div class="slider-container">
                <div class="slider d-flex" id="slider">
                    <div class="slider-content"></div>
                    <div class="slider-content"></div>
                    <div class="slider-content"></div>
                    <div class="slider-content"></div>
                    <div class="slider-content"></div>
                </div>
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
                    const element = document.getElementById('slider');
                    const sliderContent = document.querySelector('.slider-content')
                    const width = sliderContent.offsetWidth;
                    
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
                <div class="bottom-content" id="bottomContent">
                
                </div>
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
                                    return`<div class="content-items">contents </div>`
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
            innerHTML:"this is section three"
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:"this is section four"
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:"this is section five"
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:"this is main page"
        } 
    )
)