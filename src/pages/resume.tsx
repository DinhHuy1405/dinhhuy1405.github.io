import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
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
            name: "HTML / CSS",
            level: "advanced",
        },
        {
            name: "JavaScript",
            level: "advanced",
        },
        {
            name: "ReactJS / NextJS / GastbyJS",
            level: "advanced",
        },
        {
            name: "Smart Contract / D-App",
            level: "advanced",
        },
        {
            name: "Python",
            level: "advanced",
        },
        {
            name: "Tensorflow",
            level: "intermediate",
        },
        {
            name: "System Architecture",
            level: "intermediate",
        },
        {
            name: "Database Design",
            level: "intermediate",
        },
        {
            name: "Data Analysis",
            level: "intermediate",
        },
        {
            name: "C#",
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
            name: "UI/UX Design",
            level: "advanced",
            tooltip: "Can design a website, mobile app, etc.",
        },
        {
            name: "Graphic Design",
            level: "intermediate",
            tooltip: "Can design a logo, poster, banner, etc.",
        },
        {
            name: "Problem Solving",
            level: "advanced",
            tooltip: "Give idea & solve problems quickly",
        },
        {
            name: "Teamwork",
            level: "intermediate",
            tooltip: "Work well with 3-5 people in a team",
        },
        {
            name: "Communication",
            level: "intermediate",
            tooltip: "Can communicate in English and Vietnamese",
        },
    ];

    return (
        <PageBody>
            <div className="page-title">
                <h1>Nguyen Dinh Huy</h1>
                <div className="page-subtitle">
                    <h4>About 2 Years of Experience</h4>
                </div>
            </div>
            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Experiences - Unofficial/Freelance</h2>
                        </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - Current</h5>
                                <a href="https://passgenix.com">
                                     | Passgenix Solutions
                                </a>
                                <h4 className="item-title">Co-founder & Technology Business Development and Team Management</h4>
                                <p>
                                    <strong>Strong Developer Team:</strong> Work closely with our developers and designers to translate creative vision into robust technical
                                    solutions. Strive to push boundaries and develop products that make a real impact.
                                </p>
                                <p>
                                    <strong>Follow Trend Technology:</strong> Guide the technical direction to ensure that our products are built with the latest technologies and
                                    best practices. Maintain the highest quality standards in our technological infrastructure and product development.
                                </p>
                                <p>
                                    Gained experience to leverage a deep understanding of the industry and its challenges. Constantly seeking innovative ways to advance our
                                    technology and its potential and using technology to solve real-world problems.
                                </p>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2023 - Current</h5>
                                <a href="https://therike.com" >
                                    | The Rike
                                </a>
                                <h4 className="item-title">Co-founder & Technology Business Development and Team Management</h4>
                                <p>
                                    <strong>Strong Developer Team:</strong> Work closely with our developers and designers to translate creative vision into robust technical
                                    solutions. Strive to push boundaries and develop products that make a real impact.
                                </p>
                                <p>
                                    <strong>Follow Trend Technology:</strong> Guide the technical direction to ensure that our products are built with the latest technologies and
                                    best practices. Maintain the highest quality standards in our technological infrastructure and product development.
                                </p>
                                <p>
                                    Gained experience to leverage a deep understanding of the industry and its challenges. Constantly seeking innovative ways to advance our
                                    technology and its potential and using technology to solve real-world problems.
                                </p>
                            </div>
                    </div>

                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Experiences - Official</h2>
                        </div>
                        <div id="timeline_2" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">2022 - Current</h5>

                                <a href="https://www.datahouse.com" >
                                    | Data House
                                </a>
                                <h4 className="item-title">Full-Stack Data Engineer</h4>
                                <p>
                                    <strong>Data Engineer:</strong> Reliable data flows, infrastructure, pipelines, ETL, structured and unstructured data storage. Ability to combine and build applications linked to Data.
                                </p>
                                <p>
                                    <strong>Data Analyst</strong> retrieve relevant data from various sources and prepare it for further analysis. Based on the analysis, a data analyst needs to draw conclusions and complete reports and illustrations.
                                </p>
                                <p>
                                    <strong>Data Scientist</strong> statistical, econometric, and machine learning techniques to extract insights from data, enabling informed decision-making and strategic business development.
                                </p>
                            </div>
{/* 
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2022 - Current</h5>
                                <a href="https://passgenix.com" target="_blank" className="item-company">
                                    Passgenix Solutions
                                </a>
                                <h4 className="item-title">Co-founder & Technology Business Development and Team Management</h4>
                                <p>
                                    <strong>Strong Developer Team:</strong> Work closely with our developers and designers to translate creative vision into robust technical
                                    solutions. Strive to push boundaries and develop products that make a real impact.
                                </p>
                                <p>
                                    <strong>Follow Trend Technology:</strong> Guide the technical direction to ensure that our products are built with the latest technologies and
                                    best practices. Maintain the highest quality standards in our technological infrastructure and product development.
                                </p>
                                <p>
                                    Gained experience to leverage a deep understanding of the industry and its challenges. Constantly seeking innovative ways to advance our
                                    technology and its potential and using technology to solve real-world problems.
                                </p>
                            </div> */}

                            {/* <div className="timeline-item clearfix">
                                <h5 className="item-period">2020 - 2023</h5>
                                <a href="https://dut.udn.vn/khoacntt" target="_blank" className="item-company">
                                    Information Technology Faculty - DUT
                                </a>
                                <h4 className="item-title">Researcher</h4>
                                <p>Motivated to explore the intersection of computer vision (CV) with AI in agriculture, GIS and remote sensing.</p>
                                <p>
                                    Driven by the potential to leverage CV techniques to analyze vast datasets from satellites and drones, ultimately contributing to more
                                    sustainable and productive farming practices.
                                </p>
                                <p>
                                    Developed innovative applications addressing farming issues and built a agricultural startup. Acquired several noteworthy certificates and
                                    awards.
                                </p>
                            </div> */}
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
                        <a href="/img/resume/blockchain-platforms-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/Salesforce.com_logo.svg.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Salesforce Certified Platform Developer 1</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX223000SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>16 June 2022</span>
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