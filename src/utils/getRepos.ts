export default async function getRepos() {
  const res = await fetch('https://api.github.com/users/arfabanyu/repos');
  return res.json();
}