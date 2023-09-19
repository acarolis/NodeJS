var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anacarolinarangel16@gmail.com',
    pass: 'sgiz wjdj toww sbyk'
  }
});

var mailOptions = {
  from: 'anacarolinarangel16@gmail.com',
  to: 'emanoelbaltazar.nenel@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 