var tab = document.getElementById("pirmas");
tab.style.display = "block";
  function changeHeader(target, name){
    var tabs = document.getElementsByClassName("tab");
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < tabs.length; i++){
      tabs[i].style.display = "none";
      buttons[i].classList.remove("active");
    }
    var tab = document.getElementById(name);
    tab.style.display = "block";
    target.currentTarget.classList.add("active");
  }

    const btnShowMsg = document.getElementsByClassName("tab");

    btnShowMsg.addEventListener("click", function () {
      alert("How's it going?");
    });
