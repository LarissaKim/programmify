function toaster(rightSlot, leftSlot, timeInMinutes, isBagel = false) {
  const now = new Date().getTime();
  const end = now + timeInMinutes * 60000; // in milliseconds

  if (isBagel) {
    console.log('Bagel toasting in progress...');
  } else {
    console.log('Toasting in progress...');
  }

  let remaining = end - now;
  let keepToasting = true;
  while (keepToasting) {
    if (remaining < 1) {
      keepToasting = false;
    }

    remaining -= 1000;
    console.log(remaining / 1000);
  }

  if (rightSlot.toLowerCase() === leftSlot.toLowerCase()) {
    return `Toasted ${rightSlot}`;
  }

  return `Toasted ${rightSlot} and ${leftSlot}`;
}
