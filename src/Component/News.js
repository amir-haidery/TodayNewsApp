import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [{
        "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
        },
        "author": "Brian Heater",
        "title": "Fitbit adds ECG and stress-level scanning to its Charge fitness tracker",
        "description": "Fitness band market share is undoubtedly contracting, thanks in no small part to the massive popularity of smartwatches. But 13.1 million overall shipments in Q1 2021 is nothing to sneeze at. People are still buying non-watch fitness trackers, due to their lo…",
        "url": "http://techcrunch.com/2021/08/25/fitbit-adds-ecg-and-stress-level-scanning-to-its-charger-fitness-tracker/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/Fitbit_Charge_5_Lifestyle_FrostedLilacSport_Cropped.jpg?w=711",
        "publishedAt": "2021-08-25T13:00:30Z",
        "content": "Fitness band market share is undoubtedly contracting, thanks in no small part to the massive popularity of smartwatches. But 13.1 million overall shipments in Q1 2021 is nothing to sneeze at. People … [+3302 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Blake Brittain",
        "title": "1-800 Contacts sues Warby Parker for trademark infringement over keyword ads - Reuters",
        "description": "Warby Parker was hit with a lawsuit by 1-800 Contacts in Manhattan federal court accusing it of infringing its trademarks by buying search-engine keywords for \"1-800 Contacts\" to misdirect customers to its competing online contact-lens store.",
        "url": "https://www.reuters.com/legal/transactional/1-800-contacts-sues-warby-parker-trademark-infringement-over-keyword-ads-2021-08-19/",
        "urlToImage": "https://www.reuters.com/resizer/y8f--5BrKrGK9CqQJHPqZWC1FkA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5EJ2XAMVHRLD3OZL46BXCWTCXA.jpg",
        "publishedAt": "2021-08-19T16:08:00Z",
        "content": "Glasses are seen inside of a Warby Parker store in Brooklyn, New York. REUTERS/Brendan McDermid\r\n<ul><li>\r\nSummary</li><li>\r\nLaw firms</li><li>\r\nRelated documents</li></ul>\r\nThe company and law firm … [+2660 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Entrepreneur"
        },
        "author": "Erica McMillan",
        "title": "How to Improve Your SEO by Identifying Low-Hanging-Fruit Keywords",
        "description": "Achieve quick wins for small-volume phrases that matter.",
        "url": "https://www.entrepreneur.com/article/382053",
        "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1630095411-shutterstock-394758724.jpg",
        "publishedAt": "2021-09-02T16:30:00Z",
        "content": "September\r\n2, 2021\r\n5 min read\r\nOpinions expressed by Entrepreneur contributors are their own.\r\nSEO is an incredibly competitive form of online marketing, especially when attempting to rank for high-… [+5306 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Entrepreneur"
        },
        "author": "Nick Chernets",
        "title": "All You Need to Know About Google Trends to Grow Your Business",
        "description": "It's not surprising that new and improved online SEO tools constantly appear to help us identify search trends and design valuable web positioning campaigns.",
        "url": "https://www.entrepreneur.com/article/379957",
        "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1630617043-GettyImages-1226959114.jpg",
        "publishedAt": "2021-09-05T22:00:00Z",
        "content": "September\r\n5, 2021\r\n5 min read\r\nOpinions expressed by Entrepreneur contributors are their own.\r\nSEO positioning is a crucial aspect of effective digital marketing. Therefore, it’s not surprising that… [+5524 chars]"
    },
    {
        "source": {
            "id": "the-next-web",
            "name": "The Next Web"
        },
        "author": "Ivan Mehta",
        "title": "Instagram will finally show content when you search for stuff — like it should",
        "description": "If you search for a keyword on any social media or content serving website, you expect to get suggestions for related posts, images, or videos. However, on Instagram, all you get are accounts, hashtags, and places as search results. Annoying. Thankfully, the …",
        "url": "https://thenextweb.com/news/instagram-new-version-search-photo-video",
        "urlToImage": "https://img-cdn.tnwcdn.com/image/plugged?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2Finstagram-revamped-search.jpg&signature=c41445c15b3fd3b85cb83544a66838ab",
        "publishedAt": "2021-08-26T06:48:24Z",
        "content": "If you search for a keyword on any social media or content serving website, you expect to get suggestions for related posts, images, or videos. However, on Instagram, all you get are accounts, hashta… [+1710 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Search Engine Journal"
        },
        "author": "Mark Traphagen",
        "title": "How to Get Started With Keyword Research for SEO via @sejournal, @marktraphagen",
        "description": "Keyword research is an ongoing process for marketers. Learn the basics of good SEO keyword research and analysis here.The post How to Get Started With Keyword Research for SEO appeared first on Search Engine Journal.",
        "url": "https://www.searchenginejournal.com/keyword-research/how-to-get-started/",
        "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/07/sej-ebook-post-chapter-1-jul-7-60fa33630a367-sej.jpg",
        "publishedAt": "2021-08-27T11:45:46Z",
        "content": "Despite all the many changes to SEO practice over the years, keyword research remains one of the most fundamental SEO tasks.\r\nSome form of keyword research is still one of the first things SEO profes… [+14922 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Search Engine Journal"
        },
        "author": "SEOmonitor",
        "title": "Maximize Your Keyword Strategy Impact: Avoid These 5 Common Pitfalls via @sejournal, @seomonitor",
        "description": "A well-rounded keyword strategy can help set you up for SEO success. Discover new ways to get the most out of your keyword list.The post Maximize Your Keyword Strategy Impact: Avoid These 5 Common Pitfalls appeared first on Search Engine Journal.",
        "url": "https://www.searchenginejournal.com/seomonitor-maximize-keyword-strategy-impact/414087/",
        "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/07/frame-189-6126404158868-sej.png",
        "publishedAt": "2021-08-31T05:00:33Z",
        "content": "Pitfall #1: You Include Branded Keywords in the Mix\r\nBranded organic traffic is not SEO traffic.\r\nThe navigational keywords related to your client’s website or to other websites (even competitors’) w… [+6714 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ReadWrite"
        },
        "author": "Irwin Hau",
        "title": "How to Optimize Your Content for Semantic SEO",
        "description": "Google’s progress over the last 20 years is mind-blowing when you think about it. Not long ago, users were impartial to the likes of Yahoo, Bing or even Ask Jeeves. Those names have since faded into the periphery while Google has gotten better at serving up r…",
        "url": "https://readwrite.com/2021/08/15/how-to-optimize-your-content-for-semantic-seo/",
        "urlToImage": "https://images.readwrite.com/wp-content/uploads/2021/06/Optimize-Your-Content-for-Semantic-SEO.jpg",
        "publishedAt": "2021-08-15T14:00:36Z",
        "content": "Googles progress over the last 20 years is mind-blowing when you think about it. Not long ago, users were impartial to the likes of Yahoo, Bing or even Ask Jeeves. Those names have since faded into t… [+9965 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Blog.google"
        },
        "author": "Nana Wereko-BrobbyEditorial Lead EMEAComms Lab",
        "title": "Ripples Nigeria and the power of geojournalism",
        "description": "In 2015, Samuel Ibemere and his colleagues founded Ripples Nigeria, an online newspaper that aims to bring data journalism into the mainstream. And they’re particularly focused on geojournalism: the harnessing of earth data to accurately report on big stories…",
        "url": "https://blog.google/around-the-globe/google-africa/ripples-nigeria-and-power-geojournalism/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+blogspot%2FMKuf+%28The+Keyword+%7C+Official+Google+Blog%29",
        "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IMG_7844_1.max-800x800.jpg",
        "publishedAt": "2021-08-20T08:00:00Z",
        "content": "In 2015, Samuel Ibemere and his colleagues founded Ripples Nigeria, an online newspaper that aims to bring data journalism into the mainstream. And theyre particularly focused on geojournalism: the h… [+2446 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Blog.google"
        },
        "author": "Cindy PendersCommunications ManagerNorthern Europe - Amsterdam",
        "title": "The tale of the Dutch bookstore, the pivot and the Golden Pin",
        "description": "Bookstore Dominicanen can be found in a former Dominican church in the city of Maastricht, a thriving cultural hub and one of the oldest cities in The Netherlands. Before COVID, the bookstore welcomed almost one million visitors a year. They mostly relied on …",
        "url": "https://blog.google/around-the-globe/google-europe/tale-dutch-bookstore-pivot-and-golden-pin/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+blogspot%2FMKuf+%28The+Keyword+%7C+Official+Google+Blog%29",
        "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/140A3205.max-1300x1300.jpg",
        "publishedAt": "2021-09-02T09:00:00Z",
        "content": "How did Bookstore Dominicanen pivot?\r\nFor the owner, Ton Harmes, the key was perseverance. With the store having to close during the busiest weeks of the year - right in the middle of the holiday sea… [+1855 chars]"
    },
    {
        "source": {
            "id": "polygon",
            "name": "Polygon"
        },
        "author": "Charlie Hall",
        "title": "Magic: The Gathering’s new werewolf cards bring back a cool, challenging mechanic",
        "description": "Magic: The Gathering is going back to Innistrad with Midnight Hunt. The Gothic horror themed set will include loads of werewolves that change, with daybound and nightbound powers.",
        "url": "https://www.polygon.com/22653866/innistrad-midnight-hunt-brings-preview-cards-daybound-nightbound",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/L_gR0DoZUZlo4HIDu8T43EvXJPk=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22822865/festival_cropped.jpg",
        "publishedAt": "2021-09-02T16:30:00Z",
        "content": "Innistrad: Midnight Hunt is the next set of cards for Magic: The Gathering, and it arrives in stores and online in mid-September. Its a return to the classic style of Gothic horror first seen in 2011… [+3212 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hubspot.com"
        },
        "author": "cwainwright@hubspot.com (Corey Wainwright)",
        "title": "How to Search an Entire Website in Google in 3 Steps [+ Example]",
        "description": "Google's pretty good at surfacing relevant content based on your search query. But sometimes you need something so specific that a general keyword phrase doesn't really do it for you, especially if you're a marketer on the hunt for a particular piece of conte…",
        "url": "https://blog.hubspot.com/marketing/how-to-do-a-google-site-search#article",
        "urlToImage": "https://blog.hubspot.com/hubfs/google-site-search.jpg#keepProtocol",
        "publishedAt": "2021-08-17T16:15:00Z",
        "content": "Google's pretty good at surfacing relevant content based on your search query. But sometimes you need something so specific that a general keyword phrase doesn't really do it for you, especially if y… [+4067 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ReadWrite"
        },
        "author": "Milosz Krasinski",
        "title": "10 Tips to Improve Your Local SEO Rankings",
        "description": "Local SEO is a strategy to rank higher in local Google Search Results. It has different requirements than traditional Search Engine Optimization (SEO) because it needs you to understand what they are looking for when searching locally. Since as many as 46% of…",
        "url": "https://readwrite.com/2021/08/17/10-tips-to-improve-your-local-seo-rankings/",
        "urlToImage": "https://images.readwrite.com/wp-content/uploads/2021/08/Improve-Your-Local-SEO-Rankings.jpg",
        "publishedAt": "2021-08-17T15:00:31Z",
        "content": "Local SEO is a strategy to rank higher in local Google Search Results. It has different requirements than traditional Search Engine Optimization (SEO) because it needs you to understand what they are… [+9116 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Entrepreneur"
        },
        "author": "Entrepreneur Store",
        "title": "Streamline Your Business Operations with This Entrepreneurial Tools Suite",
        "description": "Zuitte gives entrepreneurs 50 useful tools in one place.",
        "url": "https://www.entrepreneur.com/article/380555",
        "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1629295573-Ent-ZuitteApp.jpg",
        "publishedAt": "2021-08-23T13:00:00Z",
        "content": "August\r\n23, 2021\r\n2 min read\r\nDisclosure: Our goal is to feature products and services that we think you'll find interesting and useful. If you purchase them, Entrepreneur may get a small share of th… [+2306 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Entrepreneur"
        },
        "author": "Entrepreneur Store",
        "title": "Start Your Dropshipping Side Hustle with This Bundle",
        "description": "Learn how to private label and sell products on Amazon FBA and Shopify.",
        "url": "https://www.entrepreneur.com/article/380462",
        "urlToImage": "https://assets.entrepreneur.com/content/3x2/2000/1629213789-Ent-ShopDropShip.jpg",
        "publishedAt": "2021-08-19T13:00:00Z",
        "content": "August\r\n19, 2021\r\n2 min read\r\nDisclosure: Our goal is to feature products and services that we think you'll find interesting and useful. If you purchase them, Entrepreneur may get a small share of th… [+2162 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Search Engine Journal"
        },
        "author": "Roger Montti",
        "title": "Ranking for Head Term Keywords via @sejournal, @martinibuster",
        "description": "Google's John Mueller answers the question about ranking for massive traffic head term keyword phrasesThe post Ranking for Head Term Keywords appeared first on Search Engine Journal.",
        "url": "https://www.searchenginejournal.com/ranking-for-head-term-keywords/417133/",
        "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/google-ranking-for-head-term-keywords-612370b0ec8cd-sej.jpg",
        "publishedAt": "2021-08-23T10:17:50Z",
        "content": "Google’s John Mueller offered advice on how a new site should approach ranking for head term keywords.\r\nThe question was from a publisher who was unhappy with what was perceived as a poor quality web… [+4742 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Brytfmonline.com"
        },
        "author": "Chris Skeldon",
        "title": "The Apple Watch Series 7 is supposed to have a limited launch stock. - brytfmonline.com",
        "description": "<ol><li>The Apple Watch Series 7 is supposed to have a limited launch stock.  brytfmonline.com\r\n</li><li>Report: iPhone 13 satellite features will only be available in select markets, more  9to5Mac\r\n</li><li>Hold on! Apple's iPhone 13 - illegal for 40% of the…",
        "url": "https://www.brytfmonline.com/the-apple-watch-series-7-is-supposed-to-have-a-limited-launch-stock/",
        "urlToImage": "https://www.brytfmonline.com/wp-content/uploads/2021/09/The-Apple-Watch-Series-7-is-supposed-to-have-a.jpg",
        "publishedAt": "2021-09-05T22:44:14Z",
        "content": "In line with the rumors, a lot has been said about the Apple Watch Series 7. New sensors, a new screen, a new design and a wider range in its operation. However, demand could be much greater than sup… [+2056 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Blog.google"
        },
        "author": "Nana Wereko-BrobbyEditorial Lead EMEAComms Lab",
        "title": "South African Googlers get moving for good",
        "description": "Throughout the pandemic, many of us have spent too much time on the sofa — but Artwell Nwaila changed that for himself and some of his colleagues. Artwell is the Head of Creative and co-lead on Google’s Disability Alliance in South Africa. This week The Keywo…",
        "url": "https://blog.google/around-the-globe/google-africa/south-african-googlers-get-moving-good/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+blogspot%2FMKuf+%28The+Keyword+%7C+Official+Google+Blog%29",
        "urlToImage": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/NappyRun_1.max-1200x1200.jpg",
        "publishedAt": "2021-09-01T12:00:00Z",
        "content": "Throughout the pandemic, many of us have spent too much time on the sofa but Artwell Nwaila changed that for himself and some of his colleagues. Artwell is the Head of Creative and co-lead on Googles… [+3151 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Search Engine Journal"
        },
        "author": "Motoko Hunt",
        "title": "3 Tips for Keyword Research & Content Localization Success via @sejournal, @motokohunt",
        "description": "Integrating localization, SEO, and content creation into a coordinated workflow is critical. Here are 3 tips to do it successfully.The post 3 Tips for Keyword Research & Content Localization Success appeared first on Search Engine Journal.",
        "url": "https://www.searchenginejournal.com/keyword-research/localization-success/",
        "urlToImage": "https://cdn.searchenginejournal.com/wp-content/uploads/2021/07/sej-ebook-post-chapter-3-jul-7-60fa39bad4700-sej.jpg",
        "publishedAt": "2021-09-02T10:45:07Z",
        "content": "Good localization is just good SEO.\r\nWhy?\r\nBecause having your content translated and localized specifically for your target market definitely helps that target audience find your content in the orga… [+5657 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "John Hall, Senior Contributor, \n John Hall, Senior Contributor\n https://www.forbes.com/sites/johnhall/",
        "title": "How To Craft A Successful Content Alignment Strategy",
        "description": "If you try to be all things to all people, your content strategy will fall flat. A sharper focus will help attract your target audience.",
        "url": "https://www.forbes.com/sites/johnhall/2021/08/08/how-to-craft-a-successful-content-alignment-strategy/",
        "urlToImage": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F610acae2dfda964788700bd3%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D2460%26cropY1%3D0%26cropY2%3D1639",
        "publishedAt": "2021-08-08T12:00:00Z",
        "content": "Businessman working on computer\r\ngetty\r\nOptimizing your website content has never been easy. SEO practices are constantly changing, which can be overwhelming even for the most experienced marketers a… [+5289 chars]"
    }
]
    constructor() {
        super();
        console.log("this is constructor from news component")
        this.state= {
            articles: this.articles
        }
    }
    render() {
       
        return (
            <div className="container my-3">
                <h2>TodayNews -Top heading</h2>
            
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>

                            <NewsItem title={element.title.slice(0, 30)} target="_blank" description={element.description.slice(0, 60)} imageUrl={element.urlToImage} newsUrl={element.url}/>
           
               </div>
                })}

                    
                    
                    
                </div>
               
            </div>
        )
    }
}

export default News
