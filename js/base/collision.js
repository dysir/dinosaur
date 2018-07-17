function touch(line1, line2) {

  let t1 = cross(line1[0], line1[1], line2[0]);
  let t2 = cross(line1[0], line1[1], line2[1]);
  let t3 = cross(line2[0], line2[1], line1[0]);
  let t4 = cross(line2[0], line2[1], line1[1]);

  return !!(t1 * t2 < 0 && t3 * t4 < 0);
}

function cross(pointa, pointb, pointc) {
  let cross1 = (pointc[0] - pointa[0]) * (pointb[1] - pointa[1]);
  let cross2 = (pointc[1] - pointa[1]) * (pointb[0] - pointa[0]);
  return (cross1 - cross2);
}

export default function (l1, l2) {  
  let line1 ,line2;
  for (var i = 0; i < l1.length; i++) {
    if (l1[i + 1]) {
      line1 = [
        l1[i],
        l1[i + 1]
      ];
      for (var n = 0; n < l2.length; n++) {
        if (l2[n + 1]) {
          line2 = [
            l2[n],
            l2[n + 1]
          ];
          if (touch(line1, line2)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}