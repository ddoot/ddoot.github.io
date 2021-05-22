import React from 'react';

class SkillBar extends React.Component {
    constructor(props) {
        super(props);
        this.cbarRef = React.createRef();
        this.smallRef = React.createRef();
    }

    componentDidMount() {
        const circle = this.cbarRef.current;
        const r = circle.r.baseVal.value;
        const c = Math.PI * (r * 2);
        const percent = this.props.percent;
        const cbar = (100 - percent) / 100 * c;

        this.cbarRef.current.animate(
            [{ strokeDashoffset: 0 }, { strokeDashoffset: cbar }], { duration: 1000, easing: 'linear' }
        );

        this.cbarRef.current.style.strokeDashoffset = c;
        this.cbarRef.current.style.strokeDasharray = c;

        this.cbarRef.current.style.transitionDuration = '0.3s';
    }

    render() {
        return (
            <li>
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45"></circle>
                    <circle className="cbar" cx="50" cy="50" r="45" ref={this.cbarRef}></circle>
                    <span>{this.props.name}</span>
                    <small ref={this.smallRef}>{`${this.props.percent}%`}</small>
                </svg>
            </li>
        );
    }
}

export default SkillBar;