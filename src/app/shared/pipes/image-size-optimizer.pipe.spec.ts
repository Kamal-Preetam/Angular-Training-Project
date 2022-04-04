import { ImageSizeOptimizerPipe } from './image-size-optimizer.pipe';

describe('ImageSizeOptimizerPipe', () => {
  it('create an instance', () => {
    const pipe = new ImageSizeOptimizerPipe();
    expect(pipe).toBeTruthy();
  });
});
