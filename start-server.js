const { spawn } = require('child_process');
const path = require('path');

console.log('Starting Next.js development server...');

// Run the next dev command
const nextProcess = spawn('node', [path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next'), 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Handle process events
nextProcess.on('error', (error) => {
  console.error(`Failed to start Next.js server: ${error}`);
});

nextProcess.on('close', (code) => {
  if (code !== 0) {
    console.log(`Next.js server process exited with code ${code}`);
  }
});