
const nodeMailer = require('nodemailer'), transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
  port: 465,
    secure: true,
  
    auth: {
        user: 'bestfrnd5888@gmail.com',
        pass: 'bpemxqucbzbldbmm'
    }

}), EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');
const users=[
    {
        name: ';dienbsh',
        Quotevalue:49999,
        email:'dheena5880@gmail.com'
    }
]
const sendMailToCustomer=require('./SendEmail')
function sendMail(obj) {
        return transporter.sendMail(obj)
}
function loadTemplate(templateName, contexts) {
console.log(templateName,contexts)
    let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
    return Promise.all(contexts.map(context => {
        return new Promise((resolve, reject) => {
            template.render(context, (err, res) => {
                if (err)
                    reject(err)
                else
                    resolve({
                        email: res,
                        context
                    })
            })
        })
    }))
}

const sendQuoteMail=(req,res)=>{
    if (req.body[0].temp == 'sendMessage') {
        console.log(req.body)
        sendMailToCustomer.sendQuoteMail({ temp: 'Replycustomer', req: req.body })
    }
loadTemplate(req.body[0].temp, req.body?req.body:req).then((results) => {
    return Promise.all(results.map((result) => {
        console.log(result)
        sendMail({
            to: result.context.email,
            from: 'Germinate :)',
            subject: result.email.subject,
            html: result.email.html,
            text: result.email.text,
        });
    }))
}).then(() => [
    console.log('Yay !')
]).catch(err => {
    console.log(err)
});
}
module.exports={
    sendQuoteMail
}