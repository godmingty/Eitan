

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  //end
  birthday = "08/01/" + "2023";
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "חזרנו למין!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

window.addEventListener("DOMContentLoaded",() => {
	const n = new Notifications("#notifications");	
});
class Notifications {
	constructor(qs) {
		this.el = document.querySelector(qs);
		this.badge = null;
		this.items = 0;
		this.timeout = null;
		this.init();
	}
	init() {
		if (this.el) {
			console.log("new meesege");
			this.el.addEventListener("click",this.read.bind(this));
			this.badge = this.el.querySelector("[data-badge]");

			this.reset(1);
		}
	}
	read() {
		if (this.items > 0) {
			this.items = 0;
			this.el.classList.remove("notifications--active");
			this.badge.innerHTML = "";
			clearTimeout(this.timeout);
		}
	}
	reset(items) {
		this.items = items;

		if (this.items > 0) {
			this.el.classList.add("notifications--active");
			this.badge.innerHTML = this.items;
		}
	}
}

function conf(){
  window.location.href='#announcement';
}