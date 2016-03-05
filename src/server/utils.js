export function userInfo(a, b) {
  if (a === {} || !b)
    return { ipaddress: null, language: null, software: null };

  const language = a['accept-language'].match(/^.*(?=,)/)[0];
  const software = a['user-agent'].match(/\(.*\)/)[0].replace(/[\(\)]/g, '');
  const ipaddress = b.match(/[^::ffff:].*/)[0];

  return { ipaddress: ipaddress, language: language, software: software };

}
