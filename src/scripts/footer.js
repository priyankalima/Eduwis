// creating footer elements inside footer
footer.append(
    Object.assign(
        document.createElement('section'),
        {
            className:'contact-details',
            innerHTML:`
            <div class="container d-row-rspn">
                 <div class="left-details d-col">
                       <img id="img">
                       <span>Igniting Curiosity, Fueling Learning, and Simplifying School Management.</span>
                       <div class="d-row social-icons" id="socialIcons"></div>
                 </div>
                 <div class="right-details d-col">
                       <span class="contact-title">Contact Us</span>
                       <div class="address-icon d-col" id="addressIcon"></div>
                 </div>
            </div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then((data)=>{
                    img.src = data.header.logo;

                    data.footer.socialIcon.forEach(icon =>{
                        socialIcons.innerHTML += `<img src=${icon}>`
                    })
                    data.footer.address.forEach(item=>{
                        addressIcon.innerHTML += `
                        <div class="d-row"><img src=${item.icon}><span>${item.name}</span></div>`
                    })
                })
            })
        }
    ),
    Object.assign(
        document.createElement('section'),
        {
            classname:'copyright',
            innerHTML:`
            <div class="copyright">
                <div class="container">
                <span>Copyright © 2024 Eduwis</span>
                </div>
            </div>
            `
        }
    )
)