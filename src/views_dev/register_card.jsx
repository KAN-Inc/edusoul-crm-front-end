import React from "react";
import * as Global from "../components/global";
import * as Styled from "../components/dashboard/card";
const RegisterCard = () => {
  return (
    <>
      <Global.Grid gap="30" columns="3">
        <Styled.Card>
          <Styled.CardBody>
            <Global.Text color="#14274E" fontSize="24">
              Fill these fields with student information
            </Global.Text>
            <Global.Flexbox
              margin="12px 0"
              align="center"
              justify="space-between"
            >
              <Global.Text color="#14274E;" fontSize="20">
                FIO
              </Global.Text>
              <Global.Input type="text" placeholder="Polonchiyev Pistonchi" />
            </Global.Flexbox>
            <Global.Flexbox
              margin="12px 0"
              align="center"
              justify="space-between"
            >
              <Global.Text color="#14274E;" fontSize="18">
                Date of birth
              </Global.Text>
              <Global.Input
                type="text"
                placeholder="dd/mm/yyyy"
                onFocus={(e) => (e.target.type = "date")}
              />
            </Global.Flexbox>
            <Global.Flexbox
              margin="12px 0"
              align="center"
              justify="space-between"
            >
              <Global.Text color="#14274E;" fontSize="18">
                FIO
              </Global.Text>
              <Global.Input type="text" placeholder="Polonchiyev Pistonchi" />
            </Global.Flexbox>
            <Global.Flexbox
              margin="12px 0"
              align="center"
              justify="space-between"
            >
              <Global.Text color="#14274E;" fontSize="18">
                Guruh
              </Global.Text>
              <Global.Select>
                <option selected disabled>
                  Kursni tanla
                </option>
                <option>Hello</option>
              </Global.Select>
            </Global.Flexbox>
            <Global.Flexbox
              margin="12px 0"
              align="center"
              justify="space-between"
            >
              <Global.Text color="#14274E;" fontSize="18">
                Picture
              </Global.Text>
              <label for="file_upload" className="file_button">
                Upload
              </label>
              <Global.Input id="file_upload" type="file" />
            </Global.Flexbox>
          </Styled.CardBody>
          <Styled.CardFooter>
            <Global.Button>Finish</Global.Button>
          </Styled.CardFooter>
        </Styled.Card>
      </Global.Grid>
    </>
  );
};
export default RegisterCard;
