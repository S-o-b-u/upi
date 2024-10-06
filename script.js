

// script.js
document.querySelector("#payButton").addEventListener("click", function () {
  const upiUrl = "upi://pay?pa=souvikrahutofficial-1@oksbi&pn=Souvik%20_R&aid=uGICAgMDyrIexZA";

  // Function to detect if the user is on a mobile device
  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  if (isMobile()) {
    // Redirect to UPI URL if on a mobile device
    window.location.href = upiUrl;
  } else {
    // Provide fallback for desktop users
    alert(
      "Please scan the QR code using your UPI app on your mobile device to make the payment."
    );
  }
});

document.getElementById("qrCodeDiv").addEventListener("click", function () {
  const qrImage = document.getElementById("qrImage").src;
  const link = document.createElement("a");
  link.href = qrImage;
  link.download = "upi-qr-code.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
