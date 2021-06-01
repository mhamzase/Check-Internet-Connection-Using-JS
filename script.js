const wrapper = document.querySelector(".wrapper"),
  toast = wrapper.querySelector(".toast"),
  title = toast.querySelector("span"),
  subTitle = toast.querySelector("p"),
  wifiIcon = toast.querySelector(".icon"),
  closeIcon = toast.querySelector(".close-icon");

window.onload = () => {
  function ajax() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhttp.onload = () => {
      if (xhttp.status == 200 && xhttp.status < 300) {
        toast.classList.remove("offline");
        title.innerText = "You're online now";
        subTitle.innerText = "Hurray! Internet is connected.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';

        closeIcon.onclick = () => {
          //hide toast notification on close icon click
          wrapper.classList.add("hide");
        };

        setTimeout(() => {
          //hide the toast notification automatically after 5 seconds
          wrapper.classList.add("hide");
        }, 5000);
      } else {
        offline(); //calling offline function if ajax status is not equal to 200 or not less that 300
      }
    };

    xhttp.onerror = () => {
      offline(); ////calling offline function if the passed url is not correct or returning 404 or other error
    };

    xhttp.send(); //sending get request to the passed url
  }

  function offline() {
    //function for offline
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Internet is disconnected.";
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }

  setInterval(() => {
    //this setInterval function call ajax frequently after 100ms
    ajax();
  }, 100);
};
