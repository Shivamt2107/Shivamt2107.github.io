import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";
import Alert from '@mui/material/Alert';
// import { Stack } from "@mui/system";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

 


const Result = () => {
  return <Alert  variant="outlined" severity="success" marginTop="100px" sx={{ width: '100%' }}>
  Your response has been submitted...!
</Alert>
};

// const Result = React.forwardRef(function Alert(props, ref) {
//   return <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
//           <Alert onClose={handleClose} variant="filled"  severity="success"   sx={{ width: '100%' }}>
//           This is a success message!
//         </Alert>
//       </Snackbar>
//  });


function ContactForm() {
  // const [result, setResult] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vr8h7xd",
        "template_3n56oq7",
        e.target,
        "iYYZ3j00ylMx63nQQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setOpen(true);
  };

  return (
    <div className={styles["contact-form"]}>
      <form method="POST" name="contactForm" onSubmit={sendEmail}>
        {/* <p class="success-submit-message">
          Your message has been successfully sent.
        </p>
        <p class="fail-submit-message">
          An error occurred while sending the message.
        </p> */}
        <div className={styles["form-control"]}>
          <input
            id="name"
            name="from_name"
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <input
            id="email"
            name="email_id"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles["form-control"]}>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="message"
            required
          ></textarea>
        </div>
        {/* <input className={styles["submit-btn"]} type="submit" value="Submit" /> */}
        {/* <div>{result ? <Result /> : null}</div> */}


        {/* <Stack spacing={2} sx={{ width: '100%' }}> */}
        {/* //variant="contained" onClick={handleClick} */}
        <Button className={styles["submit-btn"]} variant="contained" onClick={handleClick} bg="#7e74f1">
          Submit
        </Button>
        <div style={{marginTop:"10px"}}>{open ? <Result /> : null}</div>
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} variant="filled" severity="success" marginTop="150px" sx={{ width: '100%' }}>
            Your response has been submitted...!
          </Alert>
        </Snackbar> */}
        {/* </Stack> */}
      </form>
    </div>
  );
}

export default ContactForm;
