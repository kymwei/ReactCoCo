import React from 'react';
import ReactDOM from 'react-dom';


export default class ReadingTime extends React.Component {
    static propTypes = {
        wordsPerMinute: React.PropTypes.number
    };

    static defaultProps = {
        wordsPerMinute: 270
    };

    constructor(props) {
        super(props);

        this.state = {
            readTime: 0
        };
    }

    render() {
        return (
            <div>Hello ReadingTime!</div>
        );
    }
}
