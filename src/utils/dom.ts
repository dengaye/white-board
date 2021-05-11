export const createIframe = (src = '', id = '') => {
  const iframeDom = window.document.createElement('iframe');
  iframeDom.src = src;
  iframeDom.id = id;
  iframeDom.setAttribute('allowfullscreen', '');
  return iframeDom;
};

export const appendToBody = (dom: any) => {
  window.document.body.appendChild(dom);
};

export const getRootDOM = () => window.document.getElementById('root');

export const hideRootDOM = () => {
  const rootDOM: any = getRootDOM();
  rootDOM.style.display = 'none';
};

export const showRootDOM = () => {
  const rootDOM: any = getRootDOM();
  rootDOM.style.display = 'block';
};
