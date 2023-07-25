import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  countdownDays = 0;
  countdownHours = 0;
  countdownMinutes = 0;
  countdownSeconds = 0;

  ngOnInit(): void {
    this.getCountdown()
  }

  getCountdown(): void {
    let countDownDate = new Date("Aug 12, 2023 23:00:00").getTime();

    // Update the count down every 1 second
    let x = setInterval(() => {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      this.countdownDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdownHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdownMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.countdownSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("banner__countdown")[0].innerHTML = "EM BREVE UMA NOVA DATA!";
      }
    }, 1000);
  }
}
