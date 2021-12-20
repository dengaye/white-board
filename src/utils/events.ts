export const touchable = !!(
  'ontouchstart' in window ||
  (window.DocumentTouch && window.document instanceof window.DocumentTouch)
);

export const getEvent = (e: any) => {
  let event = e;
  if (e.touches && e.touches.length) {
    event = e.touches[0];
  }
  return event;
};

const TOUCH_EVENTS = {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend',
};

const MOUSE_EVENTS = {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup',
};

export const RESULT_EVENTS = touchable ? TOUCH_EVENTS : MOUSE_EVENTS;
