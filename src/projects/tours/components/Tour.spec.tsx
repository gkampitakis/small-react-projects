export {};

describe('Tour', () => {
  it('Should render correctly', () => {
    const data = {
      id: '1',
      image: 'string',
      name: 'mockName',
      info: 'data',
      price: '12345'
    };
    const removeTour = jest.fn();
  });

  it('Should trim info string if bigger than 200 chars', () => {
    const data = {
      id: '1',
      image: 'string',
      name: 'mockName',
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac blandit augue, in auctor dolor. 
      Integer tempor, libero eu pellentesque rutrum, lorem ante varius elit, eu aliquam magna massa sit amet metus. In hac habitasse platea dictumst. Ut purus orci, sollicitudin et efficitur pretium, viverra suscipit velit. 
      Ut vehicula vulputate ex, aliquam venenatis felis.`,
      price: '12345'
    };
    const removeTour = jest.fn();
  });

  it('Should invoke passed function on button click', () => {
    const data = {
      id: '1',
      image: 'string',
      name: 'mockName',
      info: 'data',
      price: '12345'
    };
    const removeTour = jest.fn();
  });
});
