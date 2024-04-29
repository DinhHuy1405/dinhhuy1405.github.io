import { randomImgUrl } from "../utilities/text.util";

export enum ProjectFilterCategory {
    ALL = "project_all",
    PERSONAL = "project_personal",
    THERIKE = "project_therike",
    PASSGENIX_SOLUTIONS = "project_passgenix_solutions",
    DATAHOUSE = "project_DATAHOUSE",
    WEB_DEVELOPMENT = "project_web_development",
    MOBILE_DEVELOPMENT = "project_mobile_development",
    AI_AND_ML = "project_ai_and_ml",
    DATA_ANALYZING = "project_data_analyzing",
    BLOCKCHAIN = "project_blockchain",
}

export type Project = {
    name: string;
    filterCategories: ProjectFilterCategory[];
    description: string;
    clientLogo: string;
    thumbnail: string;
    position: string;
    techStacks: string[];
    slug: string;
    date: string;
    endDate: Date;
    imageUrl?: string;
    website?: string;
    github?: string;
    youtube?: string;
};

export const projects: Project[] = [
    {
        name: "Team project: Ancv - WREF",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.MOBILE_DEVELOPMENT, ProjectFilterCategory.AI_AND_ML],
        description: "An agricultural mobile application ecosystem that provides free mobile applications to farmers as well as the agricultural service industry in Vietnam.",
        clientLogo: "/img/clients/ancv-wref.png",
        thumbnail: "/img/projects/ancv-wref/thumbnail.jpg",
        position: "Co-Founder, Mobile developer, AI developer",
        techStacks: ["Java", "Kotlin (Mobile)", "TensorFlow + Keras (LSTM, CNN)", "Open Weather (Weather Realtime Database)", "NodeJS (BE)", "MongoDB"],
        slug: "ancv-wref",
        date: "Jun.2019 – Mar.2022",
        endDate: new Date("2022-03-01"),
        github: "https://github.com/nmthangdn2000/AnCv_SF_UH21",
        youtube: "https://www.youtube.com/embed/zXK2wpIHI8c?si=k58zhu1AhBI3kdvv",
    },
    {
        name: "Drought Prediction Application",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.AI_AND_ML, ProjectFilterCategory.DATA_ANALYZING],
        description: "Research and build a mobile application to solve the drought problem in agricultural field.",
        thumbnail: "/img/projects/drought-prediction-application/thumbnail.jpg",
        clientLogo: "/img/clients/my-project.png",
        position: "Mobile developer, AI developer",
        techStacks: ["React Native (Mobile)", "Open Weather (Weather Realtime Database)", "TensorFlow + Keras (LSTM, CNN)", "NodeJS (BE)", "MongoDB"],
        slug: "drought-prediction-application",
        date: "Mar.2022 – Jun.2022",
        endDate: new Date("2022-06-01"),
        youtube: "https://www.youtube.com/embed/g4Lg2CxrGIw?si=f2GN3CRgd8wFP7p0",
    },
    {
        name: "Flood Detection Application",
        filterCategories: [
            ProjectFilterCategory.ALL,
            ProjectFilterCategory.PERSONAL,
            ProjectFilterCategory.MOBILE_DEVELOPMENT,
            ProjectFilterCategory.AI_AND_ML,
            ProjectFilterCategory.DATA_ANALYZING,
        ],
        description: "Research and build a mobile application to solve the flood problem in city area.",
        thumbnail: "/img/projects/flood-detection-application/thumbnail.jpg",
        clientLogo: "/img/clients/my-project.png",
        position: "Mobile developer, AI developer",
        techStacks: ["React Native (Mobile)", "Google Earth Engine (Remote Sensing Realtime Database)", "NodeJS (BE)", "MongoDB"],
        slug: "flood-detection-application",
        date: "Mar.2022 – Jun.2022",
        endDate: new Date("2022-06-01"),
        github: "https://github.com/nabatti99/CanhBaoNgapLut",
        website: "https://dut.udn.vn/wref/gioithieu/id/3791",
        youtube: "https://www.youtube.com/embed/9uAIwCMSsmM?si=hgeuzWUCFTL8h5_y",
    },
    {
        name: "Capstone Project: HomeLab.ai",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.WEB_DEVELOPMENT, ProjectFilterCategory.AI_AND_ML],
        description: "A web application that help designers reduce time when prepare an idea and make an architecture design for their customer.",
        thumbnail: "/img/projects/homelab-ai/thumbnail.jpg",
        clientLogo: "/img/clients/homelab-ai.png",
        position: "Front-end developer, AI developer, Blockchain developer",
        techStacks: ["ReactJS (Web)", "TensorFlow", "Matlab", "Pytorch", "Hybrid AI Prediction Model", "Solidity (Blockchain)", "Coohom (3D Platform)"],
        slug: "homelab-ai",
        date: "Apr.2022 – Mar.2023",
        endDate: new Date("2023-03-01"),
        github: "https://github.com/PassgenixTeam/home-lab-ai",
        youtube: "https://www.youtube.com/embed/nL43ijikK8M?si=W-d5Y2BtMeYMQLvM",
    },
    {
        name: "Passgenix Solutions: The Rike",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PASSGENIX_SOLUTIONS, ProjectFilterCategory.WEB_DEVELOPMENT, ProjectFilterCategory.DATA_ANALYZING],
        description: "Bring products of Vietnamese farmers to the US market.",
        thumbnail: "/img/projects/passgenix-the-rike/thumbnail.jpg",
        clientLogo: "/img/clients/the-rike.png",
        position: "Technical leader",
        techStacks: ["NextJS (Client website)", "Shopify", "Amazon for Retailer (E-commerce platform)", "NestJS (BE)", "AppSheet (Admin)", "MongoDB"],
        slug: "passgenix-the-rike",
        date: "Feb.2023 – Present",
        endDate: new Date(),
        imageUrl: "/img/projects/passgenix-the-rike/image.jpg",
        website: "https://www.therike.us",
    },
    {
        name: "The Rike: Team Reform and Digital Transformation",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.THERIKE],
        description: "Implemented digital transformation, rebuilt team structures, and improved controlled automation processes for all 20+ fully remote employees. Build freight transportation systems, warehouses, barcodes, front-end processes, finance and accounting, marketing and all other work related to the internal and work of each department including: Purchasing team, marketing team, listing team, technical team, shipping team, shipping team and management system for admins",
        thumbnail: "/img/projects/therike-warehouse/image.png",
        clientLogo: "/img/clients/the-rike.png",
        position: "Technology Business Development & Team Management",
        techStacks: ["NextJS (Client website)", "Shopify", "Amazon for Retailer (E-commerce platform)", "NestJS (BE)", "AppSheet (Admin)", "MongoDB"],
        slug: "therike-warehouse",
        date: "Feb.2023 – Present",
        endDate: new Date(),
        imageUrl: "/img/projects/therike-warehouse/image.png",
        website: "https://www.therike.us",
    },
    {
        name: "The Rike:  Management App",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.THERIKE],
        description: "This is a management app I built using Appsheet, a low-code platform from Google that allows interaction through google sheets. Because the majority of members work remotely and have an average age of over 30 years old, it is difficult to manage beyond Excel applications. I learned the appsheet myself and successfully deployed the system.",
        thumbnail: "/img/projects/therike-warehouse/Screenshot 2024-04-29 at 21.53.55.png",
        clientLogo: "/img/clients/the-rike.png",
        position: "Technology Business Development & Team Management",
        techStacks: ["Excel","Appsheet"],
        slug: "therike-warehouse",
        date: "Feb.2023 – Present",
        endDate: new Date(),
        imageUrl: "/img/projects/therike-warehouse/Screenshot 2024-04-29 at 21.53.55.png",
        website: "https://www.therike.us",
    },
    {
        name: "The Rike: Organize a system of e-commerce platforms",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.THERIKE],
        description: "The problem is how to organize data, apply techniques and APIs to synchronize all systems of e-commerce platforms and goods management applications of more than 4 warehouses located across the country. America, in Vietnam and how long does it take from the purchasing stage until the goods are shipped to the US and how is it controlled? Because when a customer buys a product on one system, the other platforms must be synchronized and the warehouse side will ship the goods.",
        thumbnail: "/img/projects/therike-warehouse/image copy.png",
        clientLogo: "/img/clients/the-rike.png",
        position: "Technology Business Development & Team Management",
        techStacks: ["System Achitect","The Rike Website", "Shopify", "Ebay", "Tiktokshop", "Amazon for Retailer (E-commerce platform)","AppSheet (Admin)", "MongoDB","Fullfilment App"],
        slug: "therike-warehouse",
        date: "Feb.2023 – Present",
        endDate: new Date(),
        imageUrl: "/img/projects/therike-warehouse/image copy.png",
        website: "https://www.therike.us",
    },
    {
        name: "Datahouse Projects",
        filterCategories: [
            ProjectFilterCategory.ALL,
            ProjectFilterCategory.DATAHOUSE,
            ProjectFilterCategory.WEB_DEVELOPMENT,
            ProjectFilterCategory.DATA_ANALYZING,
        ],
        description: "For security reasons, I cannot share the projects I have participated in. I have participated in 5 projects in different roles and used different programming languages to participate in solving problems in those projects.",
        thumbnail: "/img/projects/datahouse/297132102_3151011541782140_2826998384599405901_n.jpg",
        clientLogo: "/img/clients/napa-global.png",
        position: "Data Engineer; Salesforce Developer",
        techStacks: ["Salesforce","Python","SQL","AWS","Quicksight","..."],
        slug: "datahouse",
        imageUrl: "/img/projects/datahouse/297132102_3151011541782140_2826998384599405901_n.jpg",
        date: "June.2022 – Current",
        endDate: new Date("2023-12-01"),
        website: "https://www.datahouse.com/",
    },
    {
        name: "Pofolio",
        filterCategories: [ProjectFilterCategory.ALL, ProjectFilterCategory.PERSONAL, ProjectFilterCategory.WEB_DEVELOPMENT],
        description: "Build a personal website documenting my projects, experiences, skills, and all other relevant information.",
        thumbnail: "/img/projects/pofolio/Screenshot 2024-04-29 at 22.51.36.png",
        clientLogo: "/img/projects/pofolio/Screenshot 2024-04-29 at 22.51.36.png",
        position: "Front-end developer, Back-end developer",
        techStacks: ["ReactJS (Web)", "HTML","CSS"],
        slug: "pofolio",
        date: "Apr.2024 – Apr.2024",
        endDate: new Date("2023-05-01"),
    },
];
