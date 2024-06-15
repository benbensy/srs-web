import { Container, Box } from "@mui/material";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";

function Home() {
  const location = useLocation();

  const room = useMemo(() => {
    const paramsObj = new URLSearchParams(location.search);
    return paramsObj.get("room");
  }, [location.search]);

  const url = useMemo(() => `/live/${room}.flv`, [room]);

  return (
    <div>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" paddingTop={2}>
          {room ? (
            <ReactPlayer url={url} controls width={"100%"} height={"auto"} />
          ) : (
            <></>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default Home;
