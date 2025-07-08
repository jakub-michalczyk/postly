import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Signal,
  signal,
  ViewChild,
} from '@angular/core';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-author-details',
  imports: [],
  templateUrl: './author-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorDetailsComponent {
  @ViewChild('authorSection') authorSection?: ElementRef<HTMLElement>;
  @Input() user: Signal<IUser | null> = signal(null);

  ngAfterViewChecked(): void {
    if (this.authorSection) {
      this.authorSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}
