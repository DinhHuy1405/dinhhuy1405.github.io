import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { useState } from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { upperCaseFirstLetter } from "../utilities/text.util";
import cls from "classnames";

const ResumePage: React.FC<PageProps> = () => {
    const codingSkillInfos = {
        beginner: {
            level: 1,
            tooltip: "Know the basics, but not much experience",
        },
        intermediate: {
            level: 2,
            tooltip: "Have some experience, easily with common tasks",
        },
        advanced: {
            level: 3,
            tooltip: "Familiar with libraries and frameworks, can work independently",
        },
    };

    const codingSkillsContents: {
        name: string;
        level: keyof typeof codingSkillInfos;
    }[] = [
        {
            name: "AppSheet",
            level: "advanced",
        },
        {
            name: "Excel",
            level: "intermediate",
        },
        {
            name: "HTML / CSS",
            level: "intermediate",
        },
        {
            name: "JavaScript",
            level: "intermediate",
        },
        {
            name: "Python",
            level: "intermediate",
        },

        {
            name: "SQL",
            level: "intermediate",
        },
        {
            name: "Quicksight",
            level: "intermediate",
        },
        {
            name: "Tensorflow",
            level: "intermediate",
        },
        {
            name: "Salesforce",
            level: "intermediate",
        },
        {
            name: "System Architecture",
            level: "beginner",
        },
        {
            name: "Database Design",
            level: "beginner",
        },
        {
            name: "AWS",
            level: "beginner",
        },
    ];

    const otherSkillInfos = {
        beginner: {
            level: 1,
        },
        intermediate: {
            level: 2,
        },
        advanced: {
            level: 3,
        },
    };

    const otherSkillsContents: {
        name: string;
        level: keyof typeof otherSkillInfos;
        tooltip: string;
    }[] = [
                {
            name: "Problem Solving",
            level: "advanced",
            tooltip: "Give idea & solve problems quickly",
        },
        {
            name: "Teamwork",
            level: "advanced",
            tooltip: "Work well with over 20 people in a team or multiple teams.",
        },
        {
            name: "Time Management",
            level: "advanced",
            tooltip: "Understanding about planning, alocate time effectively, time estimation, time techniques",
        },
        {
            name: "Team Management",
            level: "intermediate",
            tooltip: "Able to handle and coordinate personnel, divide tasks and predict the abilities of each member.",
        },
        {
            name: "Business Development",
            level: "intermediate",
            tooltip: "Build and launch long-term strategies such as developing relationships within the direction of the business.",
        },
        {
            name: "Graphic Design",
            level: "intermediate",
            tooltip: "Can design a logo, poster, banner, etc.",
        },
        {
            name: "Communication",
            level: "intermediate",
            tooltip: "Can communicate in English and Vietnamese",
        },
    ];
    // Example state added for "The Rike"
    const [showSeeLessSeeMore_TheRike, setshowSeeLessSeeMore_TheRike] = useState(false);

    const toggleshowSeeLessSeeMore_TheRike = () => {
        setshowSeeLessSeeMore_TheRike(!showSeeLessSeeMore_TheRike);
    };
        // Example state added for "The Rike"
        const [showSeeLessSeeMore_Passgenix, setshowSeeLessSeeMore_Passgenix] = useState(false);

        const toggleshowSeeLessSeeMore_Passgenix = () => {
            setshowSeeLessSeeMore_Passgenix(!showSeeLessSeeMore_Passgenix);
        };
            // Example state added for "The Rike"
    const [showSeeLessSeeMore_DataHouse, setshowSeeLessSeeMore_DataHouse] = useState(false);

    const toggleshowSeeLessSeeMore_DataHouse = () => {
        setshowSeeLessSeeMore_DataHouse(!showSeeLessSeeMore_DataHouse);
    };

    return (
        <PageBody>
            <div className="page-title">
                <h1>Nguyen Dinh Huy</h1>
                <div className="page-subtitle"></div><a> </a>
                <div className="page-subtitle">
                    <a>This is a page documenting my current and future career journey. Over the past 2 years, I have participated in many roles and held many positions in businesses and projects. Hope it can help you understand me better.</a>
                </div>
            </div>
            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Experiences</h2>
                        </div>
                            {/* Passgenix */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - Current</h5>
                                <a href="https://passgenix.com">
                                     {" "}Passgenix
                                </a>
                                <h4 className="item-title">Co-founder & Team Management</h4>
                                <p className="item-description">
                                My friends and I have been collaborating on various projects since our student days, engaging in diverse technology projects to help businesses and customers implement innovative products in AI, Blockchain, Web, and App development. Recognizing our capabilities and professional expertise in technology deployment, we founded Passgenix. Though structured as a company, we see ourselves more as a dynamic technology team committed to continuous learning and development. In this team, I play multiple roles, including customer acquisition, strategic planning, human resource coordination, launching new technology ideas, and handling various other operational duties.                                </p>
                                {showSeeLessSeeMore_Passgenix && ( <>
                                <p className="item-description">
                                <strong>AI Engineer:</strong> 
                                </p>
                                <p className="item-description">
                                I have been conducting research and development on machine learning and deep learning models for a variety of applications, including drought prediction, flood forecasting, image recognition, and large language models.
                                </p>
                                
                                <p className="item-description">
                                <strong>Project Manager:</strong> 
                                </p>
                                                                
                                <p className="item-description">
                                I oversee detailed weekly planning for each team member, considering individual work preferences and customer requirements to ensure optimal personnel coordination and timely product release. Team members have the flexibility to work in the evenings, and I assign specific hours and tasks based on their capacity to deliver the products efficiently.
                                </p>
                                </>)}  
                                <button onClick={toggleshowSeeLessSeeMore_Passgenix} className="see-more-btn">
                                    {showSeeLessSeeMore_Passgenix ? 'See Less' : 'See More'}
                                </button>
                            </div>
                            {/* The Rike - modified section */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2023 - Mar 2024</h5>
                                <a href="https://therike.com">The Rike</a>
                                <h4 className="item-title">Co-founder & Technology Business Development</h4>
                                <p className="item-description">
                                The Rike is a company specializing in supplying a variety of Vietnamese farmers tea seeds to the US market with a staff of over 20 people stretching from North to South, Vietnam and warehouse headquarters located in the states. Illinois, Virginia, .... of America. I joined the team in early 2023 as the technology team leader, realized the company's problems and with my vision was appointed to the position of manager and co-founder of the company. , the jobs I have done.                                </p>
                                {showSeeLessSeeMore_TheRike && ( <>
                                    <p className="item-description">
                                    <strong>Divide the company into specific departments:</strong> Purchasing team, sales team, technology team, accounting team, marketing team, shipping team.
                                    </p>
                                    <p className="item-description">
                                    <strong>Purchasing team:</strong> I implemented building a crawl data system from Amazon and Ebay, analyzed and predicted potential products, developed an app for the purchasing team to synchronize agricultural product forecasting, purchasing and Directly transferred to warehouses in the South.                                    </p>
                                    <p className="item-description">
                                    <strong>Technology team:</strong> building a company-wide synchronization system, employee management app, purchasing app, inventory app, order organization system and product sales on Ebay, Amazon, Shopify, Ebid platforms ,....</p>
                                    <p className="item-description">
                                    <strong>Sales and marketing team:</strong> analyze product listing formulas on competitors' e-commerce platforms, reorganize product listings with more than 600 products of all types.</p>
                                    <p className="item-description">
                                    <strong>Accounting team:</strong> set up budget for each team, classify debts and profit and expenses from the exchanges.</p>
                                    <p className="item-description">
                                    <strong>Shipping team:</strong> synchronize warehouses with shipped orders and organize data throughout the system</p>
                                
                                </>)}
                                <button onClick={toggleshowSeeLessSeeMore_TheRike} className="see-more-btn">
                                    {showSeeLessSeeMore_TheRike ? 'See Less' : 'See More'}
                                </button>
                            </div>
                    </div>
                    {/* Experiences - Official */}
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Experiences - Official</h2>
                        </div>
                        <div id="timeline_2" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">2022 - Current</h5>

                                <a href="https://www.datahouse.com" >
                                    {" "}DataHouse
                                </a>
                                <h4 className="item-title">SalesForce Developer</h4>
                                <p className="item-description">
                                I have been interning for a Salesforce developer position since June 2022 and participated in a SalesForce project related to the government tax sector... and joined Data MigrationTeam before transitioning to the position new.</p>
                                <h4 className="item-title">Data Engineer </h4>
                                <p className="item-description">
                                    After more than 1 year as a Salesforce developer, I joined Data House's Data Team as a data engineer and have implemented many different projects with: </p>
                                {/* Data Engineer */}
                                {/* {showSeeLessSeeMore_DataHouse && ( <> */}
                                <p className="item-description">
                                    <strong>Data Engineer:</strong> 
                                </p>
                                <p className="item-description">
                                    (1) Leveraging my knowledge of Salesforce, I queried the API and developed a series of data querying algorithms that integrate with Salesforce’s fields, objects, and structural framework. Additionally, I have crafted and deployed back-end code using Python, which has culminated in the creation of a tool designed to automate testing for Salesforce project.
                                </p>
                                <p className="item-description">
                                    (2) Store the company's CVs on AWS and develop code locally to extract data from these raw CVs. Starting with an initial dataset, we create a dynamic set of data that is regularly updated and refined based on Word documents.....
                                </p>
                                {/* Data Analyst */}
                                <p className="item-description">
                                    <strong>Data Analyst :</strong> 
                                </p>
                                <p className="item-description">
                                    (1) I am involved in a project that entails building dashboards using AWS Quicksight. My role includes processing and performing calculations on raw data, as well as designing and executing additional tasks according to business requirements.
                                </p>
                                {/* Data Scientist */}
                                <p className="item-description">
                                    <strong>Data Scientist : </strong> 
                                </p>
                                <p className="item-description">
                                    (1) I involved in a project that utilizes AWS Machine Learning Model to develop a Fraud Detector designed to pinpoint fraudulent transactions. Additionally, I author test cases based on S3 configurations and boto3.
                                </p>
                                <p className="item-description">
                                    (2) I have deployed the Google LLM model API to execute various tasks as per the team's requirements.
                                </p>
                                {/* </>)}  
                                <button onClick={toggleshowSeeLessSeeMore_DataHouse} className="see-more-btn">
                                    {showSeeLessSeeMore_DataHouse ? 'See Less' : 'See More'}
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Certificates</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/Screenshot 2024-04-28 at 01.02.08.png" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Machine Learning</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX222588SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>25/05/2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/Data for Everyone.png" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/logo-200.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Data Analyst</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Data for Everyone Course</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>02/03/2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/Google Data Analytics.png" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/Google_2015_logo.svg.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Google Data Analytics</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: RDRXKYXGJBU6</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>21 May 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/1681531083468.jpeg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/Salesforce.com_logo.svg.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Salesforce Certified Platform Developer 1</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: 3216941</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>April 2023</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="p-40"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Coding Skills</h2>
                        </div>

                        <div className="skills-info skills-first-style">
                            {codingSkillsContents.map((skill, index) => {
                                const skillInfo = codingSkillInfos[skill.level];
                                return (
                                    <div key={index} className="clearfix">
                                        <h4>{skill.name}</h4>
                                        <div className="skill-value" data-bs-toggle="tooltip" data-bs-title={skillInfo.tooltip} data-bs-placement="right">
                                            <span className="d-none d-md-block">{upperCaseFirstLetter(skill.level)}</span>
                                            <div className="skill-level">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={index} className={cls("level-item", skillInfo.level >= i + 1 && `level-${i + 1}`)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <div className="block-title">
                            <h2>Other Skills</h2>
                        </div>

                        <div className="skills-info skills-first-style">
                            {otherSkillsContents.map((skill, index) => {
                                const skillInfo = otherSkillInfos[skill.level];
                                return (
                                    <div key={index} className="clearfix">
                                        <h4>{skill.name}</h4>
                                        <div className="skill-value" data-bs-toggle="tooltip" data-bs-title={skill.tooltip} data-bs-placement="right">
                                            <span className="d-none d-md-block">{upperCaseFirstLetter(skill.level)}</span>
                                            <div className="skill-level">
                                                {[...Array(3)].map((_, i) => (
                                                    <div key={index} className={cls("level-item", skillInfo.level >= i + 1 && `level-${i + 1}`)}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </PageBody>
    );
};

export default ResumePage;

export const Head: HeadFC = () => <PageHead title="CV" />;
