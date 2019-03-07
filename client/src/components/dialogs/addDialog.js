import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";

import { addNewItem } from "../../functions/apiClient";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

class AddDialog extends Component {
  state = {
    name: "",
    info: "",
    id: Date.now()
  };
  handleAddItem = () => {
    const { handleAddNewItem, handleToggleOpenAddDialog } = this.props;

    handleAddNewItem(this.state);
    addNewItem(handleAddNewItem, this.state);
    handleToggleOpenAddDialog();
    this.setState({
      name: "",
      info: "",
      id: Date.now()
    });
  };

  changeNewItem = e => {
    this.setState({ name: e.target.value });
  };
  changeNewItemInfo = e => {
    this.setState({ info: e.target.value });
  };
  render() {
    const { classes, openAdd, handleToggleOpenAddDialog } = this.props;
    return (
      <Dialog open={openAdd} onClose={this.handleCloseAdd}>
        <DialogTitle>Add a new product</DialogTitle>
        <TextField
          required
          id="outlined-required"
          label="New item"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={this.changeNewItem}
        />
        <TextField
          id="outlined"
          label="Additional info"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={this.changeNewItemInfo}
        />
        <DialogActions>
          <Button color="primary" onClick={handleToggleOpenAddDialog}>
            Cancel
          </Button>
          <Button color="primary" onClick={this.handleAddItem}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  openAdd: PropTypes.bool,
  handleToggleOpenAddDialog: PropTypes.func,
  handleAddItem: PropTypes.func
};

const mapStateToProps = state => {
  return {
    openAdd: state.openAdd,
    items: state.items,
    selected: state.selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleToggleOpenAddDialog: () => dispatch({ type: "TOGGLE_SHOW_ADD_DIALOG" }),
    handleAddNewItem: item => dispatch({ type: "ADD_ITEM", newItem: item })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddDialog));
