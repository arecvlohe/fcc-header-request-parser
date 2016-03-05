import http from 'http';
import expect from 'expect';

describe('server', () => {
  it('should return 200 to GET /', done => {
    http.get('http://localhost:30002', res => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
  it('should return 200 to GET /whoami', done => {
    http.get('http://localhost:30002', res => {
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
  it('should return 400 to GET /*', done => {
    http.get('http://localhost:30002/abcdefg', res => {
      expect(res.statusCode).toEqual(400);
      done();
    });
  });
});
