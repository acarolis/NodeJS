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
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Bom dia prefe Joedio!  from; Ana Carolina Rangel Antonio 2B senha; sgiz wjdj toww sbyk'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 