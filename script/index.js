const img = document.getElementsByClassName("section1_women1_img1") [0];
const video = document.getElementsByClassName("polina_video") [0];
img.addEventListener("mouseover", function(){
    img.classList.add('display_none')
    video.classList.remove('display_none')
});
video.addEventListener("mouseout", function(){
    video.classList.add('display_none')
    img.classList.remove("display_none")
});
    window.addEventListener('scroll', function(e) {
    const upparrow = document.getElementsByClassName('area_arrow')[0]
    const nav = document.getElementsByClassName('fixed-nav-bar')[0]

    window.pageYOffset > 100 ? upparrow.classList.remove("upperbutton_section_nodisplay") : upparrow.classList.add("upperbutton_section_nodisplay")
    window.pageYOffset > 100 ? nav.classList.remove("nav_bar_section_nodisplay") : nav.classList.add("nav_bar_section_nodisplay")
    });