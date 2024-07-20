// Compostion misconception
const rectangular = (state: any) => {
  return {
    area: () => {
      return state.height * state.width;
    },
  };
};

const openable = (state: any) => {
  return {
    toggleOpen: () => {
      state.open = !state.open;
    },
    area: () => {},
  };
};

const buildRectangleWindow = (state: any) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  height: 30,
  width: 20,
  open: false,
});

console.log(rectangleWindow);
