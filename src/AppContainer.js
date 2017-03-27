import React, {PropTypes} from "react"

import "./index.global.css"
import "./highlight.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import GoogleAnalyticsTracker from "./components/GoogleAnalyticsTracker"

const AppContainer = (props) => (
    <GoogleAnalyticsTracker params={ props.params }>
    <Container>
        <DefaultHeadMeta />
        <Header />
        <Content>
            { props.children }
        </Content>
        <Footer />
    </Container>
    </GoogleAnalyticsTracker>
)

AppContainer.propTypes = {
    children: PropTypes.node,
    params: PropTypes.object,
}

export default AppContainer
