function chooseMenu(menuItems, hasEatenBefore, isSafeChoice) {
  const candidates = [];
  const safeChoices = []; // This will always have at least one item

  menuItems.forEach((item, i) => {
    if (!hasEatenBefore[i]) {
      let hasEggplant;
      for (const ingredient in item) {
        if (item[ingredient].toLowerCase() === 'eggplant') {
          hasEggplant = true;
          break;
        } else {
          hasEggplant = false;
        }
      }
      if (!hasEggplant) candidates.push(item);
      //  Or we could early return with the first item
      //  if (!hasEggplant) return item;
    }

    if (isSafeChoice[i]) {
      safeChoices.push(item);
    }
  });

  //  Ideally more decision making would happen before returning the selected item
  //  e.g. sort by price, does the picture look appealing (if the menu has pictures), etc.
  return candidates.length > 0 ? candidates[0] : safeChoices[0];
}
