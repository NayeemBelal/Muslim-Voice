const ruleInfo1 = document.querySelector("#rule-description")
const ruleInfo2 = document.querySelector("#rule-description2")
const head2 = document.querySelector("#rules h1");
const rubric = document.querySelector("#grades-cont")
const timeline = document.querySelector("#timeline")
const mediaHead = document.querySelector("#media-head");
const mediaVid = document.querySelector("#mediaVid");
const mediaHead2 = document.querySelector("#lastYr")
const mediaInfo = document.querySelector("#media-info")



window.addEventListener("scroll", () =>{
    if(scrollY >=400){
        head2.className = "animate1"
        ruleInfo1.className = "animate2"
        ruleInfo2.className = "animate2"
        rubric.className = "animate2"
        timeline.className = "animate2"

    }
    if(scrollY >=950){
        mediaHead.className = "animate3"
        mediaVid.className = "animate2"
        mediaHead2.className = "animate2"
        mediaInfo.className = "animate2"
    }
})


