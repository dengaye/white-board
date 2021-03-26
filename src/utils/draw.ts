export const drawLine = (
  ctx: any,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  color: string,
  lineWidth: number
) => {
  // ctx.beginPath();
  // ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.stroke();
  // ctx.closePath();
};

export const drawRound = (
  ctx: any,
  x: number,
  y: number,
  r: number,
  color: string,
  lineWidth: number
) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.lineCap = 'round';
  ctx.closePath();
  ctx.stroke();
};

// https://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas
export function drawEllipseByBezierCurveTo(
  ctx: any,
  x: number,
  y: number,
  disX: number,
  disY: number
) {
  const kappa = 0.5522848;
  const ox = (disX / 2) * kappa; // control point offset horizontal
  const oy = (disY / 2) * kappa; // control point offset vertical
  const xe = x + disX; // x-end
  const ye = y + disY; // y-end
  const xm = x + disX / 2; // x-middle
  const ym = y + disY / 2; // y-middle

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  ctx.closePath();
  ctx.stroke();
}

export function drawEllipse(ctx: any, x: number, y: number, disX: number, disY: number) {
  ctx.save(); // save state
  ctx.beginPath();

  ctx.translate(x - disX, y - disY);
  ctx.scale(disX, disY);
  ctx.arc(1, 1, 1, 0, 2 * Math.PI, false);

  ctx.restore(); // restore to original state
  ctx.stroke();
}
