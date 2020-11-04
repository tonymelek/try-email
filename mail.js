const clientId = 'fbf3c301b2a749407b4539437d664f03'
const clientSecret = '2cdb0b11ae78edfcd9cf77174d372c64'
$.post({
    url: 'https://api.mailjet.com/v3.1/send',
    headers: {
        //'Access-Control-Allow-Origin': 'http://localhost:5500',
        // 'Access-Control-Allow-Methods': 'POST',
        // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    },
    data: JSON.stringify({
        "Messages": [
            {
                "From": {
                    "Email": "tonnabil@gmail.com",
                    "Name": "Mailjet Pilot"
                },
                "To": [
                    {
                        "Email": "tonymelek.au@gmail.com",
                        "Name": "Tony"
                    }
                ],
                "Subject": "Your email flight plan!",
                "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
            }
        ]
    })
}).then(function (res) {
    console.log(res);
}).catch(err => console.log(err))