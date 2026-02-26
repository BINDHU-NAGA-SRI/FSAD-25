// Entry point shim for deployment platforms that expect index.js at project root
// This file simply delegates to the real server file in "src/index.js".

// If you ever move the actual server file, update this path accordingly.
require('./src/index.js');
