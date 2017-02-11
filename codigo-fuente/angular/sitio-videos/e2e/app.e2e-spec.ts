import { SitioVideosPage } from './app.po';

describe('sitio-videos App', function() {
  let page: SitioVideosPage;

  beforeEach(() => {
    page = new SitioVideosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
