import expect from 'expect';
import { userInfo } from '../src/server/utils';

describe('#userInfo', () => {
  it('should return user data when given a header object and ip address', () => {
    const header = {
      'user-agent': '(Macintosh; Intel Mac OS X 10.11; rv:44.0)',
      'accept-language': 'en-gb, en;q=0.7',
    };
    const ip = '::ffff:10.140.192.224';
    const actual = userInfo(header, ip);
    const expected = {
      ipaddress:'10.140.192.224',
      language:'en-gb',
      software:'Macintosh; Intel Mac OS X 10.11; rv:44.0', };
    expect(actual).toEqual(expected);
  });
  it('should return an object when not given header info or ipaddress', () => {
    const header = {};
    const ip = '';
    const actual = userInfo(header, ip);
    const expected = {
      ipaddress: null,
      language: null,
      software: null,
    };
    expect(actual).toEqual(expected);
  });
});
