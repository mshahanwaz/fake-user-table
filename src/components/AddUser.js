import {
  Button,
  createTheme,
  makeStyles,
  Paper,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/users";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    type: "light",
  },
});

function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    id: 0,
  });
  const [clicked, setClicked] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleCreate = () => {
    if (
      user.name &&
      user.username &&
      user.email &&
      user.phone &&
      user.website
    ) {
      dispatch(createUser({ ...user, id: user.website }));
      setClicked(false);
      setUser({});
    } else alert("Some details are missing!");
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper square="true" align="center">
        {clicked ? (
          <>
            <TextField
              label="Name"
              margin="dense"
              variant="outlined"
              className={classes.margin}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              label="Username"
              margin="dense"
              variant="outlined"
              className={classes.margin}
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <TextField
              label="Email"
              margin="dense"
              variant="outlined"
              className={classes.margin}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              label="Phone"
              margin="dense"
              variant="outlined"
              className={classes.margin}
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <TextField
              label="Website"
              margin="dense"
              variant="outlined"
              className={classes.margin}
              value={user.website}
              onChange={(e) => setUser({ ...user, website: e.target.value })}
            />
            <Button
              variant="contained"
              align="center"
              className={classes.margin}
              color="primary"
              onClick={() => handleCreate()}
            >
              Add
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            align="center"
            className={classes.margin}
            color="primary"
            onClick={() => setClicked(true)}
          >
            New
          </Button>
        )}
      </Paper>
    </ThemeProvider>
  );
}

export default AddUser;
