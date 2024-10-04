import {
  addContact,
  completeContact,
  deleteContact,
  editContact,
} from '@/store/reducers/todos/todosSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { connect } from 'react-redux';

export class TodoTextInput extends PureComponent<any, any> {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
  };

  state = {
    text: this.props.text || '',
  };

  handleSubmit = (e: any) => {
    const text = e.target.value.trim();

    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  };

  handleChange = (e: any) => {
    this.setState({ text: e.target.value });
  };

  handleBlur = (e: any) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
    this.props.onSave(e.target.value);
  };

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo,
        })}
        type="text"
        placeholder={this.props.placeholder}
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state: any) => ({
  state: state,
});
const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(
      { addContact, deleteContact, editContact, completeContact },
      dispatch,
    ),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoTextInput);
