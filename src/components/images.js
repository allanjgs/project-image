function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/lap', false, /\.(png)$/));

export default images;
