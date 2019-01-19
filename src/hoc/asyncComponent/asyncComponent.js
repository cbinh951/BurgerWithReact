import React, { Component } from 'react';

//Dùng để tối ưu ứng dụng, khi nào có route trỏ tới đường dẫn sẽ load component tương ứng mà ta truyền vào
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render () {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;