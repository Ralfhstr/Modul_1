// const { useState } = React;
// const { render } = ReactDOM;

// function Counter() {
//     const [klik, setklik] = useState(0);

//     const increment = () => {
//         setklik(klik + 1);
//     };

//     const decrement = () => {
//         setklik(klik - 1);
//     };

//     return (
//         <div>
//             <h1>{klik.toString().padStart('0')}</h1>
//             <button onClick={decrement}>- 1</button>
//             <button onClick={increment}>+ 1</button>
//         </div>
//     );
// }

// render(<Counter />, document.getElementById('root'));

const { Component } = React;
const { render } = ReactDOM;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { klik: 0 };
    }

     // Function to increment the count
    increment = () => {
        this.setState({ klik: this.state.klik + 1 });
    };

    // Function to decrement the count
    decrement = () => {
        this.setState({ klik: this.state.klik - 1 });
    };


    render() {
        return (
            <div>
                <h1>{this.state.klik.toString().padStart('0')}</h1>
                <button onClick={this.decrement}>- 1</button>
                <button onClick={this.increment}>+ 1</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
