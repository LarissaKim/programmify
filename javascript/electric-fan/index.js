function electricFan(speed) {
  let isOn = false; // fancy motor

  switch (speed) {
    case 1:
    case 2:
    case 3:
      isOn = true;
      break;
    default:
      isOn = false;
      break;
  }

  return {
    isOn,
    currentSpeed: speed >= 1 && speed <= 3 ? speed : 0,
  };
}
