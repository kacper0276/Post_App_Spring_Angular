import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdownTimeSinceCreation',
})
export class CountdownTimeSinceCreationPipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): string {
    const now = new Date();
    const past = new Date(value);

    const diffInMilliseconds = now.getTime() - past.getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays >= 1) {
      return `${diffInDays} dni temu`;
    } else if (diffInHours >= 1) {
      return `${diffInHours} godzin temu`;
    } else {
      return `${diffInMinutes} minut temu`;
    }
  }
}
