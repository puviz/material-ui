import React from "react";
import { Grid, Button } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";

const datatableData = [
  ["Joe James", "James", "James@test.com", "Active", "Internal"],
  ["John Walsh", "Walsh", "Walsh@test.com", "Active", "External"],
  ["Bob Herm", "Herm", "Herm@test.com", "Deactive", "Internal"],
  ["James Houston", "houston", "Houston@test.com", "Active", "External"],
  ["Prabhakar Linwood", "ELinwood", "ELinwood@test.com", "Active", "External"],
  ["Kaui Ignace", "Ignace", "Ignace@test.com", "Active", "Internal"],
  ["Esperanza Susanne", "Susanne", "Susanne@test.com", "Active", "External"],
  [
    "Christian Birgitte",
    "Birgitte",
    "Birgitte@test.com",
    "Deactive",
    "Internal",
  ],
  ["Meral Elias", "Elias", "Elias@test.com", "Active", "External"],
  ["Deep Pau", "Pau", "Pau@test.com", "Active", "Internal"],
  ["Sebastiana Hani", "Hani", "Hani@test.com", "Active", "External"],
  ["Marciano Oihana", "Oihana", "Oihana@test.com", "Active", "Internal"],
  ["Brigid Ankur", "Ankur", "Ankur@test.com", "Active", "External"],
  ["Anna Siranush", "Siranush", "Siranush@test.com", "Active", "Internal"],
  ["Avram Sylva", "Sylva", "Sylva@test.com", "Active", "External"],
  [
    "Serafima Babatunde",
    "Babatunde",
    "Babatunde@test.com",
    "Deactive",
    "Internal",
  ],
  ["Gaston Festus", "Festus", "Festus@test.com", "Deactive", "Internal"],
];


export default function Users({ history }) {
  return (
    <>
      <PageTitle
        title="Users"
        button={
          <Button
            variant="contained"
            size="medium"
            color="secondary"
            onClick={() => history.push("/app/users/onboarding")}
          >
            User Onboarding
          </Button>
        }
      />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title=""
            data={datatableData}
            columns={["Name", "Username", "Email", "Status", "Type"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
