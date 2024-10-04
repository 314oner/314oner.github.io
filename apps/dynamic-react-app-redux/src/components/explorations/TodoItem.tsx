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
import TodoTextInput from './TodoTextInput';

export class TodoItem extends PureComponent<any, any> {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    addContact: PropTypes.func,
    deleteContact: PropTypes.func,
    editContact: PropTypes.func,
    completeContact: PropTypes.func,
  };

  state = {
    editing: false,
  };

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id: any, title: any) => {
    if (title.length === 0) {
      this.props.actions.deleteContact({ id });
    } else {
      this.props.actions.editContact({ id, title });
    }

    this.setState({ editing: false });
  };

  render() {
    const { todo } = this.props;

    let element;

    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo?.title}
          editing={this.state.editing}
          onSave={(title: any) => this.handleSave(todo.id, title)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo?.completed}
            onChange={() => this.props.actions.completeContact(todo?.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo?.title}</label>
          <button
            className="border-8 size-16 destroy"
            onClick={() => this.props.actions.deleteContact(todo?.id)}
          />
        </div>
      );
    }

    return (
      <li
        className={classnames({
          todo: true,
          completed: todo?.completed,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
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
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
