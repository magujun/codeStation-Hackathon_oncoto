export const getPlayerId = (value: string, provider: string = "") => {
  if (provider.toLocaleLowerCase() === "google") {
    return value.replace('@gmail.com','');
  } else {
    return value;
  }
}
