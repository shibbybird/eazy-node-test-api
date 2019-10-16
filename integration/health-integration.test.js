const assert = require('assert');
const axios = require('axios');

describe('validate health check', () => {
  it('should return 200', () => {
    return axios.get('http://eazy-node-test-registry:3000/health')
      .then((response) => {
        assert.equal(200, response.status);
      })
      .catch((error) => {
        assert.fail(error);
      })
  })
})


