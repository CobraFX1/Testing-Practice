import { getUserData } from './api';

describe('getUserData', () => {
  it('returns user data when the API call is successful', async () => {
    // 1. Setup the Mock
    const mockUser = { id: 1, name: 'Jacob' };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUser),
      })
    );

    // 2. Run the function
    const data = await getUserData(1);

    // 3. Assertions
    expect(data.name).toBe('Jacob');
    expect(fetch).toHaveBeenCalledTimes(1);
    
    // Always clear mocks after use!
    fetch.mockClear();
  });
});