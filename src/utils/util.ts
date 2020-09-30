export const touchable = !!(
  'ontouchstart' in window ||
  (window.DocumentTouch && window.document instanceof window.DocumentTouch)
);
