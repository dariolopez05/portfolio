import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import AOS from 'aos';


@Component({
  selector: 'app-about',
  imports: [SliderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  
  ngOnInit() {
    AOS.init({
      duration: 800, 
      easing: 'ease-in-out',
      once: true, 
    });
  }

}
