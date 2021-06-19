export const getPlayerNick = (name:  string) => {
  const names = name.split(' ');

  if (names.length <= 1) return name;

  return `${names[0]} ${names.slice(-1)[0][0].toUpperCase()}.`
}

export const getPlayerId = (value: string, provider: string = "") => {
  if (provider.toLocaleLowerCase() === "google") {
    return value.replace('@gmail.com','');
  } else {
    return value;
  }
}
