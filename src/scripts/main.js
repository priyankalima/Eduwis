main.append(
    Object.assign(
        document.createElement('section'),
        { 
            innerHTML:`
            <div class="container d-row-rspn">
                 <div class="left-content d-col" id="leftContent"></div>
                 <div class="right-image" id="rightImage"></div>
            </div>
            `,
            function:addEventListener('load',()=>{
                fetch('./content.json').then(res=>res.json()).then((data)=>{
                    const item = data.main.sectionOne;
                    leftContent.innerHTML += `
                    <span>${item.title}</span>
                    <span>${item.heading}</span>
                    <span>${item.para}</span>
                    `
                })
            })
        } 
    ),
    Object.assign(
        document.createElement('section'),
        {
            innerHTML:"this is section two"
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