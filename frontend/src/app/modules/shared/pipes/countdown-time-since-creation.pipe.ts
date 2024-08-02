import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'countdownTimeSinceCreation',
})
export class CountdownTimeSinceCreationPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(value: Date, ...args: unknown[]): string {
    const now = new Date();
    const past = new Date(value);

    const diffInMilliseconds = now.getTime() - past.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays >= 1) {
      return `${diffInDays} ${this.translate.instant('days-ago')}`;
    } else if (diffInHours >= 1) {
      return `${diffInHours} ${this.translate.instant('hours-ago')}`;
    } else {
      return `${diffInMinutes} ${this.translate.instant('minutes-ago')}`;
    }
  }
}
