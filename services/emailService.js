
import nodemailer from 'nodemailer';

// send otp
const transporter = nodemailer.createTransport({
    // Configure transporter
    service: 'gmail',
    auth: {
        user: 'swypemate@gmail.com',
        pass: 'ptpb kpjp qqnq evke'
    }
});

export async function sendEmailToUser(name, email) {
    // console.log(email)
    const mailOptions = {
        // Configure mail options
        from: 'swypemate@gmail.com',
        to: email,
        subject: 'register',
        text: `thanks ${name} for considering us. Our team will reach out to you shortly`
    };

    try {
       const result = await transporter.sendMail(mailOptions);
       if(result) {
        console.log('email sent');
       }
        
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}


export async function sendEmailToOwner(name, email,phone,message,prefferedService) {
   
    const mailOptions = {
        // Configure mail options
        from: 'swypemate@gmail.com',
        to: ' ritujainanant2810@gmail.com',
        subject: 'register',
        html: `<h2>Contact Form Submission</h2>
                <p><strong>Name : </strong>${name}</p>
                <p><strong>Email : </strong>${email}</p>
                <p><strong>Phone : </strong>${phone}</p>
                <p><strong>Services : </strong></p>
                <ul>
                ${
                    prefferedService.map((ele,ind)=>{
                       return `<li key=${ind}}>${ele}</li>`
                    })
                }
                </ul>
                <p><strong>Message : </strong>${message}</p>`
    };

    try {
       const result = await transporter.sendMail(mailOptions);
       if(result) {
        console.log('email sent');
       }
        
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}