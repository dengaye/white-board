class Controls {
  canvas: any;
  context: any;
  brushColor: string;
  lineWidth: number | string;
  prevX: number = 0;
  prevY: number = 0;
  currX: number = 0;
  currY: number = 0;
  flag: boolean = false;

  constructor(props: any) {
    this.canvas = props.canvas;
    this.context = props.context;
    this.brushColor = props.brushColor;
    this.lineWidth = props.lineWidth;
  }

  update = (props: any) => {
    this.brushColor = props.brushColor;
    this.lineWidth = props.lineWidth;
  };
  init = (props: any) => {
    this.canvas = props.canvas;
    this.context = props.context;
    this.update(props);
    props.canvas.addEventListener('mousedown', this.handleDown);
    props.canvas.addEventListener('mousemove', this.handleMove);
    props.canvas.addEventListener('mouseup', this.handleUp);
    props.canvas.addEventListener('mouseout', this.handleUp);
  };

  handleDown = (e: any) => {
    this.prevX = this.currX;
    this.prevY = this.currY;
    this.currX = e.clientX - this.canvas.offsetLeft;
    this.currY = e.clientY - this.canvas.offsetTop;
    this.flag = true;
  };

  handleMove = (e: any) => {
    if (this.flag) {
      this.prevX = this.currX;
      this.prevY = this.currY;
      this.currX = e.clientX - this.canvas.offsetLeft;
      this.currY = e.clientY - this.canvas.offsetTop;
      this.draw();
    }
  };

  handleUp = () => {
    this.flag = false;
  };

  draw = () => {
    const { context, brushColor, lineWidth } = this;
    const { prevX, prevY, currX, currY } = this;
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);
    context.strokeStyle = brushColor;
    context.lineWidth = lineWidth;
    context.stroke();
    context.closePath();
  };
}

export default Controls;
