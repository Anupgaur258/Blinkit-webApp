import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()
if (process.env.RESEND_API) {
    console.log("provide RESEND_API inside dotenv file ")
    const sendEmail = ({ name, send })
}
const resend = new Resend(process.env.RESEND_API);

(async function() {
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
})();