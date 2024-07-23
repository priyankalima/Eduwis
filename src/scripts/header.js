// creating element inside header
header.appendChild(
    Object.assign(
        document.createElement('nav'),
        {
            id:"navbar",
            className:"navbar",
            innerHTML:`
            <div class="logo">
                 <img id="logoImg">
            </div>
            <div class="menu">this is menu</div>
            `,
            // can be use eventlistener
            func:addEventListener('load',()=>{
                // alert('hello world')
            }),
            // can be use on click function
            onclick:function(){
                // alert('hii')
            }
        }
    )
)