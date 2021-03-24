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

export const convertBase64ToBlob = (base64Image: string) => {
  const parts = base64Image.split(';base64,');
  const imageType = parts[0].split(':')[1];
  const decodedData = window.atob(parts[1]);
  const uInt8Array = new Uint8Array(decodedData.length);

  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: imageType });
};

export const downloadFile = (fileName: string, content: string) => {
  const aLink = window.document.createElement('a');
  const blob = convertBase64ToBlob(content);
  const evt = window.document.createEvent('MouseEvents');
  evt.initEvent('click', false, false);
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.dispatchEvent(evt);
};

export function getWidthOrHeightOfSize(value: number) {
  if (value) {
    return `${((value + 10) / 750) * 200}vw`;
  } else {
    return 0;
  }
}
