import { IamtracyPage } from './app.po';

describe('iamtracy App', () => {
  let page: IamtracyPage;

  beforeEach(() => {
    page = new IamtracyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
