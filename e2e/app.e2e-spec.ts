import { Angular4appPage } from './app.po';

describe('angular4app App', () => {
  let page: Angular4appPage;

  beforeEach(() => {
    page = new Angular4appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
