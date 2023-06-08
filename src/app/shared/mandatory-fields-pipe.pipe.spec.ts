import { MissingMandatoryFieldsPipe } from './mandatory-fields-pipe.pipe';

describe('MandatoryFieldsPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MissingMandatoryFieldsPipe();
    expect(pipe).toBeTruthy();
  });
});
