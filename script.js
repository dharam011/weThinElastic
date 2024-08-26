
gsap.from("#nav #logo,#nav #menu,#content h3 , #content p",{
    y:140,
    Delay:1,
    duration :.8,
    opacity:0,
 
    
    
})
gsap.from(".vido",{
    scaleX: 0.5,
ease: "power1.inOut" ,
    scrollTrigger:{
        trigger:"video",
        scroller:"body",
        start: "top 96%", 
        end:"bottom 80%",
        
                  
    scrub: true, 

    }
})
gsap.from("#faltuText h2",{
    y:150,
    opacity:0,
    scrollTrigger:{
        trigger:"#faltuText",
        scroller:"body",
      
        start:"top 50%",
        
        
        
    }
})
gsap.to("#expert h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:"#expert",
        scroller:"body",
      
    start:"#top top",
    end:"top -100%",
    scrub:2,
    pin:true,

    }
})
gsap.from("#vous h1",{
    opacity:0,
    color:"#e3c898",
    y:100,
    duration:2,
    scrollTrigger:{
        trigger:"#vous",
        scroller:"Body",
        
        start:"top 90%",
        end:"bottom 90%",
        
        scrub:true

    }
})
Shery.makeMagnet("#images #img1 video,#images #img2 img, #images #img3 video, #images #img4 img ,#images #img5 img");
var img =document.querySelector("#images #img1 video,#images #img2 img, #images #img3 video, #images #img4 img ,#images #img5 img");




