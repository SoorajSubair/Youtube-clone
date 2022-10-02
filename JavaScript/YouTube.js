const openMenu = document.querySelector('#menu-icon1')
const hiddenMenuIcon = document.querySelector('#hide-menu')
const sideMenu = document.querySelector('#nav-menu')



function abc()
{
    var Changewidth = document.getElementById ("btn")

    if(Changewidth.className == "page-content")
    {
        Changewidth.className = "page-content-clicked"
    }
    else{
        Changewidth.className = "page-content"
    }
}

function abc1()
{
    var Changewidth1 = document.getElementById ("btn1")

    if(Changewidth1.className == "chip-container-clicked d-flex align-items-center")
    {
        Changewidth1.className = "chip-container  d-flex align-items-center"
    }
    else{
        Changewidth1.className = "chip-container-clicked d-flex align-items-center"
    }
}



openMenu.addEventListener('click', function(){
    sideMenu.classList.toggle('active')
})


$('.chip-container').slick({
    slideToShow:10,
    slideToScroll: 2,
    arrows: true,
    variableWidth: true,
    prevArrow: '<div><svg style="height:24px; flex-shrink:0" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M10.15,13.35L4.79,8l5.35-5.35l0.71,0.71L6.21,8l4.65,4.65L10.15,13.35z" class="style-scope yt-icon"></path></g></svg></div>',
   nextArrow: '<div><svg style="height:24px; flex-shrink:0" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z" class="style-scope yt-icon"></path></g></svg></div>'


});

