import { Print3dAppPage } from './app.po';

describe('print3d-app App', () => {
  let page: Print3dAppPage;

  beforeEach(() => {
    page = new Print3dAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
