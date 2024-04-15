const validateNumbers = (arrayA, arrayB) => {
  const including = [];
  const excluding = [];
  if (arrayA.length>0 && arrayB.length>0) {
    arrayA.forEach((item) => {
      if (arrayB.includes(item)) {
        if (!including.includes(item)) {
          including.push(item);
        }
      } else  {
        excluding.push(item);
      }
    });
    arrayB.forEach((item) => {
      if (!including.includes(item) && !excluding.includes(item)) {
        excluding.push(item);
      }
    });
  }
  return [including, excluding];
}

export { validateNumbers };