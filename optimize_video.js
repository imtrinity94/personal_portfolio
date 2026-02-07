const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');
const path = require('path');

ffmpeg.setFfmpegPath(ffmpegPath);

const inputFile = path.join(__dirname, 'public', 'mayank_2.mp4');
const outputFile = path.join(__dirname, 'public', 'mayank_2-optimized.mp4');

console.log(`Starting optimization of ${inputFile}...`);

ffmpeg(inputFile)
    .outputOptions([
        '-c:v libx264',        // Video codec
        '-crf 23',             // Constant Rate Factor (quality/size trade-off)
        '-preset fast',        // Encoding speed
        '-g 1',                // Keyframe interval of 1 (every frame is a keyframe) -> Critical for smooth scrubbing
        '-t 6',                // Duration: 6 seconds
        '-movflags +faststart',// Optimize for web streaming
        '-an'                  // Remove audio (usually not needed for background video)
    ])
    .on('start', (commandLine) => {
        console.log('Spawned Ffmpeg with command: ' + commandLine);
    })
    .on('error', (err) => {
        console.error('An error occurred: ' + err.message);
    })
    .on('end', () => {
        console.log('Processing finished successfully!');
        console.log(`Optimized video saved to: ${outputFile}`);
    })
    .save(outputFile);
