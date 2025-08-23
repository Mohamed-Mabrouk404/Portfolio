import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(
      'service_4psgndi',
      'template_rah8zkz',
      e.target as HTMLFormElement,
      'wXMvUkaslZ3Z3CkDB'
    ).then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.error(error.text);
        alert("Failed to send message.");
      });
  }

}
