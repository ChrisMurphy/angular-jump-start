import { AngularJumpStartPage } from './app.po';

describe('angular-jump-start App', function() {
  let page: AngularJumpStartPage;

  beforeEach(() => {
    page = new AngularJumpStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
