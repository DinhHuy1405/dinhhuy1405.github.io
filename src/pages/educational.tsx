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
                <div className="page-subtitle">{/* <h4>About 2 Years of Experience</h4> */}</div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title">
                            <h2>Education</h2>
                        </div>

                        <div id="timeline_1" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-period">2018 - 2023</h5>
                                <a href="https://dut.udn.vn" target="_blank" className="item-company">
                                    Danang University of Science and Technology (DUT)
                                </a>

                                <h4 className="item-title">Water Resource Engineering</h4>
                                <p>
                                    <strong>Major:</strong> Informatic Construction
                                </p>
                                <p>Merges computer science with engineering practices, empowering to design, develop, and implement robust software systems.</p>
                                <p>Participate in many researches and contests. Learned how to build a software by combining technology and SDLC.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title">
                            <h2>Research Experiences</h2>
                        </div>

                        <div id="timeline_1" className="timeline clearfix">
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">2-2023</h5>
                                <a href="https://drive.google.com/file/d/1HFKENMTkHRCHVbvzTjZjloY3Vijtpda6/view?usp=sharing" target="_blank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, “Using AI and Blockchain in Construction," Da Nang University of Science and Technology, Da Nang City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">3-2022</h5>
                                <a href="https://drive.google.com/file/d/1JA5B-WaL-xGWidOly_IqIYHG6GkJk5kJ/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc, "Hydrology mobile application ecosystem," Da Nang University of Science and Technology, Da Nang
                                    City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">2-2022</h5>
                                <a href="https://drive.google.com/file/d/1ko7fpVG2bqOHT6Qjju_McFFVwJC0bUSm/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc, "Evaluation of Machine Learning and Deep Learning models for drought forecasting using weather data“
                                    DUT, Da Nang.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">2-2022</h5>
                                <a href="https://drive.google.com/file/d/1ko7fpVG2bqOHT6Qjju_McFFVwJC0bUSm/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc, "Build mobile application using Artificial Intelligence to forecast drought.," Water Resource
                                    Engineering Faculty, Da Nang.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">8-2021</h5>
                                <a href="https://drive.google.com/file/d/1DBtnIcQcaze-EuV0DXFTyVYp-aaWRjZ1/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.L.A.Minh, P.T.Hung, V.N.D.Phuoc, "Building mobile applications in Agriculture using Artificial Intelligence and Remote Sensing.,"
                                    DUT, Da Nang.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">12-2020</h5>
                                <a href="https://drive.google.com/file/d/1DBtnIcQcaze-EuV0DXFTyVYp-aaWRjZ1/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, N.M.Thang, P.T.Hung, V.N.D.Phuoc, N.Q.Binh, " using GIS and AI to build mobile applications to help people respond to natural
                                    disasters.," DUT, Da Nang City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">2-2020 </h5>
                                <a href="https://drive.google.com/file/d/1xWPkG5T2xZUBbexBxWlO0Gmj7BTtmX75/view?usp=sharing" target="_bank" className="item-company">
                                    N.D.Huy, V.N.D.Phuoc* , L.N.Anh, N.N.Long, V.N.Duong, "Assessment of the applicability ability of low impact development to for Flood cutting in
                                    a city in Vietnam," The international Conference on modern mechanics and applications ICOMMA 2020, Ho Chi Minh City.
                                </a>
                            </div>
                            <div className="timeline-item clearfix">
                                <h5 className="item-paper">12-2019</h5>
                                <a href="https://dut.udn.vn" target="_bank" className="item-company">
                                    N.D.Huy, V.N.D.Phuoc, "Using SWMM and GIS software to evaluate the influence of rain garden on urban drainage.," Water Resource Engineering
                                    Faculty, Da Nang.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title">
                            <h2>Honors and awards</h2>
                            <a href="https://drive.google.com/file/d/1COaI0O8MkPd6I3xXFsW4Vv8GVlvBTV4S/view" target="_blank" >
                            {" "}Certificate Links
                            </a>
                        </div>
                        <div id="timeline_2" className="col-xs-12 col-sm-12 ">
                            {/* International  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">International</h5>
                                <h4 className="item-title">International Programming Contest (2021)</h4>
                                <p>First prize of the international programming contest UAVS Hackatrix 2021 in New South Wales, Australia.</p>
                                <a href="https://vov.vn/nguoi-viet/ung-dung-ho-tro-nong-dan-trong-trong-trot-gianh-giai-nhat-cuoc-thi-uavs-hackatrix-2021-895514.vov">
                                    {" "}VOV - News{" "}
                                </a>
                                |
                                <a href="https://nhandan.vn/sinh-vien-da-nang-dat-giai-nhat-cuoc-thi-y-tuong-cong-nghe-uavs-hackatrix-2021-post668283.html"> Nhandan.com - News</a>
                                |
                                <a href="https://doanthanhnien.ctuet.edu.vn/2021/10/05/chung-ket-uavs-hackatrix-2021-hoi-tu-nhung-y-tuong-cong-nghe-dot-pha/">
                                    {" "}Doanthanhnien - News{" "}
                                </a>
                                |
                                <a href="https://www.udn.vn/bankhcnmt/tin-tuc/sinh-vien-dai-hoc-da-nang-dat-quan-quan-cuoc-thi-y-tuong-cong-nghe-uavs-hackatrix-2021-voi-ung-dung-ho-tro-nong-dan-trong-trot">
                                    {" "}Daihocdanang - News{" "}
                                </a>
                                |
                                <a href="https://www.vietnamplus.vn/sinh-vien-viet-o-australia-hien-ke-thuc-day-phat-trien-cong-nghiep-post744756.vnp"> Vietnamplus - News</a>
                                |
                                <a href="https://thanhgiong.vn/chung-ket-uavs-hackatrix-2021-ung-dung-ho-tro-nong-dan-trong-trong-trot-cua-sinh-vien-da-nang-gianh-giai-nhat-45825.html">
                                    {" "}ThanhGiong - News{" "}
                                </a>
                                |
                                <a href="https://svvn.tienphong.vn/phan-mem-ho-tro-nong-dan-cua-ba-sinh-vien-dh-da-nang-post1384067.tpo"> TienPhong - News</a>
                                |
                                <a href="https://www.google.com/search?q=UAVS+Hackatrix+2021&oq=UAVS+Hackatrix+2021&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhBMgYIAhBFGEHSAQg4Mjg4ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1">
                                    {" "}See more...
                                </a>
                            </div>
                            {/* National  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">National</h5>
                                <h4 className="item-title">Vietnam AI and Blockchain Programming Contest (2023)</h4>
                                <p>Consolation prize of Vietnam AI and Blockchain Programming Contest 2023 - Oraichain Hackathon.</p>
                                <a href="https://doanthanhnien.vn/tin-tuc/tuoi-tre-sang-tao/tong-ket-trao-giai-cuoc-thi-%E2%80%9Coraichain-hackathon%E2%80%9D-nam-2023">
                                    {" "}Doanthanhnien{" "}
                                </a>
                                |
                                <a href="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0nwdwCe9ggq6yBdiBQrpDC6AyMh4NMqGeEqVTidqc753raFjnQh6jTXrk8AJL1Nkzl%26id%3D100010185792295&show_text=true&width=500&is_preview=true%22%20width%3D%22500%22%20height%3D%220%22%20style%3D%22border%3Anone%3Boverflow%3Ahidden%22%20scrolling%3D%22no%22%20frameborder%3D%220%22%20allowfullscreen%3D%22true%22%20allow%3D%22autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20picture-in-picture%3B%20web-share">
                                    {" "}Facebookshare - News{" "}
                                </a>
                                <h4 className="item-title">National Scientific Research (2022)</h4>
                                <p>Consolation of National Scientific Research Award 2021 – 2022.</p>
                            </div>
                            {/* City  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang City</h5>
                                <h4 className="item-title">Da Nang Startup Runway competition (2021)</h4>
                                <p>First prize of the Da Nang Startup Runway competition 2021.</p>
                                <a href="http://due.udn.vn/en-us/news/newsdetail/id/14143">
                                    {" "}
                                    due.udn.vn
                                </a>
                                | 
                                <a href="https://tuoitredhdn.udn.vn/doan-dai-hoc-da-nang/co-so-doan-thanh-vien/truong-dai-hoc-kinh-te-dhdn-to-chuc-thanh-cong-chung-ket-startup-runway-2021-nhieu-y-tuong-khoi-nghiep-duoc-ho-tro-de-ung-dung-thuc-tien-1672.html">
                                    {" "}tuoitredhdn{" "}
                                </a>
                                <h4 className="item-title">Da Nang Science Research Student (2021)</h4>
                                <p>Consolation Prize of Da Nang Science Research Student 2021.</p>
                                <a href="hhttps://en.dut.udn.vn/results-of-the-selection-of-topics-for-the-final-round-of-the-student-scientific-research-contest-in-danang-city-in-2021-70.html">
                                    {" "}dut.udn{" "}
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className=" col-xs-12 col-sm-6 ">
                        <div className="block-title" style={{opacity: 0}}>
                            <h2>xxxx</h2>
                        </div>
                        <div id="timeline_2" className="col-xs-12 col-sm-12 ">
                            {/* Da Nang University  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang University</h5>
                                <h4 className="item-title">Technology Innovation Startup Competition (2021)</h4>
                                <p>Second prize in the Technology Innovation Startup Competition at the University of Danang in 2021.</p>
                                <a href="https://www.udn.vn/english/Detail/the-final-round-of-innovative-technology-entrepreneurship-the-university-of-danang-2021-contest-spreading-the-spirit-of-innovation-40">
                                    {" "}udn.vn
                                </a>
                                <h4 className="item-title">Students Scientific Research (2021, 2022)</h4>
                                <p>Two Final awards for students Scientific Research at the University of Danang 2020 – 2021 and 2021 – 2022.</p>
                            </div>
                            {/* DUT  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Da Nang University of Science and Technology</h5>
                                <h4 className="item-title">Scientific Research and Technology Exhibition BK-TechShow (2020, 2021, 2022)</h4>
                                <p>One Best Presentation Second Prize, Two Technical Second Prizes, and One Technical Third Prize were awarded in the student competition for Danang University of Science and Technology's scientific research and technology exhibition BK-TechShow from 2020 to 2022.</p>
                                <a href="https://danang.gov.vn/chinh-quyen/chi-tiet?id=51607&_c=3,9,33">
                                    {" "}danang.gov.vn{" "}
                                </a>
                                |
                                <a href="https://dantri.com.vn/giao-duc/sinh-vien-gay-an-tuong-voi-ung-dung-giup-ung-pho-ngap-lut-do-thi-20221218131014061.htm">
                                    {" "}dantri{" "}
                                </a>
                                <h4 className="item-title">Hult Prize (2021)</h4>
                                <p>Second prize in the Hult Prize startup competition at DUT 2021.</p>
                                <a href="https://baodanang.vn/english/education-science/202101/hult-prize-at-dut-useful-startup-playground-for-students-3875737/">
                                    {" "}baodanang{" "}
                                </a>
                            </div>
                            {/* Faculty  */}
                            <div className="timeline-item clearfix">
                                <h5 className="item-period current">Faculty of Water Resource Engineering </h5>
                                <h4 className="item-title">Student Science Research Competition (2019, 2020, 2021, 2022, 2023)</h4>
                                <p>One First Prize, Two Second prizes and Two Technical Prizes at faculty level of student Science Research competition at Danang University of Science and Technology in from 2020 – 2022.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Language & Efficiency</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-6 ">
                        <a href="/img/resume/" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/ielts-logo-du-hoc-glolink-3.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h3>IELTS </h3>
                                    </div>

                                    <div className="certi-id">
                                        <span>Valid until 27 February 2026</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>27 February 2024</span>
                                    </div>

                                    <div className="certi-company">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className=" col-xs-12 col-sm-6 ">
                        <a href="/img/resume/" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/GRE_logo.svg.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h3>GRE</h3>
                                    </div>

                                    <div className="certi-id">
                                        <span>Valid until 27 February 2026</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>27 February 2024</span>
                                    </div>

                                    <div className="certi-company">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="row">
                    <div className=" col-xs-12 col-sm-12 ">
                        <div className="block-title p-20">
                            <h2>Certificates</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/blockchain-basic-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Blockchain Basic</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX220347SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>19 January 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/smart-contract-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Smart Contract</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX220924SC</span>
                                    </div>
                                    <div className="certi-date">
                                        <span>02 March 2022</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className=" col-xs-12 col-sm-6">
                        <a href="/img/resume/decentralized-application-development-certificate.jpg" className="lightbox">
                            <div className="certificate-item clearfix">
                                <div className="certi-logo">
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Decentralized Application Development</h4>
                                    </div>

                                    <div className="certi-id">
                                        <span>Reference: FX222515SC</span>
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
                                    <img src="/img/resume/funix-logo.png" alt="logo" />
                                </div>

                                <div className="certi-content">
                                    <div className="certi-title">
                                        <h4>Blockchain Platforms</h4>
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
                </div> */}

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
