/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpg";
//import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
      >
        <MKTypography variant="h2" fontWeight="bold">
          About Us:
        </MKTypography>
      </Grid>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                title={
                  <>
                    <br />
                    <br />
                    <br />
                  </>
                }
              />
              <RotatingCardBack
                image={bgFront}
                title={
                  <>
                    The Dentist
                    <br />
                  </>
                }
                description="Irina Rybalova graduted from NYU Dental School in 1991 and has been working for over 20 years"
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <i className="fas fa-user-nurse fa-lg" />
                <DefaultInfoCard
                  title="Dentist"
                  description="We only have one dentist in the office"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <i className="fas fa-tooth fa-lg" />
                <DefaultInfoCard
                  title="Teeth Cleaning"
                  description="We offer teeth cleaning and flouride"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <i className="fas fa-teeth fa-lg" />
                <DefaultInfoCard
                  title="Other Services"
                  description="We also do root canals, xrays, canvities and braces"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <i className="fas fa-calendar-day fa-lg" />
                <DefaultInfoCard
                  title="Schedule"
                  description="We are open every weekday from 9:00am-6:00pm"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
