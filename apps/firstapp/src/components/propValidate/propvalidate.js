import React from 'react';
import PropTypes from 'prop-types'
import propTypes from 'prop-types';
class PropValidation extends React.Component {

    render() {
        return (<div>
            <div>
             Arry:   {this.props.numArray[0]}<br />
             String:   {this.props.name}<br />
             Function:   {this.props.propfun(10)}<br />
             Number:   {this.props.propNum}<br />
            </div>
        </div>)
    }
}
PropValidation.propTypes = {
    numArray: PropTypes.array.isRequired,
    name: PropTypes.string,
    propBool: propTypes.bool,
    propfun: propTypes.func,
    propNum: propTypes.number
}
PropValidation.defaultProps = {
    numArray: [1, 2, 3],
    name: "jithin",
    propBool: false,
    propfun: function (parm) { return parm * 10 },
    propNum: 10

}
export default PropValidation

