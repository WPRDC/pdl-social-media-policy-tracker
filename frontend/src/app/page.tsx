import { tw } from "@/lib/util";
import Image from "next/image";
import React from "react";
import { requestLastUpdated } from "@/lib/api";

export default async function About() {
  const sectionStyle = tw`pt-6 first:pt-0`;
  const headingStyle = tw`pb-2 font-display text-2xl font-bold after:content-[':'] lg:text-3xl`;
  const paragraphStyle = tw`pb-3 font-sans leading-relaxed lg:text-lg`;
  const listStyle = "pl-4 lg:text-lg";
  const listItemStyle = "pb-3 leading-relaxed list-disc";
  const tocItemStyle = tw`mb-1`;
  const tocLinkStyle = tw``;

  const { lastUpdated } = await requestLastUpdated();

  return (
    <main className="my-6 px-3 pb-20">
      <div className="mx-auto max-w-screen-lg font-medium">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="mb-2 h-fit border-black p-4 text-sm lg:mb-0 lg:w-1/4 lg:border">
            <div className="mb-1 font-display text-base font-bold">
              On this page:
            </div>
            <nav>
              <ol>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#overview">
                    Tracker Overview & Objectives
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#parameters">
                    Tracker Parameters
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#methodology">
                    Methodology
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#howto">
                    How to Use the Tracker
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#considerations">
                    Additional Considerations
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          <div className="lg:w-3/4 lg:pr-6">
            <div id="overview" className={sectionStyle}>
              <h2 className={headingStyle}>Tracker Overview & Objectives</h2>
              <div className="my-2 w-fit rounded pb-2 text-xl font-bold italic  text-royal lg:text-2xl">
                Tracking the Evolution of Social Media Companies&rsquo; Election
                Integrity Policies
              </div>
              <p className={paragraphStyle}>
                Presented here is a timeline of social media companies’ evolving
                policies and reported actions that impact the information
                environment related to U.S. elections and campaigns.
              </p>
              <p className={paragraphStyle}>
                In the aftermath of evidence of foreign disinformation campaigns
                during the 2016 U.S. Presidential election, social media
                companies looked to mitigate Congressional concern and stave off
                regulation. Companies responded with a series of new content
                moderation policies and design changes during the 2018 midterms
                and 2020 Presidential elections, although those efforts were
                increasingly accompanied by{" "}
                <a href="https://www.washingtonpost.com/technology/2022/10/09/social-media-content-moderation/">
                  charges
                </a>{" "}
                of political bias. Large and small platforms played{" "}
                <a href="https://www.npr.org/2023/01/26/1151360750/social-medias-role-in-jan-6-was-left-out-of-the-final-report">
                  host to
                </a>{" "}
                the spread of the ‘Stop the Steal’ conspiracy, but in the
                immediate aftermath of January 6, 2021, the big players acted
                decisively to limit stolen election content. Following the 2022
                midterm election cycle, researchers and media have raised{" "}
                <a href="https://www.washingtonpost.com/technology/2023/08/25/political-conspiracies-facebook-youtube-elon-musk/">
                  concerns
                </a>{" "}
                that social media companies are{" "}
                <a href="https://www.washingtonpost.com/technology/2023/08/25/political-conspiracies-facebook-youtube-elon-musk/">
                  stepping back
                </a>{" "}
                from earlier useful – if imperfect –policies and are
                understaffing the teams intended to combat election interference
                and mis and disinformation.
              </p>
              <p className={paragraphStyle}>
                In this tracker, we attempt to ground these observations by
                chronicling specific policy changes, platform design choices,
                and key decisions and events as they relate to election
                information and campaigns. As we head into the 2024 election
                cycle in the United States, we can expect continued and perhaps
                consequential changes to platforms’ approaches. Some of these
                policies are US-focused, others more widely applicable during a
                year in which nearly{" "}
                <a href="https://time.com/6550920/world-elections-2024/">
                  half of the world
                </a>{" "}
                will hold national elections.
              </p>
              <p className={paragraphStyle}>
                We note that an external understanding of ‘how the sausage is
                made’ concerning companies’ approach to elections is incomplete,
                at best. The public must rely upon corporate press releases and
                messaging, with its inevitable spin. In particular, we have very
                little visibility into whether some efforts announced with
                fanfare and logged here are ongoing. While media reporting and
                independent research yield additional data, the fact remains
                that we are all operating with imperfect information,
                emphasizing, yet again, the need for transparency from these
                companies with outsize influence over what information people
                are and are not exposed to.
              </p>
            </div>

            <div className={sectionStyle}>
              <h2 className={headingStyle}>Tracker Parameters</h2>
              <p className={paragraphStyle}>
                <strong>Platforms</strong>: The tracker includes the biggest
                social media platforms as measured by users – Facebook/Instagram
                (grouped together as they generally share content moderation
                policies), Threads (separate from other Meta platforms owing to
                a divergent approach to content moderation at the time of
                launch), X/Twitter, TikTok and YouTube. We’ve also included
                several smaller platforms that have gained influence with users
                seeking a more hands-off approach to content moderation: Parler,
                Gab, Discourse. Finally, we have included encrypted messaging
                apps Telegram and WhatsApp.
              </p>
              <p className={paragraphStyle}>
                <strong>Timing</strong>: The history of tech companies and
                elections{" "}
                <a href="https://bipartisanpolicy.org/report/history-tech-elections/">
                  goes back decades
                </a>{" "}
                – however, we begin our timeline in 2016, the year Americans had
                a collective realization that social media – through
                misinformation, foreign interference and candidates’ use of the
                platforms – could have a decisive impact on electoral outcomes.
                We intend to update this tracker monthly.
              </p>
              <p className={paragraphStyle}>
                <strong>Geography</strong>: This tracker primarily focuses on
                U.S. election-related policies and actions, though some broadly
                apply.
              </p>
            </div>
            <div className={sectionStyle}>
              <h2 className={headingStyle}>Methodology</h2>
              <p className={paragraphStyle}>
                The data presented in this tracker is drawn from review of
                social media companies&#39; blog posts, corporate
                reports/presentations made available to the public,
                Congressional testimony, date stamped Terms and Conditions, and
                media coverage. Where possible, we traced evolution in company
                policies in archived websites (using Wayback Machine), although
                this was complicated by changing URLs.
              </p>
            </div>
            <div className={sectionStyle}>
              <h2 className={headingStyle}>How to Use the Tracker</h2>
              <p className={paragraphStyle}>
                At top, you will see three headings:
              </p>
              <ul className={listStyle}>
                <li className={listItemStyle}>
                  <strong>About</strong>: Click this to come back to the this
                  page, which provides an overview of the timeline’s goals,
                  methodology and parameters.
                </li>
                <li className={listItemStyle}>
                  <strong>
                    <a
                      className="font-bold"
                      href="/social-media-election-policies/timeline"
                    >
                      Full timeline
                    </a>
                  </strong>
                  : This view will show all selected categories on a single
                  timeline. Here, you can filter by platform, as well as by
                  category. The categories include: Misinformation – policy
                  &amp; tools; Election interference – policy &amp; tools;
                  Voting – policy &amp; tools; Political advertising – policy
                  &amp; tools; Staffing; and Event/Application of policy.
                </li>
                <li className={listItemStyle}>
                  <strong>
                    <a
                      className="font-bold"
                      href="/social-media-election-policies/compare"
                    >
                      Comparison timeline
                    </a>
                  </strong>
                  : Here you can view side by side comparisons of up to three
                  platforms. To change the platforms, click the down arrow next
                  to the platform name. If you wish to add a third platform for
                  comparison, click the “+Add” button in the upper right.
                </li>
              </ul>
            </div>
            <div className={sectionStyle}>
              <h2 className={headingStyle}>Additional Considerations</h2>
              <p className={paragraphStyle}>
                Content moderation policies include a wide range of concerns,
                often touching on spam, hate speech, memorization, sexual
                exploitation, bullying and more. Some of these policies –
                although critical – are outside the domain of elections. Others,
                such as policies pertaining to fraud, spam, misinformation and
                inauthentic behavior have variable application to election
                content. We used our judgment as to what falls within our stated
                parameters but recognize that inclusion/exclusion of specific
                policies and events is subject to debate.
              </p>
              <p className={paragraphStyle}>
                One challenge in documentation is the quiet retirement of
                policies and tools. Social media companies make a practice of
                publicly rolling out new tools and functions aimed at election
                integrity. However, they are not consistently open and
                transparent concerning the discontinuation of these tools (there
                are exceptions, such as Twitter&#39;s{" "}
                <a href="https://blog.twitter.com/en_us/topics/company/2020/2020-election-update">
                  postmortem
                </a>{" "}
                of the 2020 election). Unless we found documentation that a tool
                had been discontinued, it is our assumption that it will
                continue to be utilized in future election cycles. Sometimes,
                this assumption will be proven false.
              </p>
              <p className={paragraphStyle}>
                Noting these constraints and parameters, we recognize that this
                tracker is not exhaustive. Nonetheless, we have endeavored to
                create a tracker that is both thorough and focused on how social
                media giants have evolved their policies towards
                election-relevant content and integrity.
              </p>
              <p className={paragraphStyle}>
                Questions or things we’ve missed? We invite you to reach out to
                us at <a href="mailto:cyber@pitt.edu">cyber@pitt.edu</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
