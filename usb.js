const usbDetect = require('usb-detection');

// Start monitoring for USB device changes
usbDetect.startMonitoring();

// Listen for device addition
usbDetect.on('add', function (device) {
    console.log('Device added:', device);
    // Display an alert for device addition
    alert(`USB Device Added: ${device.deviceName}`);
});

// Listen for device removal
usbDetect.on('remove', function (device) {
    console.log('Device removed:', device);
    // Display an alert for device removal
    alert(`USB Device Removed: ${device.deviceName}`);
});

console.log('Monitoring USB devices. Press Ctrl+C to stop.');
