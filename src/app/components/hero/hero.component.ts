import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  scrollToNextSection() {
  const nextSection = document.querySelector('.hero-transition'); 
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

}
