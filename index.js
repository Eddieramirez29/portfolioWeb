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

//Go to "footerContainer section"
const contactMe = document.getElementById('contactMe');

contactMe.addEventListener('click', function(event) {
    event.preventDefault();
    const footerContainer = document.querySelector('.footerContainer');
    const button = document.getElementById('showPhonenumberButton');
    if (footerContainer) {
        footerContainer.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            button.classList.add('highlight');
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('highlight');
                button.classList.remove('active');
            }, 2000);
        }, 1500);
    }
});
