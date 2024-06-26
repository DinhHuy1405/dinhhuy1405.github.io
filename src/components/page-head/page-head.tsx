import * as React from "react";

const PageHead: React.FC<{
    title?: string;
}> = ({ title }) => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <meta name="keywords" content="portfolio, AI Engineer, Data Engineer" />
            <meta name="author" content="Nguyễn Đình Huy" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/img/favicon.png" />
            <meta
                property="og:description"
                content="Nguyễn Đình Huy - a Data Engineer and AI Engineer. Experience in data analyzing, AI & ML."
            />
            <link rel="shortcut icon" href="favicon.ico"></link>
            <title>{[title, "Nguyễn Đình Huy"].filter(Boolean).join(" | ")}</title>
            <meta name="description" content="Nguyễn Đình Huy portfolio" />

            {/* <!-- Favicon  --> */}
            <link rel="icon" href="/img/favicon.png" />

            {/* <!-- Icon Font --> */}
            <link rel="stylesheet" href="/css/fonts/iconfonts/font-awesome/stylesheet.css" />

            {/* <!-- Site font --> */}
            <link rel="stylesheet" href="/css/fonts/webfonts/inter/stylesheet.css" />

            {/* <!-- Vendor CSS --> */}
            <link rel="stylesheet" href="/css/normalize.css" type="text/css" />
            <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />
            <link rel="stylesheet" href="/css/owl.carousel.css" type="text/css" />
            <link rel="stylesheet" href="/css/magnific-popup.css" type="text/css" />

            {/* <!-- Custom CSS --> */}
            <link rel="stylesheet" href="/css/main.css" type="text/css" />
        </>
    );
};

export default PageHead;
