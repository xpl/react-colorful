const hslToHsv = ({ h, s, l, a }) => {
  s *= (l < 50 ? l : 100 - l) / 100;

  return {
    h: h,
    s: s > 0 ? ((2 * s) / (l + s)) * 100 : 0,
    v: l + s,
    a
  };
};

export default hslToHsv;
