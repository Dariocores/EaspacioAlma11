// Simple WCAG contrast checker for the site's main palette
function hexToRgb(hex) {
  const h = hex.replace('#','');
  const bigint = parseInt(h, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function srgb2lin(c) {
  c = c/255;
  return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
}

function luminance(hex) {
  const [r,g,b] = hexToRgb(hex);
  return 0.2126*srgb2lin(r) + 0.7152*srgb2lin(g) + 0.0722*srgb2lin(b);
}

function contrastRatio(hex1, hex2) {
  const L1 = luminance(hex1);
  const L2 = luminance(hex2);
  const bright = Math.max(L1,L2);
  const dark = Math.min(L1,L2);
  return (bright+0.05)/(dark+0.05);
}

const palette = {
  background: '#fffafc',
  text: '#333333',
  heading: '#2b1055',
  primary: '#7e57c2',
  accent: '#4db6ac'
};

console.log('Contrast report for main palette:');
for (const [k,v] of Object.entries(palette)){
  console.log(`- ${k}: ${v}`);
}

function checkPair(aName,aHex,bName,bHex,level=4.5){
  const ratio = contrastRatio(aHex,bHex);
  const ok = ratio >= level;
  console.log(`\nPair: ${aName} (${aHex}) on ${bName} (${bHex}) -> ratio ${ratio.toFixed(2)} => ${ok? 'PASS':'FAIL'} (req ${level}:1)`);
  return {ratio,ok};
}

// Check text contrast
checkPair('text',palette.text,'background',palette.background,4.5);
checkPair('heading',palette.heading,'background',palette.background,4.5);
checkPair('primary',palette.primary,'background',palette.background,3.0); // primary as UI element (AA large/contrast 3)
checkPair('accent',palette.accent,'background',palette.background,3.0);

console.log('\nIf any is FAIL, consider adjusting color lightness or using the darker variant for text.');
