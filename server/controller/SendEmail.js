
const nodeMailer = require('nodemailer'), transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
  port: 465,
    secure: true,
  
    auth: {
        user: 'bestfrnd5888@gmail.com',
        pass: 'bbztoafgyabmnkbt'
    }

}), EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');

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

const sendQuoteMail=(data)=>{
    console.log('send',data.temp,data.req)
loadTemplate(data.temp, data.req).then((results) => {
    return Promise.all(results.map((result) => {
        console.log(result)
        sendMail({
            to: result.context.Custemail,
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