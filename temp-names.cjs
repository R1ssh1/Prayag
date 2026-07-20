const fs = require('fs');
const files = ['src/data/products/pipes.ts', 'src/data/products/tubes.ts'];
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let matchCount = 0;
  content = content.replace(/name:\s*"([^"]+)"/g, (match, p1) => {
    matchCount++;
    // Extract the grade. 
    // Examples: "Seamless Stainless Steel Tube — TP304" -> "TP304"
    // "Stainless Steel Pipe — TP310S" -> "TP310S"
    // "Seamless Duplex 2205 S31803 Tube" -> "Duplex 2205 S31803"
    // "Seamless Inconel 600 Tube" -> "Inconel 600"
    let newName = p1;
    if (newName.includes('—')) {
      newName = newName.split('—')[1].trim();
    } else {
      // Remove "Seamless", "Welded", "Tube", "Pipe", "Stainless Steel", etc.
      newName = newName.replace(/Seamless\s+/i, '')
                       .replace(/Welded\s+/i, '')
                       .replace(/\s+Tube/i, '')
                       .replace(/\s+Pipe/i, '')
                       .replace(/Stainless Steel\s+/i, '');
    }
    console.log(`Original: ${p1} => New: ${newName}`);
    return `name: "${newName}"`;
  });
  console.log(`${file}: replaced ${matchCount} names`);
}
