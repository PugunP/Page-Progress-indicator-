const progressEL = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = (scrollTop/pageHeight)*100
    progressEL.style.visibility = "visible"
    progressEL.style.width = scrollPercentage+"%"
}