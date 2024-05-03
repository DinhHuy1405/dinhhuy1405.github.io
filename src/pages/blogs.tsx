import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { ProjectFilterCategory, projects } from "../data/projects.data";

const ProjectPage: React.FC<PageProps> = () => {
    return (
        <PageBody>
            <div className="page-title">
                <h2>Blog: Coming soon!</h2>
                <div className="page-subtitle">
                    <h4> My Diary</h4>
                </div>
              </div>

              <div id="content" className="page-content site-content single-post" role="main">

                <div className="row">
                  <div className=" col-xs-12 col-sm-12 ">

                    <div className="blog-masonry two-columns clearfix">
                      {/* <!-- Blog Post 1 --> */}
                      {/* <div className="item">
                        <div className="blog-card">
                          <div className="media-block">
                            <div className="category">
                              <a href="#" title="View all posts in WordPress">WordPress</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="./img/blog/blog_post_1.jpg" alt="How to Make a WordPress Plugin Extensible" title="" />
                              <div className="mask"></div>
                            </a>
                          </div>
                          <div className="post-info">
                            <div className="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 className="blog-item-title">How to Make a WordPress Plugin Extensible</h4>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- End of Blog Post 1 --> */}
                      
                      {/* <!-- Blog Post 2 --> */}
                      {/* <div className="item">
                        <div className="blog-card">
                          <div className="media-block">
                            <div className="category">
                              <a href="#" title="View all posts in Design">Design</a>
                            </div>

                            <a href="blog-post-1.html">
                              <img src="./img/blog/blog_post_2.jpg" alt="6 Easy Steps to Better Icon Design" title="" />
                              <div className="mask"></div>
                            </a>
                          </div>
                          <div className="post-info">
                            <div className="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 className="blog-item-title">6 Easy Steps to Better Icon Design</h4>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- End of Blog Post 2 --> */}
                      
                      {/* <!-- Blog Post 3 --> */}
                      {/* <div className="item">
                        <div className="blog-card">
                          <div className="media-block">
                            <div className="category">
                              <a href="#" title="View all posts in UI">UI</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="./img/blog/blog_post_3.jpg" alt="Creative and Innovative Navigation Designs" title="" />
                              <div className="mask"></div>
                            </a>
                          </div>
                          <div className="post-info">
                            <div className="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 className="blog-item-title">Creative and Innovative Navigation Designs</h4>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- End of Blog Post 3 --> */}

                      {/* <!-- Blog Post 4 --> */}
                      {/* <div className="item">
                        <div className="blog-card">
                          <div className="media-block">
                            <div className="category">
                              <a href="#" title="View all posts in Design">Design</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="./img/blog/blog_post_4.jpg" alt="Why I Switched to Sketch For UI Design" title="" />
                              <div className="mask"></div>
                            </a>
                          </div>
                          <div className="post-info">
                            <div className="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 className="blog-item-title">Why I Switched to Sketch For UI Design</h4>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- End of Blog Post 4 --> */}
                      
                      {/* <!-- Blog Post 5 --> */}
                      {/* <div className="item">
                        <div className="blog-card">
                          <div className="media-block">
                            <div className="category">
                              <a href="#" title="View all posts in E-Commerce">E-Commerce</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="./img/blog/blog_post_5.jpg" alt="An Overview of E-Commerce Platforms" title="" />
                              <div className="mask"></div>
                            </a>
                          </div>
                          <div className="post-info">
                            <div className="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 className="blog-item-title">An Overview of E-Commerce Platforms</h4>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- End of Blog Post 5 --> */}
                      
                      {/* <!-- Blog Post 6 --> */}
                      {/* <div className="item">
                        <div className="blog-card">
                          <div className="media-block">
                            <div className="category">
                              <a href="#" title="View all posts in E-Commerce">E-Commerce</a>
                            </div>
                            <a href="blog-post-1.html">
                              <img src="./img/blog/blog_post_6.jpg" alt="Designing the Perfect Feature Comparison Table" title="" />
                              <div className="mask"></div>
                            </a>
                          </div>
                          <div className="post-info">
                            <div className="post-date">04 Dec 2019</div>
                            <a href="blog-post-1.html">
                              <h4 className="blog-item-title">Designing the Perfect Feature Comparison Table</h4>
                            </a>
                          </div>
                        </div>
                      </div> */}
                      {/* <!-- End of Blog Post 6 --> */}
                    </div>

                    {/* <a className="btn btn-primary" href="#">See All Posts</a> */}
                  </div>
                </div>

              </div>
        </PageBody>
    );
};

export default ProjectPage;

export const Head: HeadFC = () => <PageHead title="Projects" />;
