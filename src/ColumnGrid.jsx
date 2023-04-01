import React from 'react';

export default class ColumnGrid extends React.Component {
    constructor(props) {
        super(props);
        this.children = this.props.children;
        this.columns = this.props.columns ? this.props.columns : 5;
    }

    render() {
        return (
            <div className={`grid min-h-screen min-w-screen grid-cols-1 lg:w-auto lg:grid-cols-${this.columns}`}>
                {this.children}
            </div>
        );
    }
}
export class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { backGroundColor = 'pureWhite', extraClasses, colSpan } = this.props;
        return (
            <div className={`bg-${backGroundColor} ${extraClasses} ${colSpan ? 'col-span-' + colSpan : ''}`.trim()}>
                {this.props.children}
            </div>
        );
    }
}
