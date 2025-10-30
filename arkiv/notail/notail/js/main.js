window.onload = function(){ 
    //check isLogin
    if(localStorage.getItem("isLogin") == 1) {
        document.querySelector(".setting-login").innerHTML = `<a href="#">Account</a>`
    }

    // slideToggle
    document.querySelectorAll(".slideToggle").forEach(function(slideToggle) {
        slideToggle.onclick = function() {
            var slideToggleContent = this.querySelector(".slideToggleContent");
            var slideToggleContentHeight = slideToggleContent.scrollHeight;

            if (slideToggleContent.style.height == 0 || slideToggleContent.style.height == '0px') {
                slideToggleContent.style.height = slideToggleContentHeight + "px";
            }
            else {
                slideToggleContent.style.height = 0;
            }
        };
    });



    // open-close-menu
    document.querySelector(".menu-icon .w-fit").onclick = function() {
        document.getElementById("header").classList.toggle("active-menu");
    };

    
    
    // dark light mode toggle class
    document.querySelector(".dark-light-icon").onclick = function() {
        document.body.classList.toggle("active-dark-light-mode");
    };

    //save dark-light-mode
    document.getElementById("dark-icon").addEventListener("click", function() {
        localStorage.setItem("active-dark-light-mode", true);
    });

    //save dark-light-mode
    document.getElementById("light-icon").addEventListener("click", function() {
        localStorage.setItem("active-dark-light-mode", false);
    });
    
    //display dark-light-mode
    if(localStorage.getItem("active-dark-light-mode") === 'true') {
        document.body.classList.add("active-dark-light-mode");
    }
};



// popup
function popup(popupHead, popupContent, url, buttonText) {
    var newDiv = document.createElement("div");
    newDiv.className = "popup fixed";

    var buttonHTML = "";
    if(buttonText != "") {
        buttonHTML = `
            <div class="popup-button border">
                <a href=${url} target="_blank" class="black-button w-full text-center text-075">${buttonText}</a>
            </div>
        `;
    }
    
    newDiv.innerHTML = `
        <div class="popup-panel col-6 bg-white">
        <div class="popup-head flex border">
            <h2 class="text-1 uppercase">${popupHead}</h2>
            <span id="close-popup-icon" class="material-symbols-outlined">close</span>
        </div>
        <p class="text-center border">
            ${popupContent}
        </p>
        ${buttonHTML}
    `;

    document.querySelector(".container").appendChild(newDiv);

    document.getElementById("close-popup-icon").addEventListener("click", function() {
        this.closest(".popup").remove();
        document.querySelector("form").reset();
    })
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }














