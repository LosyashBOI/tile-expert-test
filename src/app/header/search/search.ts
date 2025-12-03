import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutside } from '@shared/directives/click-outside';
import { Checkbox } from '@shared/components/checkbox/checkbox';
import { BreakpointService } from '@shared/services/breakpoint-service';
import { SearchService } from '@shared/services/search-service';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule, ClickOutside, Checkbox],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  standalone: true,
})
export class Search {
  private breakpointService = inject(BreakpointService);
  public searchService = inject(SearchService);

  public readonly history = [
    'закрепить теги',
    'кнопка',
    'приложение',
    'форма',
    'текстовое поле',
    'выпадающий список',
  ];
  public readonly isMobile = this.breakpointService.isMobile;
}
