function showAgeVerificationPopup() {
    document.getElementById("age-verification-popup").style.display = "block";
}

function verifyAge(over21) {
    if (over21) {
        document.getElementById("age-verification-popup").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        window.location.href = "under21.html";
    }
}

window.onload = function() {
        showAgeVerificationPopup();
    };