import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {
  public readonly isSearchInputExpanded = signal(false);
  public readonly isSearchFiltersOpen = signal(false);

  public toggleSearchInput(event: MouseEvent) {
    event.stopPropagation();

    this.isSearchInputExpanded.update((value) => !value);
    if (!this.isSearchInputExpanded()) {
      this.isSearchFiltersOpen.set(false);
    }
  }

  public closeSearch() {
    this.isSearchFiltersOpen.set(false);
    this.isSearchInputExpanded.set(false);
  }

  public openFilters() {
    this.isSearchFiltersOpen.set(true);
  }
}
