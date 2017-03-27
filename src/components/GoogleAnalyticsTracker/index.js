import React, { Component, PropTypes } from "react";

import ga from "react-google-analytics";
const GoogleAnalyticsInitiailizer = ga.Initializer;

const isProduction = process.env.NODE_ENV === "production";
const isClient = typeof window !== "undefined";

class GoogleAnalyticsTracker extends Component {

    componentWillMount() {
        if (isClient) {
            const { pkg } = this.context.metadata;
            if (isProduction) {
                ga("create", pkg.googleAnalytics, "auto");
            }
            this.logPageview();
        }
    }

    logPageview() {
        if (isClient) {
            if (isProduction) {
                ga("set", "page", window.location.pathname);
                ga("send", "pageview");
            }
        }
    }

    componentWillReceiveProps(props) {
        if (props.params.splat !== this.props.params.splat) {
            this.logPageview()
        }
    }

    render() {
        return (
            <div>
                { this.props.children }
                <GoogleAnalyticsInitiailizer />
            </div>
        )
    }
}

GoogleAnalyticsTracker.propTypes = {
    children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    params: PropTypes.object.isRequired,
}

GoogleAnalyticsTracker.contextTypes = {
    metadata: PropTypes.object.isRequired,
}

export default GoogleAnalyticsTracker;