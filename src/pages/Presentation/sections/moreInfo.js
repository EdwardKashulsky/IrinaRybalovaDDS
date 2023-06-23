// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function FeaturesOne() {
  return (
    <MKBox component="section" py={{ xs: 3, md: 12 }}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={5}>
            <MKTypography variant="h3" my={1}>
              How to Book:
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={2}>
              We are open every Monday - Friday from 9:00am to 6:00pm. You can make an appointment
              by calling, sending an email, walking into our office, or by leaving a message down
              below and we will get back to you as soon as possible.
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <i className="fas fa-phone fa-lg" />
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  &nbsp; (917) 734-2235
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <i className="fas fa-envelope fa-lg" />
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  &nbsp; rybalovadds@yahoo.com
                </MKTypography>
              </MKBox>
              <MKBox display="flex" alignItems="center" p={2}>
                <MKBox
                  width="3rem"
                  height="3rem"
                  variant="gradient"
                  bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="xl"
                >
                  <i className="fas fa-building fa-lg" />
                </MKBox>
                <MKTypography variant="body2" color="text" pl={2}>
                  &nbsp; 21 West Merrick Rd
                </MKTypography>
              </MKBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default FeaturesOne;
