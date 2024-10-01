import { tw } from "@/lib/util";
import React from "react";
import { requestLastUpdated } from "@/lib/api";
import { LuConstruction } from "react-icons/lu";

export default async function About() {
  const sectionStyle = tw`pt-6 first:pt-0`;
  const headingStyle = tw`pb-2 font-display text-2xl font-bold after:content-[':'] lg:text-3xl`;
  const paragraphStyle = tw`pb-3 font-sans leading-relaxed lg:text-lg`;
  const listStyle = tw`pl-7 lg:text-lg`;
  const orderedListItemStyle = tw`list-decimal pb-3 leading-relaxed`;
  const listItemStyle = tw`list-disc pb-3 leading-relaxed`;
  const tocItemStyle = tw`mb-1`;
  const tocLinkStyle = tw``;

  const subtitleStyle = tw`my-2 w-fit rounded pb-2 text-xl font-bold italic  text-royal lg:text-2xl`;
  const { lastUpdated } = await requestLastUpdated();

  return (
    <div className="h-full w-full flex-grow overflow-auto px-3 pb-20 lg:relative">
      <div className="mx-auto max-w-screen-lg font-medium">
        <div className="lg:flex lg:flex-row-reverse">
          <div className="top-8  mb-8 h-fit border-black pt-2 text-sm lg:sticky lg:mb-0 lg:w-1/4 lg:rounded-md lg:border lg:bg-white lg:p-4 lg:shadow-md">
            <div className="flex w-full items-center text-xs font-bold uppercase text-stone-800">
              <LuConstruction className="mr-1 size-3" />
              <div>Updated Monthly</div>{" "}
            </div>
            <div className="mb-3 text-xs">
              <span className="inline-block pr-1 font-mono font-bold uppercase text-stone-800">
                Last Updated:
              </span>
              <time
                dateTime={new Date(lastUpdated).toISOString()}
                className="inline font-mono font-medium text-stone-800"
              >
                {new Date(lastUpdated).toLocaleDateString("en-US", {})}
              </time>
            </div>
            <nav>
              <h2 className="mb-1 font-mono text-xs font-bold uppercase text-stone-800">
                On this page
              </h2>
              <ol className="mt-2 pl-2">
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#introduction">
                    Introduction
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#context">
                    Context
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#methods">
                    Methods
                  </a>
                </li>

                <li className={tocItemStyle}>
                  <a className={tocLinkStyle} href="#mechanics">
                    Mechanics
                  </a>
                </li>
                <li className={tocItemStyle}>
                  <a
                    className={tocLinkStyle}
                    href="#limitations_and_implications"
                  >
                    Limitations and Implications
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          <main className="lg:w-3/4 lg:pr-6 lg:pt-8">
            <div id="overview" className={sectionStyle}>
              <hgroup>
                <h2 className={headingStyle} id="introduction">
                  Introduction
                </h2>
                <p className={subtitleStyle}>
                  What is the Social Media Election Policy Tracker?
                </p>
              </hgroup>

              <p className={paragraphStyle}>
                The Social Media Election Policy Tracker is a tool created to
                broadly chronicle a timeline of selected social media companies’
                evolving policies which have impacted the information
                environment related to U.S. elections and campaigns from 2016 –
                the present.
              </p>
              <p className={paragraphStyle}>
                For the sake of this project,{" "}
                <strong>
                  we define <dfn>election policies</dfn> as the rules,
                  guidelines, and other actions social media platforms have
                  established to manage the use of their services during
                  election cycles and to information related to elections.
                </strong>{" "}
                This encompasses a wide range of issues related to the electoral
                process. Examples of these efforts include those aimed at
                promoting voter registration, providing accurate election
                information, combating foreign election interference, mitigating
                the spread of false or misleading information about elections,
                and other policies surrounding political advertising. Our scope
                also extends beyond formal policies to include internal changes
                made by social media companies that directly impact election
                information environments. Examples of these changes are
                adjustments to election integrity team staffing and the
                implementation of specialized tools like AI-generation labels
                for synthetic election-related content.
              </p>
              <p className={paragraphStyle}>
                The Tracker allows you to explore, compare, and filter through
                different categories of election policies over time by social
                media platform. We believe this will be especially helpful for
                journalists and researchers looking to understand trends and
                patterns regarding how social media companies have adapted their
                policies and actions in response to evolving pressures and
                challenges over time.
              </p>
            </div>

            <div className={sectionStyle}>
              <hgroup>
                <h2 className={headingStyle} id="context">
                  Context
                </h2>
              </hgroup>
              <p className={subtitleStyle}>
                Why Did We Make the Social Media Election Policy Tracker?{" "}
              </p>

              <p className={paragraphStyle}>
                Tracking the evolutions and developments in social media
                election policies over time is a valuable tool for understanding
                how these platforms&apos; actions align with major news, social
                shifts, and political events. The foreign influence attempts
                with respect to the{" "}
                <a
                  href="https://www.intelligence.senate.gov/press/senate-intel-committee-releases-bipartisan-report-russia%E2%80%99s-use-social-media"
                  target="_blank"
                >
                  2016 US presidential election
                </a>{" "}
                served as a wakeup call regarding the power social media
                companies have over the information, news, and advertisements
                people see or don’t see, which have the potential to affect
                their voting behavior. Our tracker begins at this moment when
                social media companies first started facing wide-spread pressure
                from{" "}
                <a
                  href="https://www.govinfo.gov/content/pkg/CHRG-115shrg27398/pdf/CHRG-115shrg27398.pdf"
                  target="_blank"
                >
                  Congress
                </a>{" "}
                and their{" "}
                <a
                  href="https://www.theguardian.com/technology/2016/dec/12/facebook-2016-problems-fake-news-censorship"
                  target="_blank"
                >
                  users
                </a>{" "}
                to address these issues. Companies responded with efforts to{" "}
                <a
                  href="https://journals.sagepub.com/doi/full/10.1177/1461444821989352"
                  target="_blank"
                >
                  self-regulate
                </a>{" "}
                via a series of content moderation policies and platform changes
                during the 2018 midterms and 2020 elections, which are
                documented in this Tracker.
              </p>
              <p className={paragraphStyle}>
                Despite the changes, social media platforms were hotbeds of{" "}
                <a
                  href="https://www.nytimes.com/2021/01/06/us/politics/protesters-storm-capitol-hill-building.html"
                  target="_blank"
                >
                  false information
                </a>{" "}
                regarding the 2020 elections, including the{" "}
                <a
                  href="https://slate.com/technology/2020/11/how-stop-the-steal-exploded-on-facebook-and-twitter.html"
                  target="_blank"
                >
                  “Stop the Steal”
                </a>{" "}
                conspiracy theories of voter fraud. Such discord spilled into
                real-life violence on January 6, 2021, during the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/January_6_United_States_Capitol_attack"
                  target="_blank"
                >
                  U.S. Capitol riots
                </a>
                . Some platforms decided to limit content in the immediate
                aftermath of the attacks. Others did not.
              </p>
              <p className={paragraphStyle}>
                Social media platforms have faced a backlash for their
                decisions, caught between accusations of censorship,{" "}
                <a
                  href="https://www.washingtonpost.com/technology/2019/04/10/facebook-google-twitter-under-fire-senate-republicans-censoring-conservatives-online/"
                  target="_blank"
                >
                  bias
                </a>
                , and political motivations for policies on the one hand, and
                concerns that they are{" "}
                <a
                  href="https://www.washingtonpost.com/technology/2024/04/21/social-media-trump-biden-politics-instagram-facebook/"
                  target="_blank"
                >
                  stepping back
                </a>{" "}
                from earlier useful—if imperfect—
                <a
                  href="https://www.washingtonpost.com/technology/2023/08/25/political-conspiracies-facebook-youtube-elon-musk/"
                  target="_blank"
                >
                  efforts
                </a>{" "}
                on the other. For instance, critics worry that companies are{" "}
                <a
                  href="https://www.theguardian.com/media/2023/dec/07/2024-elections-social-media-content-safety-policies-moderation"
                  target="_blank"
                >
                  understaffing
                </a>{" "}
                the teams intended to combat election interference and
                mis/disinformation. Our work seeks to track the ebbs and flows
                of these decisions over time.
              </p>
              <p className={paragraphStyle}>
                As we approach the 2024 US election cycle, we anticipate
                further, potentially significant, changes in how platforms
                handle election-related content. The Tracker documents these
                shifts by capturing specific policy changes, strategic platform
                design choices, and key decisions, alongside other newsworthy
                events that shape the broader information landscape. While some
                policies are US-focused, many reflect broader platform
                strategies with global implications—especially important in a
                year when nearly{" "}
                <a
                  href="https://time.com/6550920/world-elections-2024//"
                  target="_blank"
                >
                  half the world&apos;s nations
                </a>{" "}
                will hold national elections. We created the Tracker to support
                those interested in understanding information landscapes,
                elections, and the complex relationship between technology
                companies, platforms, and democratic processes.
              </p>
            </div>

            <div className={sectionStyle}>
              <hgroup>
                <h2 className={headingStyle} id="methods">
                  Methods
                </h2>
              </hgroup>
              <p className={subtitleStyle}>
                How Did We Create the Social Media Election Policy Tracker?
              </p>
              <p className={paragraphStyle}>
                The data presented in this tracker starts in the wake of the
                2016 US presidential election and is drawn from review of social
                media companies&apos; blog posts; corporate reports and
                presentations made available to the public; Congressional
                testimony; date stamped Terms and Conditions; and media
                coverage. Where possible, we traced evolution in company
                policies in archived websites (using the web archive Wayback
                Machine), although this was complicated by changing URLs. We
                anticipate this will continue to happen, showcasing the
                importance of maintaining this archive of policies.
              </p>
              <p className={paragraphStyle}>
                We chose to include the following social media platforms for
                several reasons:
              </p>
              <ol className={listStyle}>
                <li className={orderedListItemStyle}>
                  <strong>Number of Users:</strong> YouTube and Facebook are the
                  most{" "}
                  <a
                    href="https://www.pewresearch.org/internet/fact-sheet/social-media/"
                    target="_blank"
                  >
                    widely used
                  </a>{" "}
                  online platforms, followed by Instagram. We group these by
                  companies, Google being the parent company of YouTube and Meta
                  being the parent company of Facebook, Instagram, and Threads.
                </li>

                <li className={orderedListItemStyle}>
                  <strong>Notoriety and Impact:</strong> Twitter—or X—and TikTok
                  are lower in users but have been particularly newsworthy given
                  concerns of{" "}
                  <a
                    href="https://www.brookings.edu/articles/the-tiktok-debacle-distinguishing-between-foreign-influence-and-interference/"
                    target="_blank"
                  >
                    foreign influence
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://cepr.org/voxeu/columns/how-twitter-affected-2016-presidential-election"
                    target="_blank"
                  >
                    demonstrable impacts
                  </a>{" "}
                  on elections. Some other platforms, such as Pinterest and
                  LinkedIn, have more users but less impact in this context. We
                  note, however, that they are also less studied.
                </li>

                <li className={orderedListItemStyle}>
                  <strong>Diversity in Sample:</strong> We also include examples
                  of significantly smaller apps like Gab and Parler that are
                  advertised and used as{" "}
                  <a
                    href="https://www.businessinsider.com/what-is-gab-social-media-platform-free-speech-first-amendment-2021-1"
                    target="_blank"
                  >
                    alternate platforms
                  </a>{" "}
                  to the bigger players and widely known as means for
                  circulating election-related information. They often showcase
                  a different orientation towards policy than the more widely
                  adopted platforms and are helpful data points for comparison.
                </li>
              </ol>
            </div>

            <div className={sectionStyle}>
              <hgroup>
                <h2 className={headingStyle} id="mechanics">
                  Mechanics
                </h2>
                <p className={subtitleStyle}>
                  How Do I Use the Social Media Election Policy Tracker?
                </p>
              </hgroup>
              <p className={paragraphStyle}>
                You may choose between different viewing options (the full
                timeline and a platform comparison timeline) and other
                policy-type filtering abilities while using the Tracker. For
                each policy record you will find a title describing the policy,
                source(s), and expandable details that overview the policy
                change as per source materials.{" "}
              </p>

              <ul className={listStyle}>
                <li className={listItemStyle}>
                  <p>
                    <strong>
                      <a href="/social-media-election-policies/timeline">
                        Full timeline
                      </a>
                      :
                    </strong>{" "}
                    This view will show all selected categories on a single
                    timeline. Here, you can filter by platform, as well as by
                    category. Please note, some fall under more than one
                    category and as such are double tagged. The categories
                    include:
                  </p>
                  <ul className={listStyle}>
                    <li className={listItemStyle}>
                      <strong>Content Moderation:</strong> Policies and tools
                      for addressing misinformation, hate speech, and other
                      forms of harmful content.
                    </li>

                    <li className={listItemStyle}>
                      <strong>Staffing:</strong> Changes in election integrity
                      teams.
                    </li>

                    <li className={listItemStyle}>
                      <strong>Tools:</strong> The creation of a new tool or
                      assessment technique that has been developed regarding
                      issues surrounding election information, election
                      integrity, or political advertising.
                    </li>

                    <li className={listItemStyle}>
                      <strong>Election Interference:</strong> Policies and
                      actions related to combating election interference or
                      those related to voter suppression.
                    </li>

                    <li className={listItemStyle}>
                      <strong>Voting:</strong> Actions aimed at promoting voting
                      or other general voting issues not related to election
                      interference.
                    </li>

                    <li className={listItemStyle}>
                      <strong>Political Advertising:</strong> Policies and tools
                      governing political ads.
                    </li>

                    <li className={listItemStyle}>
                      <strong>Major Platform Actions:</strong> Platform-wide
                      changes or decisions regardless of the specific categories
                      they might affect; meant to capture high-level or
                      wide-scope platform actions.
                    </li>
                  </ul>
                </li>
                <li className={listItemStyle}>
                  <strong>
                    <a href="/social-media-election-policies/compare">
                      Comparison timeline
                    </a>
                    :
                  </strong>{" "}
                  Here you can view side by side comparisons of up to three
                  platforms. To change the platforms, click the down arrow next
                  to the platform name. If you wish to add a third platform for
                  comparison, click the <code>+Add</code> button in the upper
                  right.
                </li>
              </ul>
            </div>

            <div className={sectionStyle}>
              <hgroup>
                <h2 className={headingStyle} id="limitations_and_implications">
                  Limitations and Implications
                </h2>
                <p className={subtitleStyle}>
                  What Else Should I Consider When Using the Tracker?
                </p>
              </hgroup>

              <p className={paragraphStyle}>
                We faced many constraints when compiling the data displayed in
                this tracker including limitations on finding information,
                difficult decisions about what to include and exclude, and the
                quality of the information available to us regarding these
                policies. Indeed, it is important to understand that many of the
                decisions in the Tracker were reported and framed by the
                companies who run the social media platforms, meaning there was
                a specific rhetorical bent to the release of information.
              </p>
              <p className={paragraphStyle}>
                Content moderation policies include a wide range of concerns,
                often touching on spam, hate speech, monetization, sexual
                exploitation, bullying and more. Some of these policies,
                although critical, are outside the direct domain of elections;
                though they can certainly be applied to election-related posts.
                Others, such as policies pertaining to fraud, spam,
                misinformation and inauthentic behavior have variable
                application to election content. We used our judgment as to what
                falls within our stated parameters but recognize that
                inclusion/exclusion of specific policies and events is subject
                to debate.
              </p>
              <p className={paragraphStyle}>
                One challenge in documentation is the quiet retirement of
                policies and tools. Social media companies make a practice of
                publicly rolling out new tools and functions aimed at election
                integrity. However, they are not consistently open and
                transparent concerning the discontinuation of these tools (there
                are exceptions, such as Twitter&apos;s{" "}
                <a
                  href="https://blog.x.com/en_us/topics/company/2020/2020-election-update"
                  target="_blank"
                >
                  postmortem
                </a>{" "}
                of the 2020 election). Unless we found documentation that a tool
                had been discontinued, it is our assumption that it will
                continue to be utilized in future election cycles. Sometimes,
                this assumption will be proven false.
              </p>
              <p className={paragraphStyle}>
                Noting these constraints and limitations, we recognize that this
                tracker is not exhaustive. Nonetheless, we have endeavored to
                create a resource that is both thorough and focused on how
                social media giants have evolved their policies towards
                election-relevant content and integrity.{" "}
              </p>
              <p className={paragraphStyle}>
                This tracker is still in development as we continue to research
                and add social media election policy records. We intend to
                continue to update this tracker monthly.
              </p>
              <p className={paragraphStyle + " font-bold"}>
                <span className="block">Questions or things we’ve missed?</span>
                We invite you to reach out to us at{" "}
                <a href="mailto:cyber@pitt.edu">cyber@pitt.edu</a>.
              </p>
            </div>
            <footer className="hidden pt-2 text-sm lg:block">
              <address className="block pb-2">
                Built by{" "}
                <a
                  className="font-bold text-stone-800"
                  target="_blank"
                  href="mailto:steven.saylor@pitt.edu"
                >
                  Steve Saylor
                </a>{" "}
                at the{" "}
                <a
                  className="text-stone-800 "
                  target="_blank"
                  href="https://ucsur.pitt.edu/"
                >
                  University of Pittsburgh Center for Social and Urban Research
                </a>
              </address>

              <a
                className="text-stone-800"
                target="_blank"
                href="https://github.com/WPRDC/pdl-social-media-policy-tracker"
              >
                See Source Code
              </a>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
