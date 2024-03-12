function importAll(r) {
  return r.keys().map(r);
}

const frame = importAll(require.context('../assets/frame', false, /\.(png)$/));

export default frame;

