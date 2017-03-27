import React, {PropTypes} from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"
import ReactDisqusThread from "react-disqus-thread"

import styles from "./index.css"

const isClient = typeof window !== "undefined";


const Post = (props) => {
    // it's up to you to choose what to do with this layout ;)
    const pageDate = props.head.date ? new Date(props.head.date) : null

    return (
        <Page
            { ...props }
            header={
                <div>
                    <header className={ styles.header }>
                        {
                            pageDate &&
                            <time key={ pageDate.toISOString() }>
                                { pageDate.toDateString() }
                            </time>
                        }
                    </header>
                </div>
            }
        >
            {
                isClient &&
                <ReactDisqusThread
                    shortname="https-slashgear-github-io"
                    identifier={window.location.pathname}
                    url={window.location.href}/>
            }
            <hr />
            <LatestPosts />
        </Page>
    )
}

Post.propTypes = {
    head: PropTypes.object.isRequired,
}

export default Post
