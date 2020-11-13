import { MODE_TYPES } from '@src/contants';
import { touchable } from '@util/util';
import { drawLine } from '@util/draw';

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

  constructor(props: any) {
    this.canvas = props.canvas;
    this.context = props.context;
    this.update(props);
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
      if (this.modeType === MODE_TYPES.LINE) {
        this.drawLine();
      }
      if (this.modeType === MODE_TYPES.ERASER) {
        this.clearByModeType();
      }

      // if (this.modeType === MODE_TYPES.ROUND) {
      //   this.drawRound();
      // }
    }
  };

  handleUp = () => {
    if (this.flag) {
      this.saveImageUrlToStore(this.canvas.toDataURL());
    }
    this.flag = false;
  };

  drawLine = () => {
    const { prevX, prevY, currX, currY, context, brushColor, lineWidth } = this;
    drawLine(context, prevX, prevY, currX, currY, brushColor, lineWidth);
  };

  // drawRound = () => {};

  clearByModeType() {
    const { context, lineWidth } = this;
    const { currX, currY } = this;
    const n = lineWidth / 2;
    context.clearRect(currX - n, currY - n, lineWidth, lineWidth);
  }
}

export default Controls;
