import { Component } from '@angular/core';
import { Router, NavigationStart, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationStart) {
  //       // ✅ Your custom action here
  //       console.log('Navigation started to:', event.url);

  //       // Example: start animation, loading spinner, log, etc.
  //       this.startTransitionAnimation();
  //     }
  //   });
  // }
  // startTransitionAnimation() {
  //   // Example action: could be animation trigger, state update, etc.
  //   console.log('Starting transition animation...');
  // }
}
