const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fukudaum@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fukudaum@gmail.com',
        subject: 'Sorry to see you go!',
        text: `I'm sorry to hear that you ${name} is leaving us. What could we done for that not happening in the future?`
    })
    

}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}