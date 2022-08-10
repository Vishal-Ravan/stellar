import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './style.css'

export default class PhoneInputGfg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phone: "" };
    }
    render() {
        return (
            <div className="dd">
                <PhoneInput
                    country={'us'}
                    // value={this.state.phone}
                    placeholder="0123456789"
                    onChange={phone => this.setState({ phone })}
                />
            </div>
        )
    }
}