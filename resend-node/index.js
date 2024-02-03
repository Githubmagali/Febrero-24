import { Resend } from 'resend';

const resend = new Resend('re_j4PZusCw_2D2XW7etkvB2XdeQnprQKSU8');

(async function(){
  try{
const data = await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'magalivictoria85068@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
console.log(data)
  }catch(error){
    console.error(error)
  }
}
)