import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { projects } from "../data/projects.data";

const HomePage: React.FC<PageProps> = () => {
    const whatICanDoContents = [
        {
            icon: "linecons-display",
            title: "Analytics Engineer (Data Engineer & Data Analyst)",
            description:
                "I work across the full data lifecycle: building and orchestrating ETL / ELT pipelines (Azure Data Factory, Databricks / PySpark, AWS), modeling raw sources into tested, documented data marts with dbt following Kimball dimensional modeling and Data Vault 2.0, and turning that data into metrics, dashboards and reports (Power BI, Tableau). I have also held data engineer, data analyst and AI research roles, and I care about data quality, reliability and owning recurring deliverables end to end.",
        },
        {
            icon: "linecons-world",
            title: "Technology Business Development & Team Management",
            description:
                "At Passgenix, a technology company, I lead a 10-member team focused on delivering innovative projects and products in areas such as blockchain, AI, mobile, web applications. At the same time, I manage a business (The Rike) specializing in international trading of more than 400 Vietnamese agricultural products. The business operates a complex remote warehousing and logistics network, successfully marketing and distributing these goods on major US platforms including Amazon, eBay, Shopify and TikTok Shop. My role involves overseeing strategy, ensuring seamless integration of technology solutions and effective market penetration, while maintaining strong team leadership and operations management.",
        },

    ];

    const latestProjectsContents = [...projects].sort((a, b) => b.endDate.getTime() - a.endDate.getTime()).slice(0, 3);

    const languagesAndFrameworksContents = [
        {
            name: "Python",
            logo: "/img/programming-languages/python-logo.png",
            link: "https://www.python.org",
        },
        {
            name: "SQL",
            logo: "/img/programming-languages/postgresql-logo.png",
            link: "https://www.postgresql.org",
        },
        {
            name: "dbt",
            logo: "/img/programming-languages/dbt.png",
            link: "https://www.getdbt.com",
        },
        {
            name: "Databricks",
            logo: "/img/programming-languages/databricks.png",
            link: "https://www.databricks.com",
        },
        {
            name: "Microsoft Azure",
            logo: "/img/programming-languages/azure.svg",
            link: "https://azure.microsoft.com",
        },
        {
            name: "Apache Airflow",
            logo: "/img/programming-languages/airflow.png",
            link: "https://airflow.apache.org",
        },
        {
            name: "Amazon Web Services",
            logo: "/img/programming-languages/Amazon_Web_Services_Logo.svg.png",
            link: "https://aws.amazon.com",
        },
        {
            name: "Google BigQuery",
            logo: "/img/programming-languages/bigquery.svg",
            link: "https://cloud.google.com/bigquery",
        },
        {
            name: "Power BI",
            logo: "/img/programming-languages/powerbi.svg",
            link: "https://powerbi.microsoft.com",
        },
        {
            name: "Tableau",
            logo: "/img/programming-languages/tableau.png",
            link: "https://www.tableau.com",
        },
        {
            name: "Git",
            logo: "/img/programming-languages/git.svg",
            link: "https://git-scm.com",
        },
        {
            name: "TensorFlow",
            logo: "/img/programming-languages/tensorflow-logo.png",
            link: "https://www.tensorflow.org",
        },
        {
            name: "AppSheet",
            logo: "/img/programming-languages/Appsheet.png",
            link: "https://cloud.google.com/appsheet",
        },
        {
            name: "SalesForce",
            logo: "/img/programming-languages/Salesforce.com_logo.svg.png",
            link: "https://www.salesforce.com/",
        },
    ];

    return (
        <PageBody>
            <div id="content" className="page-content site-content single-post" role="main">
                {/* <!-- Home Page Top Part --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12">
                        <div className="home-content">
                            <div className="row flex-v-align">
                                <div className="col-sm-12 col-md-5 col-lg-5">
                                    <div className="home-photo">
                                        <div
                                            className="hp-inner"
                                            style={{
                                                backgroundImage: "url(/img/main_photo_3.png)",
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-7 col-lg-7">
                                    <div className="home-text hp-left">
                                        <div className="owl-carousel text-rotation">
                                            <div className="item">
                                                <h4>Analytics Engineer</h4>
                                            </div>

                                            <div className="item">
                                                <h4>Data Engineer & Data Analyst</h4>
                                            </div>

                                            <div className="item">
                                                <h4>AI Researcher</h4>
                                            </div>

                                            <div className="item">
                                                <h4>Technology Business Development & Team Management</h4>
                                            </div>
                                        </div>
                                        {/* <h2>
                                        Welcome to my Portfolio!
                                         
                                        </h2> */}
                                        <h2>Nguyen Dinh Huy</h2>
                                        

                                        <div className="home-buttons">
                                            <a href="/assets/Nguyen Dinh Huy - CV.pdf" download="Nguyen Dinh Huy - CV.pdf" className="btn btn-primary">
                                                Download CV
                                            </a>
                                            
                                            <a href="/contact" target="_self" className="btn btn-secondary">
                                                Contact Me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Home Page Top Part --> */}
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title">
                            <h2>Welcome To My Portfolio!</h2>
                        </div>
                            <div className="timeline-item clearfix mb-0">
                                 <p className="item-description">
                                 I may not be the smartest, the most knowledgeable, or the most experienced in any particular field, but I am someone who is always eager to seize new opportunities and is driven by ambition. Thank you for visiting the Huy Tim Portfolio, which highlights key moments from my academic and career journey. While I may not know who you are, I'm delighted that you've stopped by to explore my profiles and stories.                                </p>

                            </div>
                    </div>

                </div>

                {/* <!-- Services --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title p-50">
                            <h2>What I Can Do</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {whatICanDoContents.slice(0, 2).map((content) => (
                        <div key={content.title} className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className={`linecons ${content.icon}`}></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>{content.title}</h4>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {whatICanDoContents.slice(2, 4).map((content) => (
                        <div key={content.title} className="col-xs-12 col-sm-6">
                            <div className="info-list-w-icon">
                                <div className="info-block-w-icon">
                                    <div className="ci-icon">
                                        <i className={`linecons ${content.icon}`}></i>
                                    </div>

                                    <div className="ci-text">
                                        <h4>{content.title}</h4>
                                        <p>{content.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <!-- /Services --> */}

                {/* <!-- Languages & Frameworks --> */}
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title p-20">
                            <h2>Languages & Frameworks</h2>
                        </div>

                        {/* <!-- Slider --> */}
                        <div id="clients_1" className="clients owl-carousel" data-mobile-items="1" data-tablet-items="3" data-items={languagesAndFrameworksContents.length}>
                            {languagesAndFrameworksContents.map((content) => (
                                <div key={content.name} className="client-block">
                                    <a href={content.link} target="_blank" title={content.name}>
                                        <img src={content.logo} alt={content.name} />
                                    </a>
                                </div>
                            ))}
                        </div>
                        {/* <!-- /Slider --> */}
                    </div>
                </div>
                {/* <!-- /Languages & Frameworks --> */}

                {/* <!-- Latest Projects --> */}
                {/* <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Latest Projects</h2>
                        </div>
                    </div>

                    {latestProjectsContents.map((content) => (
                        <div key={content.name} className=" col-xs-12 col-sm-9">
                            <a href={`/projects/${content.slug}`}>
                                <div className="project-items clearfix">
                                    <div className="project-item-logo d-none d-md-table-cell">
                                        <img src={content.clientLogo} alt="logo" />
                                    </div>
                                    <div className="project-item-content">
                                        <div className="project-item-content-logo d-md-none mb-4">
                                            <img src={content.clientLogo} alt="logo" />
                                        </div>

                                        <div className="project-item-title">
                                            <h4>{content.name}</h4>
                                        </div>

                                        <div className="project-item-description">
                                            <p>{content.description}</p>

                                            <p>
                                                <strong>Position:</strong> {content.position}
                                            </p>
                                        </div>

                                        <div className="project-item-tech-stacks">
                                            {content.techStacks.map((techStack) => (
                                                <span key={techStack}>{techStack}</span>
                                            ))}
                                        </div>

                                        <div className="project-item-date">{content.date}</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div> */}
                {/* <!-- /Latest Projects --> */}
                
            </div>
        </PageBody>
    );
};

export default HomePage;

export const Head: HeadFC = () => <PageHead />;
