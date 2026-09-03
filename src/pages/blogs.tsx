import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";

const MEDIUM_URL = "https://medium.com/@HuyTimBlog";

const BlogPage: React.FC<PageProps> = () => {
    React.useEffect(() => {
        // Send visitors straight to the Medium blog.
        window.location.replace(MEDIUM_URL);
    }, []);

    return (
        <PageBody>
            <div className="page-title">
                <h2>Blog</h2>
                <div className="page-subtitle">
                    <h4>My writing lives on Medium</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="timeline-item clearfix">
                            <p className="item-description">
                                Redirecting you to my Medium blog&hellip; If nothing happens,{" "}
                                <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
                                    open it here
                                </a>
                                .
                            </p>
                        </div>
                        <div className="home-buttons">
                            <a href={MEDIUM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Read on Medium
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default BlogPage;

export const Head: HeadFC = () => <PageHead title="Blog" />;
