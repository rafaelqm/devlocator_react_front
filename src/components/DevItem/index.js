import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  floatRight: {
    float: "right",
  },
}));

function DevItem({ dev, handleRemove }) {
  const classes = useStyles();
  function removerDev() {
    handleRemove(dev.github_username);
  }
  return (
    <li className="dev-item">
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no GitHub
      </a>

      <IconButton
        title="Remover"
        onClick={removerDev}
        color="secondary"
        aria-label="delete"
        className={(classes.margin, classes.floatRight)}
        size="small"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </li>
  );
}

export default DevItem;
