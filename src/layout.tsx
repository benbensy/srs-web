import { Box, Container, AppBar, TextField, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import { css } from "@emotion/css";
import { useCallback, useRef } from "react";
import { useSearchParams } from "react-router-dom";

function Layout() {
  const [params, setParams] = useSearchParams();

  const roomFieldRef = useRef<HTMLInputElement>(null);

  const updateParams = useCallback(
    (room: string) => {
      const newParams = new URLSearchParams(params);
      newParams.set("room", room);
      setParams(newParams);
    },
    [params, setParams]
  );

  return (
    <Box display="flex" flexDirection="column">
      <AppBar position="static" color='default'>
        <Container maxWidth="xl">
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" paddingTop={1} fontSize={18} fontWeight={900} justifyContent='center'>{params.get("room") || "不知道谁"}的直播间</Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              padding={1}
              gap={1}
            >
              <TextField
                name="room"
                inputRef={roomFieldRef}
                defaultValue={params.get("room")}
                size="small"
                fullWidth
                label="房间号"
                type="search"
              />
              <Button
                type="submit"
                variant="contained"
                onClick={() => {
                  updateParams(roomFieldRef.current!.value);
                }}
              >
                播放
              </Button>
              <Button onClick={() => {
                navigator.clipboard.writeText(location.href)
              }}>分享</Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
      <Outlet />
      <footer
        className={css`
          display: flex;
          justify-content: center;
        `}
      >
        hello
      </footer>
    </Box>
  );
}

export default Layout;
