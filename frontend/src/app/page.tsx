import { tw } from "@/lib/util";

export default async function About() {
  const sectionStyle = tw`pt-6 first:pt-0`;
  const headingStyle = tw`pb-2 font-rubik text-3xl font-bold after:content-[':']`;
  const paragraphStyle = tw`pb-3 font-sans leading-relaxed`;
  const listStyle = "pl-4";
  const listItemStyle = "pb-3 leading-relaxed list-disc";
  const tocItemStyle = tw`mb-1`;
  const tocLinkStyle = tw``;

  return (
    <main className="my-6 pb-20">
      <div className="mx-auto max-w-screen-lg font-medium">
        <h1 className="my-6 font-rubik text-5xl font-bold">
          Social Media Election Policy Tracker
        </h1>

        <div className="flex flex-row-reverse">
          <nav className="h-fit w-1/4 border border-black p-4 text-sm">
            <div className="mb-1 font-rubik text-base font-bold">
              On this page:
            </div>
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

          <div className="w-3/4 pr-6">
            <div id="overview" className={sectionStyle}>
              <h2 className={headingStyle}>Tracker Overview & Objectives</h2>
              <div className="pb-2 text-xl font-semibold">
                Tracking the Evolution of Social Media Companies&apos; Election
                Integrity Policies
              </div>
              <p className={paragraphStyle}>
                Presented here is a timeline of social media companies&apos;
                evolving policies and reported actions that impact the
                information environment related to elections and campaigns.
              </p>
              <p className={paragraphStyle}>
                In the aftermath of evidence of foreign disinformation campaigns
                during the 2016 U.S. Presidential election, social media
                companies looked to mitigate Congressional concern and stave off
                regulation. Companies responded with a series of new content
                moderation policies and design changes during the 2018 and 2020
                elections, although those efforts were increasingly accompanied
                by{" "}
                <a href="https://www.washingtonpost.com/technology/2022/10/09/social-media-content-moderation/">
                  accusations
                </a>{" "}
                that the companies favored the political left. Conventional and
                unconventional platforms played{" "}
                <a href="https://www.npr.org/2023/01/26/1151360750/social-medias-role-in-jan-6-was-left-out-of-the-final-report">
                  host to
                </a>{" "}
                the spread of the &lsquo;Stop the Steal&rsquo; conspiracy, but
                in the immediate aftermath of January 6, 2021, the big players
                acted decisively to censor stolen election content. Following
                the 2022 mid-term election cycle, researchers and media have
                raised concerns that social media companies are{" "}
                <a href="https://www.washingtonpost.com/technology/2023/08/25/political-conspiracies-facebook-youtube-elon-musk/">
                  stepping back
                </a>{" "}
                from earlier useful – if imperfect – policies and are
                understaffing the teams intended to combat election interference
                and mis and disinformation.
              </p>
              <p className={paragraphStyle}>
                Here, we attempt to ground these observations by chronicling
                specific policy changes, platform design choices, and key
                decisions and events as they relate to election information and
                campaigns. As we head into the 2024 election cycle here in the
                United States, we can expect continued and perhaps consequential
                changes to platform&apos;s approaches.
              </p>
              <p className={paragraphStyle}>
                We note that an understanding of &lsquo;how the sausage is
                made&rsquo; concerning companies&apos; approach to election mis
                and disinformation is incomplete, at best. The public must rely
                upon corporate press releases and messaging, with its inevitable
                spin. While media reporting and independent research yield some
                additional data, the fact remains that we are all operating with
                imperfect information, clarifying, yet again, the need for
                additional transparency from these companies with outsize
                influence over information for citizens around the world.
              </p>
            </div>
            <div id="parameters" className={sectionStyle}>
              <h2 className={headingStyle}>Tracker Parameters</h2>
              <p className={paragraphStyle}>
                The tracker includes the biggest social media platforms as
                measured by users – Facebook/Instagram (grouped together as they
                generally share content moderation policies), Threads (separate
                from other Meta platforms owning to a divergent approach to
                content moderation at the time of launch), X/Twitter, TikTok and
                YouTube. We&apos;ve also included several smaller platforms that
                have gained influence with fridge users seeking alternative
                platforms with a hands off approach to content moderation:
                Parler, Gab, Discourse. Finally, we have included encrypted
                messaging apps Telegram and WhatsApp, noting the significant
                role they play as{" "}
                <a href="https://www.brookings.edu/articles/encrypted-messaging-apps-are-the-future-of-propaganda/">
                  vectors for misinformation
                </a>{" "}
                both in elections and more broadly.
              </p>
              <p className={paragraphStyle}>
                The history of tech and elections{" "}
                <a href="https://bipartisanpolicy.org/report/history-tech-elections/">
                  goes back decades
                </a>{" "}
                – however, we begin our timeline in 2016, the year Americans had
                a collective realization that social media – through
                misinformation, foreign interference and candidates&apos; use of
                the platforms – could have a decisive impact on electoral
                outcomes. We will update this tracker monthly.
              </p>
              <p className={paragraphStyle}>
                This tracker primarily focuses on US election-related actions,
                though some broadly apply. We note, however, that 2024 will
                bring major elections across the world, including Britain,
                India, and Indonesia.
              </p>
            </div>
            <div id="methodology" className={sectionStyle}>
              <h2 className={headingStyle}>Methodology</h2>
              <p className={paragraphStyle}>
                The data presented in this tracker is drawn from review of
                social media companies&apos; blog posts, corporate
                reports/presentations made available to the public,
                Congressional testimony, date stamped Terms and Conditions, and
                media coverage. Where possible, we traced evolution in company
                polices in archived websites (using Wayback Machine), although
                this was complicated by changing URLs.{" "}
              </p>
            </div>
            <div id="howto" className={sectionStyle}>
              <h2 className={headingStyle}>How to Use the Tracker</h2>
              <p className={paragraphStyle}>This site has three sections:</p>
              <ul className={listStyle}>
                <li className={listItemStyle}>
                  <strong>
                    <a className="font-bold" href="/about">
                      About
                    </a>
                    :
                  </strong>{" "}
                  Click this to come back to the homepage, which provides an
                  overview of the timeline&apos;s goals, methodology and other
                  considerations:
                </li>
                <li className={listItemStyle}>
                  <strong>
                    <a className="font-bold" href="/timeline">
                      Full timeline
                    </a>
                    :
                  </strong>{" "}
                  This view will show all selected categories on a single
                  timeline. Here, you can filter by platform, as well as by
                  category. The categories include: misinformation –
                  policy/tool; election interference – policy/tool; voting –
                  policy/tool; political advertising – policy/tool; staffing;
                  event/application of policy.
                </li>
                <li className={listItemStyle}>
                  <strong>
                    <a className="font-bold" href="/compare">
                      Comparison timeline
                    </a>
                    :
                  </strong>{" "}
                  Here you can view side by side comparisons of up to 2-3
                  platforms. To change the platform, click the down arrow next
                  to the platform name. If you wish to add a third platform for
                  comparison, click the{" "}
                  <span className="font-mono font-bold text-gray-500">
                    +Add
                  </span>{" "}
                  button in the upper right.
                </li>
              </ul>
            </div>
            <div id="considerations" className={sectionStyle}>
              <h2 className={headingStyle}>Additional Considerations</h2>
              <p className={paragraphStyle}>
                Our focus is on the policies of social media companies as they
                impact elections, which is a limited slice of content moderation
                policies (to include spam, hate speech, memorization, sexual
                exploitation, bullying and more). Some of these policies –
                although critical – are outside the domain of elections. Others,
                such as policies pertaining to fraud, spam, misinformation and
                inauthentic behavior have variable application to election
                content. We used our judgment as to what falls within our stated
                parameters but recognize that inclusive/exclusion of specific
                policies and events is subject to debate.
              </p>
              <p className={paragraphStyle}>
                One challenge in documenting these policies is the quiet
                retirement of policies and tools. Social media companies make a
                practice of publicly rolling out new tools and functions aimed
                at election integrity. However, they are not consistently open
                and transparent concerning the discontinuation of these tools
                (there are exceptions, such as Twitter&apos;s{" "}
                <a href="https://blog.twitter.com/en_us/topics/company/2020/2020-election-update">
                  postmortem
                </a>{" "}
                of the 2020 election). Unless we found documentation that a tool
                had been discontinued, it is our assumption that it will
                continue to be utilized in future election cycles, although in
                many cases it is possible the tool has been quietly
                discontinued.
              </p>
              <p className={paragraphStyle}>
                Noting these constraints and parameters, we recognize that this
                tracker is not exhaustive. Nonetheless, we have endeavored to
                create a tracker that is both thorough and focused on how social
                media giants have evolved their policies towards
                election-relevant content and integrity.
              </p>
              <p className={paragraphStyle}>
                Questions or things we&apos;ve missed? We invite you to reach
                out to us at <a href="mailto:cyper@pitt.edu">cyber@pitt.edu</a>.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
