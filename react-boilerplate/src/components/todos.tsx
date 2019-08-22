import React, { useEffect } from "react";

import { observer, inject } from "mobx-react";
import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { DataStore } from "../stores/data-store";
import RightArrow from "@material-ui/icons/KeyboardArrowRight";
import AddBox from "@material-ui/icons/AddBox";

type TodosProps = {
  dataStore?: DataStore;
};

const Todos = inject("dataStore")(
  observer((props: TodosProps) => {
    let todos: any;

    useEffect(() => {
      todos = props.dataStore!.getTodos();
    }, []);

    const { dataStore } = props;

    return (
      <Container style={{ marginTop: 20 }}>
        <Grid container justify="space-between" direction="row">
          <Grid item>
            <Typography color="textSecondary" variant="h5">
              Use React with optimal performance
            </Typography>
            <Typography color="textSecondary">
              React-TypeScript boilerplate
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <RightArrow />
                </ListItemIcon>
                <ListItemText>
                  <a
                    href="https://reactjs.org/docs/hooks-intro.html"
                    style={{ color: "blue" }}
                  >
                    React hooks
                  </a>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RightArrow />
                </ListItemIcon>
                <ListItemText>
                  <a
                    href="https://mobx.js.org/intro/overview.html"
                    style={{ color: "blue" }}
                  >
                    MobX (state managament similar and newer than Redux )
                  </a>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RightArrow />
                </ListItemIcon>
                <ListItemText>
                  <a href="https://material-ui.com/" style={{ color: "blue" }}>
                    Material UI
                  </a>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RightArrow />
                </ListItemIcon>
                <ListItemText>
                  <a href="https://airbnb.io/enzyme/" style={{ color: "blue" }}>
                    Enzyme (testing)
                  </a>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <List>
            <Typography color="textSecondary" variant="h5">
              Example list of Todos gotten from fake api and manipulated with mobx:
            </Typography>
            {dataStore!.todos!.slice(1, 4).map(todo => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <AddBox />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography color="primary">
                      Title: {todo.title}{" "}
                    </Typography>
                    <Typography color="primary">
                      Status: {todo.completed}{" "}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Container>
    );
  })
);

export default Todos;
