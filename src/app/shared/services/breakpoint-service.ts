import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private breakpointObserver = inject(BreakpointObserver);

  public readonly isMobile = toSignal(
    this.breakpointObserver.observe(['(max-width: 768px)']).pipe(map((res) => res.matches)),
  );
}
