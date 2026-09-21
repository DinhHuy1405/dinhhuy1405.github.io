export type Platform = {
    name: string;
    logo: string;
    link: string;
    handle: string;
};

export type Deal = {
    name: string;
    logo?: string;
    link: string;
    code: string;
    benefit: string;
    description: string;
    terms?: string;
};

export const platforms: Platform[] = [
    { name: "LinkedIn", logo: "/img/platforms/linkedin-icon.svg", link: "https://www.linkedin.com/in/dinhhuynguyen", handle: "dinhhuynguyen" },
    { name: "GitHub", logo: "/img/platforms/github-icon.svg", link: "https://github.com/DinhHuy1405", handle: "DinhHuy1405" },
    { name: "Medium", logo: "/img/platforms/medium-icon.svg", link: "https://medium.com/@HuyTimBlog", handle: "@HuyTimBlog" },
    { name: "Threads", logo: "/img/platforms/threads-icon.svg", link: "https://www.threads.com/@dh.timm", handle: "@dh.timm" },
    { name: "TikTok", logo: "/img/platforms/tiktok-icon.svg", link: "https://www.tiktok.com/@huytimdata", handle: "@huytimdata" },
    { name: "YouTube", logo: "/img/platforms/youtube-icon.svg", link: "https://www.youtube.com/@huytim1405", handle: "@huytim1405" },
    { name: "Facebook", logo: "/img/platforms/facebook.svg", link: "https://www.facebook.com/profile.php?id=100010185792295", handle: "Huy Tim" },
];

// Add real referral / discount codes here. The Deals section stays hidden while this list is empty.
export const deals: Deal[] = [
    {
        name: "CollaNote",
        logo: "/img/platforms/collanote.png",
        link: "https://collanote.com",
        code: "HUYTIM50",
        benefit: "50% off",
        description: "Note-taking app with PDF markup, AI tools and flashcards. Enter the code at checkout.",
    },
    {
        name: "Kalodata",
        logo: "/img/platforms/kalodata.png",
        link: "https://www.kalodata.com",
        code: "HUYTIM2000",
        benefit: "10-15% off",
        description: "TikTok Shop analytics and insights. Enter the code at checkout.",
    },
];
