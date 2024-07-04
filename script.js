function generateQRCode() {
    const text = document.getElementById('text').value;
    const color = document.getElementById('color').value;
    const bgColor = document.getElementById('bgColor').value;
    const size = document.getElementById('size').value;

    if (text.trim() !== '') {
        const qrcodeContainer = document.getElementById('qrcode');
        qrcodeContainer.innerHTML = '';

        const qrcode = new QRCode(qrcodeContainer, {
            text: text,
            width: size,
            height: size,
            colorDark: color,
            colorLight: bgColor
        });

        document.getElementById('downloadBtn').style.display = 'block';
    } else {
        alert('Please enter text to generate a QR code');
    }
}

function downloadQRCode() {
    const qrcodeContainer = document.getElementById('qrcode').querySelector('canvas');
    const link = document.createElement('a');
    link.href = qrcodeContainer.toDataURL('image/png');
    link.download = 'qrcode.png';
    link.click();
}
