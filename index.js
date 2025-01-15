const showPhoneNumberButton = document.getElementById("showPhonenumberButton");
const phoneNumber = document.getElementById("phonenumber");

showPhoneNumberButton.addEventListener("click", function() {
    let message = "tkd13000@gmail.com";
    phoneNumber.textContent = "";
    let count = 0;
    let intervalID;

    if (!intervalID)
    {
        intervalID = setInterval(function()
        {
            if (count < message.length)
            {
                phoneNumber.textContent += message[count];
                count++;
            }
            else
            {
                clearInterval(intervalID);
                intervalID = null;
            }
        }, 250);
    }
});