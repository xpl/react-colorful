const hsvToHsl = ({ h, s, v, a }) => {
  const hh = ((200 - s) * v) / 100;

  return {
    h: h,
    s: hh > 0 && hh < 200 ? ((s * v) / 100 / (hh <= 100 ? hh : 200 - hh)) * 100 : 0,
    l: hh / 2,
    a
  };
};

export default hsvToHsl;
