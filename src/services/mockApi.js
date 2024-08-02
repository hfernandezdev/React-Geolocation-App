export const fetchPins = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { lat: 10.4806, lng: -66.9036 },
        { lat: 10.9274, lng: -68.2738 }
      ]);
    }, 1000);
  });
};
