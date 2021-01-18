import { MODE_TYPES } from '@src/contants';
import { touchable } from '@util/util';
import { drawLine, drawRound } from '@util/draw';

class Controls {
  canvas: any;
  context: any;
  brushColor: string;
  lineWidth: number;
  modeType: string;
  prevX: number = 0;
  prevY: number = 0;
  currX: number = 0;
  currY: number = 0;
  flag: boolean = false;
  saveImageUrlToStore: any;
  state: any;

  constructor(props: any) {
    this.canvas = props.canvas;
    this.context = props.context;
    this.update(props);
    this.state = {
      canMoveEvent: false,
    };
  }

  update = (props: any) => {
    this.brushColor = props.brushColor;
    this.lineWidth = props.lineWidth;
    this.modeType = props.modeType;
  };

  init = (props: any) => {
    this.canvas = props.canvas;
    this.context = props.context;
    this.saveImageUrlToStore = props.saveImageUrlToStore;
    this.update(props);
    if (touchable) {
      props.canvas.addEventListener('touchstart', this.handleDown);
      props.canvas.addEventListener('touchmove', this.handleMove);
      props.canvas.addEventListener('touchend', this.handleUp);
    } else {
      props.canvas.addEventListener('mousedown', this.handleDown);
      props.canvas.addEventListener('mousemove', this.handleMove);
      props.canvas.addEventListener('mouseup', this.handleUp);
      props.canvas.addEventListener('mouseout', this.handleUp);
    }
  };

  handleDown = (e: any) => {
    this.prevX = this.currX;
    this.prevY = this.currY;
    let x = 0;
    let y = 0;
    if (e.changedTouches) {
      x = e.changedTouches[0].clientX;
      y = e.changedTouches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    this.currX = x - this.canvas.offsetLeft;
    this.currY = y - this.canvas.offsetTop;
    this.flag = true;
  };

  handleMove = (e: any) => {
    if (this.flag) {
      this.state.canMoveEvent = true;
      this.prevX = this.currX;
      this.prevY = this.currY;
      let x = 0;
      let y = 0;
      if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      this.currX = x - this.canvas.offsetLeft;
      this.currY = y - this.canvas.offsetTop;
      this.draw();
    }
  };

  handleUp = () => {
    if (!this.state.canMoveEvent) {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.draw();
    } else {
      this.state.canMoveEvent = false;
    }
    if (this.flag) {
      this.saveImageUrlToStore(this.canvas.toDataURL());
    }
    this.flag = false;
  };

  draw = () => {
    const { modeType } = this;
    switch (modeType) {
      case MODE_TYPES.LINE:
        this.drawLine();
        break;
      case MODE_TYPES.ERASER:
        this.clearByModeType();
        break;
      case MODE_TYPES.ROUND:
        this.drawRound();
        break;
      default:
        break;
    }
  };

  drawLine = () => {
    const { prevX, prevY, currX, currY, context, brushColor, lineWidth } = this;
    drawLine(context, prevX, prevY, currX, currY, brushColor, lineWidth);
  };

  drawRound = () => {
    const { prevX, prevY, currX, context, brushColor, lineWidth } = this;
    context.save();
    drawRound(context, prevX, prevY, Math.abs(currX - prevX + lineWidth), brushColor, lineWidth);
    context.restore();
  };

  clearByModeType() {
    const { context, lineWidth } = this;
    const { currX, currY } = this;
    const n = lineWidth / 2;
    context.clearRect(currX - n, currY - n, lineWidth, lineWidth);
  }
}

export default Controls;
