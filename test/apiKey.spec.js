const fakeAPIKey = "fakeapikey";

const localStorage = {};

const fakeSetApiKey = (key) => {
  localStorage["key"] = key;
};

const fakeGetApiKey = () => {
  const key = localStorage["key"];
  return key;
};

describe('fakeSetApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    fakeSetApiKey(fakeAPIKey);
    expect(localStorage["key"]).toEqual(fakeAPIKey);
  });
});

describe('fakeGetApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    expect(fakeGetApiKey()).toEqual(fakeAPIKey);
  });
});
