import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:patel.balveer07@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:patel.balveer07@gmail.com">patel.balveer07@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918686448676"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918686448676">(+91) 8686448676</a>
        </div>  
      </div>
    </Container>
  )
}