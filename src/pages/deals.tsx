import { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import PageBody from "../components/page-body/page-body";
import PageHead from "../components/page-head/page-head";
import { deals, platforms } from "../data/deals.data";

const DealsPage: React.FC<PageProps> = () => {
    const [copied, setCopied] = React.useState<string | null>(null);

    const copyCode = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(code);
            setTimeout(() => setCopied(null), 1800);
        } catch {
            setCopied(null);
        }
    };

    return (
        <PageBody>
            <div className="page-title">
                <h1>Deals</h1>
                <div className="page-subtitle">
                    <h4>My platforms and personal codes</h4>
                </div>
            </div>

            <div id="content" className="page-content site-content single-post" role="main">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="block-title">
                            <h2>My Platforms</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {platforms.map((platform) => (
                        <div key={platform.name} className="col-xs-6 col-sm-4 col-md-3">
                            <a href={platform.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                <div className="certificate-item clearfix" style={{ textAlign: "center", padding: "22px 10px" }}>
                                    <img src={platform.logo} alt={platform.name} style={{ height: 48, width: "auto", maxWidth: 80, objectFit: "contain", margin: "0 auto 10px", display: "block" }} />
                                    <h4 style={{ margin: "0 0 4px" }}>{platform.name}</h4>
                                    <span style={{ fontSize: 12, color: "#888" }}>{platform.handle}</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                {deals.length > 0 && (
                    <>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <div className="block-title p-20">
                                    <h2>Personal Codes</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {deals.map((deal) => (
                                <div key={deal.name} className="col-xs-12 col-sm-6">
                                    <div className="certificate-item clearfix" style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                        {deal.logo && <img src={deal.logo} alt={deal.name} style={{ height: 44, width: 44, objectFit: "contain", flexShrink: 0 }} />}
                                        <div style={{ flex: 1, minWidth: 0 }}>
                                            <h4 style={{ margin: "0 0 4px" }}>
                                                <a href={deal.link} target="_blank" rel="noopener noreferrer">
                                                    {deal.name}
                                                </a>
                                            </h4>
                                            <p style={{ margin: "0 0 8px", fontSize: 13 }}>{deal.description}</p>
                                            <button type="button" className="see-more-btn" onClick={() => copyCode(deal.code)}>
                                                {copied === deal.code ? "Copied!" : `Code: ${deal.code} (click to copy)`}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </PageBody>
    );
};

export default DealsPage;

export const Head: HeadFC = () => <PageHead title="Deals" />;
