export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('loggedInfo'));

  if (user && user.token) {
    console.log(`auth-header: ${user} token: ${user.token}`);
    return { Authorization: `Bearer ${user.token}` };
  }
  /* return {
    Authorization:
      'BEARER ' +
      'eyJyZWdEYXRlIjoxNjA1MDczNjY5ODkwLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjA3NjY1NjY5LCJlbWFpbCI6InRlc3QyQHRlc3QudGVzdCJ9.z8eLFCsuP4iRFlErgelgoxlo7V3_BgYj4LJqh68c3B0',
  }; */

  return {};
}
