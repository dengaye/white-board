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

export function drawEllipse(ctx: any, x: number, y: number, w: number, h: number) {
  const kappa = 0.5522848;
  const ox = (w / 2) * kappa; // control point offset horizontal
  const oy = (h / 2) * kappa; // control point offset vertical
  const xe = x + w; // x-end
  const ye = y + h; // y-end
  const xm = x + w / 2; // x-middle
  const ym = y + h / 2; // y-middle

  ctx.beginPath();
  ctx.moveTo(x, ym);
  ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  ctx.closePath();
  ctx.stroke();
}
