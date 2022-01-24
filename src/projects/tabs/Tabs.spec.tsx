export {};

describe('Tabs', () => {
  describe('Tabs', () => {
    it('Should render correctly', async () => {
      const response = [
        {
          id: 'rec6d6T3q5EBIdCfD',
          order: 1,
          title: 'mockTitle',
          dates: 'mockDate',
          duties: ['1', '2', '3'],
          company: 'mockCompany'
        }
      ];
    });

    it.todo('Should render error');

    it('Should change tab', () => {
      const response = [
        {
          id: 'mockId1',
          order: 1,
          title: 'mockTitle',
          dates: 'mockDate',
          duties: ['1', '2', '3'],
          company: 'mockCompany'
        },
        {
          id: 'mockId2',
          order: 1,
          title: 'mockTitle2',
          dates: 'mockDate2',
          duties: ['11', '22', '33'],
          company: 'mockCompany2'
        }
      ];
    });
  });

  describe('Tab', () => {
    it.todo('Should render a selected Tab');

    it.todo('Should render an unselected Tab');

    it.todo('Should invoke prop handler');
  });

  describe('Details', () => {
    it('Should render correctly', () => {
      const data = {
        id: '12345',
        order: 1,
        title: 'mockTitle',
        dates: 'mockDate',
        duties: ['1', '2', '3'],
        company: 'mockCompany'
      };
    });
  });
});
