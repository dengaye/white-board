export const touchable = !!(
  'ontouchstart' in window ||
  (window.DocumentTouch && window.document instanceof window.DocumentTouch)
);

/**
 * Convert BASE64 to BLOB
 * @param base64Image Pass Base64 image data to convert into the BLOB
 */
export const convertBase64ToBlob = (base64Image: string) => {
  // Split into two parts
  const parts = base64Image.split(';base64,');

  // Hold the content type
  const imageType = parts[0].split(':')[1];

  // Decode Base64 string
  const decodedData = window.atob(parts[1]);

  // Create UNIT8ARRAY of size same as row data length
  const uInt8Array = new Uint8Array(decodedData.length);

  // Insert all character code into uInt8Array
  for (let i = 0; i < decodedData.length; ++i) {
    uInt8Array[i] = decodedData.charCodeAt(i);
  }

  // Return BLOB image after conversion
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
