document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){
        if (window.scrollY > 250){
            document.getElementById("navbar_top").classList.add("fixed-top");
            let navbar_height = document.querySelector(".navbar").offsetHeight;
            document.body.style.paddingTop = navbar_height + "px";
        }
        else{
            this.document.getElementById("navbar_top").classList.remove("fixed-top");
            this.document.body.style.paddingTop = "0";
        }
    })
})