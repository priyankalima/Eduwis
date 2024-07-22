// creating element inside header
header.appendChild(
    Object.assign(
        document.createElement('span'),
        {
            id:"heading",
            className:"heading",
            innerHTML:"this is header page",
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