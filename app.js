(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
function myFunction(){
    if (!document.getElementById("name-form").value || !document.getElementById("email").value || !document.getElementById("subject-form").value || !document.getElementById("message-form").value){
        alert("Please fill in all the fields")
    } 
}
