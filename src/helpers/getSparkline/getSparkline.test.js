import getSparkline from './getSparkline';

describe('getSparkline tests', () => {
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve()
    })
  );

  it('should call getSparkline with the correct parameters', async () => {
    const expected = ['https://api.nomics.com/v0/sparkline'];

    await getSparkline();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});