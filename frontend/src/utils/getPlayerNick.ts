export const getPlayerNick = (name:  string) => {
  const names = name.split(' ');

  if (names.length <= 1) return name;

  if (names[1][0] !== names[1][0].toLocaleLowerCase()) return `${names[0]} ${names[1][0].toUpperCase()}.`

  return `${names[0]} ${names.slice(-1)[0][0].toUpperCase()}.`
}
