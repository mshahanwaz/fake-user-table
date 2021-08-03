import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  createTheme,
  Input,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { deleteUser, updateUser } from "../actions/users";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createTheme({
  palette: {
    type: "light",
  },
});

function UserTable() {
  const [user, setUser] = useState({});

  const classes = useStyles();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleEdit = (user) => {
    dispatch(updateUser(user));
    setUser(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer>
        <Table className={classes.table} aria-label="users table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">#</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Username</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Email</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Phone</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Website</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Options</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((eachUser, index) => (
              <TableRow key={eachUser.name}>
                <TableCell>{index + 1}</TableCell>
                {user && eachUser.id === user.id ? (
                  <>
                    <TableCell>
                      <Input
                        autoFocus
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={user.phone}
                        onChange={(e) =>
                          setUser({ ...user, phone: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        value={user.website}
                        onChange={(e) =>
                          setUser({ ...user, website: e.target.value })
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        className={classes.margin}
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => handleEdit(user)}
                      >
                        Done
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{eachUser.name}</TableCell>
                    <TableCell>{eachUser.username}</TableCell>
                    <TableCell>{eachUser.email}</TableCell>
                    <TableCell>{eachUser.phone}</TableCell>
                    <TableCell>{eachUser.website}</TableCell>
                    <TableCell>
                      <Button
                        className={classes.margin}
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => setUser(eachUser)}
                      >
                        Edit
                      </Button>
                      <Button
                        className={classes.margin}
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={() => handleDelete(eachUser.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default UserTable;
