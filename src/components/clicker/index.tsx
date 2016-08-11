import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { click, IClickAction, IClickActionTrigger } from '../../redux/clicker';

function mapStateToProps(state : any) {
  return { clicker: state.clicker };
}

function mapDispatchToProps(dispatch : Dispatch<IClickAction>) {
  return bindActionCreators({ click }, dispatch);
}

interface ClickerProps {
  clicker?: number;
  click?: IClickActionTrigger;
}

class ClickerImpl extends React.Component<ClickerProps, void> {
  refs: {
    [key: string]: (Element);
    incInput: (HTMLInputElement);
  };

  render() {
    return (
      <div className="main">
        <span className="clicker">{ this.props.clicker } +</span>
        <input className="input"
               ref={(input) => this.refs.incInput = input}
               type="text"
               defaultValue="1"
        />

        <button onClick={ () => {
          const inputValue = this.refs.incInput.value.trim();
          this.props.click(parseInt(inputValue, 10));
        }}
        >
          Modify the counter!
        </button>
      </div>
    );
  }
}

const Clicker = connect<ClickerProps, ClickerProps, any>(mapStateToProps, mapDispatchToProps)(ClickerImpl);
export default Clicker;

