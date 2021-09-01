import React, { useState, useEffect } from "react";
import ChamptionsCard from "../components/ChamptionsCard";
import Loading from "../components/Loading";
import { useVersionProvider } from "../context/ContextChamption";
import { useTheme } from "@material-ui/core/styles";
import { Container, Grid, useMediaQuery, Zoom } from "@material-ui/core";
import "../style/Champtions.css";
const Champtions = () => {
  const [champtions, setChamptions] = useState([]);
  let version = useVersionProvider();
  const theme = useTheme();
  const isXLarge = useMediaQuery(theme.breakpoints.up("xl"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
    )
      .then((response) => response.json())
      .then((data) => setChamptions(data.data));
  }, [version]);
  return (
    <>
      {champtions.length === 0 ? (
        <Loading />
      ) : (
        <Container maxWidth={isXLarge ? "xl" : "lg"}>
          {/*<div className="Champtions">*/}
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            {Object.keys(champtions).map((champ, index) =>
              isMd ? (
                <Zoom
                  key={champ}
                  in={true}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Grid item xl={2} md={2} sm={4} xs={6}>
                    <ChamptionsCard champ={champtions[champ]} />
                  </Grid>
                </Zoom>
              ) : (
                <Zoom
                  key={champ}
                  in={true}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <Grid
                    item
                    xl={2}
                    md={2}
                    sm={4}
                    xs={6}
                    style={{ flexBasis: 0 }}
                  >
                    <ChamptionsCard champ={champtions[champ]} />
                  </Grid>
                </Zoom>
              )
            )}
          </Grid>
          {/*</div>*/}
        </Container>
      )}
    </>
  );
};

export default Champtions;
