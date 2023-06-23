//import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function FormSimple() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setmessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(message);
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      phoneNumber.length == 0 ||
      message.length == 0
    ) {
      alert("Please provide all the information in the form.");
    } else {
      var templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
      };
      emailjs.send("service_wslqonu", "template_xw31rkj", templateParams, "DRrKRkKLKRUWU_GCw").then(
        function (response) {
          console.log("SUCCESS!", response.status);
          alert("Your message has been sent. We will reach out as soon as possible.");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setmessage("");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("There has been some error sending you message.");
        }
      );
    }
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Contact Us
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox onSubmit={handleSubmit} width="100%" component="form" autoComplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    variant="standard"
                    label="First Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    variant="standard"
                    label="Last Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="standard"
                    type="email"
                    label="Email Address"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    variant="standard"
                    type="phone"
                    label="Phone Number"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <MKInput
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    variant="standard"
                    label="Your Message"
                    multiline
                    fullWidth
                    rows={6}
                  />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Send Message
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}
export default FormSimple;
