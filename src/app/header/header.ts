import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBar } from '@header/nav-bar/nav-bar';
import { Search } from '@header/search/search';
import { BreakpointService } from '@shared/services/breakpoint-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, NgOptimizedImage, NavBar, Search],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  private breakpointService = inject(BreakpointService);

  public readonly notificationCount = 32;
  public readonly isMobile = this.breakpointService.isMobile;
}
