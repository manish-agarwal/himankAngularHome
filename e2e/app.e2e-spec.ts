import { HimankAngularHomePage } from './app.po';

describe('himank-angular-home App', function() {
  let page: HimankAngularHomePage;

  beforeEach(() => {
    page = new HimankAngularHomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
