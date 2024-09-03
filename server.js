const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const usbDetect = require('usb-detection');

// Setup Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (like your HTML file)
app.use(express.static(__dirname));

// Handle USB Detection
usbDetect.startMonitoring();

usbDetect.on('add', (device) => {
    const message = `Device plugged in: ${device.manufacturer} - ${device.deviceName}`;
    console.log(message);
    io.emit('usb-detection', message);
});

usbDetect.on('remove', (device) => {
    const message = `Device removed: ${device.manufacturer} - ${device.deviceName}`;
    console.log(message);
    io.emit('usb-detection', message);
});

// Start Server
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
