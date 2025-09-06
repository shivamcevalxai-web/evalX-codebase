const fs = require('fs');
const path = require('path');

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, '..', 'public', 'Portfolio_data', 'optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Copy and rename images to optimized versions
const images = [
  {
    original: 'label1.jpeg',
    optimized: 'label1-optimized.jpg'
  },
  {
    original: 'label2.webp',
    optimized: 'label2-optimized.webp'
  },
  {
    original: 'Screenshot 2025-08-08 105341.png',
    optimized: 'screenshot-1-optimized.png'
  },
  {
    original: 'Screenshot 2025-09-05 202225.png',
    optimized: 'screenshot-2-optimized.png'
  },
  {
    original: 'Screenshot 2025-09-05 202259.png',
    optimized: 'screenshot-3-optimized.png'
  },
  {
    original: 'Screenshot 2025-09-05 205319.png',
    optimized: 'screenshot-4-optimized.png'
  }
];

// Copy images to optimized directory
images.forEach(image => {
  const sourcePath = path.join(__dirname, '..', 'public', 'Portfolio_data', image.original);
  const destPath = path.join(optimizedDir, image.optimized);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`Copied ${image.original} to ${image.optimized}`);
  } else {
    console.log(`Source file not found: ${image.original}`);
  }
});

// Create placeholder files for large GIFs (these will be replaced with actual optimized versions)
const gifPlaceholders = [
  'recording-1-placeholder.jpg',
  'recording-2-placeholder.jpg', 
  'recording-3-placeholder.jpg',
  'recording-4-placeholder.jpg',
  'toc-placeholder.jpg'
];

gifPlaceholders.forEach(placeholder => {
  const placeholderPath = path.join(optimizedDir, placeholder);
  // Create a simple placeholder file
  fs.writeFileSync(placeholderPath, '');
  console.log(`Created placeholder: ${placeholder}`);
});

console.log('Image optimization setup complete!');
console.log('Note: Large GIF files need to be manually optimized and replaced in the optimized directory.');
