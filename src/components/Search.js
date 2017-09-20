import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input
                        className="input is-large"
                        onKeyUp={this.keyUp.bind(this)}
                        ref={input => this.input = input}
                        placeholder="Enter flight no." />
                </div>
                <div className="control">
                    <button className="button is-large"
                        onClick={() => this.props.onSearch(this.input.value)}>Search</button>
                </div>
            </div>
        );
    }

    keyUp(e) {
        if(e.keyCode === 13) {
            this.props.onSearch(this.input.value);
        }
    }
}

export default Search;
