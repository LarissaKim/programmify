// Based on personal preferences
function chooseMusic() {
  const rando = Math.random();
  const randoFloat = parseFloat(rando.toFixed(2));

  switch (true) {
    case randoFloat < 0.03:
      // The content of this clause usually changes
      const edmPref = ['house', 'dubstep'];
      return `Random playlist of ${edmPref[Math.floor(rando * edmPref.length)]}`;

    case randoFloat < 0.09:
      const yes = ['lofi chillhop', 'city pop'];
      const samples = ['cafe ambience', 'rain asmr', 'philosophical musings'];
      const chosen = yes[Math.floor(rando * yes.length)];

      return chosen == yes[0]
        ? `${chosen} with ${samples[Math.floor(rando * samples.length)]}`
        : chosen;

    default:
      const bands = [
        'Lamb of God',
        'Disturbed',
        'Meshuggah',
        'Cryptopsy',
        'Slipknot',
        'Blind Guardian',
        'Foo Fighters',
      ]; // among many others

      return bands[Math.floor(rando * bands.length)];
  }
}
