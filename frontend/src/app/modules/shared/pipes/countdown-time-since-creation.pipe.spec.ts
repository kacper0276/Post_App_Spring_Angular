import { CountdownTimeSinceCreationPipe } from './countdown-time-since-creation.pipe';

describe('CountdownTimeSinceCreationPipe', () => {
  it('create an instance', () => {
    const pipe = new CountdownTimeSinceCreationPipe();
    expect(pipe).toBeTruthy();
  });
});
