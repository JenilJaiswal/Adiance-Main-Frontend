"use client";

import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

const PrivacyPolicy = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>Privacy & Cookie Policy - Adiance Technologies</title>
        <meta
          name="description"
          content="Explore cookies, tracking options, and third-party services in Adiance Technologies' Privacy & Cookie Policy. Manage preferences and safeguard your data."
        />
        <meta name="keywords" content="privacy policy, cookie policy, Adiance data protection" />
        <meta property="og:title" content="Privacy & Cookie Policy - Adiance Technologies" />
        <meta property="og:description" content="Explore cookies, tracking options, and third-party services in Adiance Technologies' Privacy & Cookie Policy. Manage preferences and safeguard your data." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Privacy & Cookie Policy - Adiance Technologies" />
        <meta name="twitter:description" content="Explore cookies, tracking options, and third-party services in Adiance Technologies' Privacy & Cookie Policy." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Privacy & Cookie Policy"} />
      <div style={{ margin: "5% 10%" }}>
        <Typography variant="h6" gutterBottom>
          Last updated: January 25th, 2021
        </Typography>
        <Typography variant="body1" paragraph>
          <br />
          Adiance(“Adiance”, “We” or “Our”) has drafted this Privacy Policy to
          ensure that you can clearly understand our personal information
          practices as you use Adiance (the “Sites”). This Privacy Policy
          describes the types of information we collect, how we use the
          information, with whom we share it, and the choices you can make about
          our collection, use, and disclosure of your information. We also
          describe in this Privacy Policy the measures we take to protect the
          security of your Personal Information and how you can contact us about
          our privacy practices.
          <br /> <br />
          This Privacy Policy incorporates by reference the Terms of Use for the
          Sites, which apply to this Privacy Policy. When you visit the Sites or
          provide us with information, you consent to our use and disclosure of
          the information we collect or receive as described in this Privacy
          Policy and you agree to be bound by the terms and conditions of the
          policy.
          <br /> <br />
          Please review this Privacy Policy periodically as we may update it
          from time to time to reflect changes in our data practices.
        </Typography>
        <ol>
          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              THE INFORMATION WE COLLECT
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  We may obtain information about you from various sources,
                  including our Sites, when you call or email us or communicate
                  with us through social media, or when you participate in an
                  Event. An “Event” is an online gathering that includes
                  registration before the event begins, activities between the
                  event’s start and end time, and after the event’s end time. We
                  also may obtain information about you from business partners
                  and other third parties and publicly available information,
                  including from our customers prior to or during an event. We
                  may collect your information at different points in connection
                  with our business and the Sites, including your registration,
                  profile submissions, use of the Sites, interactions with us,
                  and during an Event.
                </li>
                <li>
                  The types of information we may obtain include:
                  <ol>
                    <li>
                      Personal Information: Information that identifies you,
                      such as your name, password, email address, address, phone
                      number(s), and photographic image. In some locations,
                      Personal Information may have a broader definition under
                      an applicable law, and in these jurisdictions your rights
                      with respect to Personal Information will be governed by
                      the broader definition.
                    </li>
                    <li>
                      Demographic Information: Information such as zip code,
                      country, years of work experience, skills, industry,
                      certifications, degrees, etc. This is collected to help
                      you connect with other event participants like exhibitors.
                    </li>
                    <li>
                      Preference Information: Information such as preferred time
                      zone or whether to show a dialog on your next visit. This
                      is collected to personalize your experience on the Sites.
                    </li>
                    <li>
                      Content Submissions: Any information that you submit on
                      forms, blogs, social media pages, through file uploads, or
                      via online chats as part of an Event.
                    </li>
                    <li>
                      Anonymous Information: Information such as pages visited
                      and time spent on the Sites. This is collected to
                      understand how the Sites are being used and what the
                      engagement is like.
                    </li>
                  </ol>
                </li>
                <li>
                  We collect information stored in your social media profile
                  that you authorize us to access when you use your social media
                  profile to execute features on the Sites, such as the ability
                  to log into the Sites using your social media profile
                  credentials.
                </li>
                <li>
                  In addition, when you visit our Sites, we may collect certain
                  information by automated means, such as cookies and web
                  beacons, as described in more detail below. The information we
                  may collect by automated means includes, but is not limited
                  to:
                  <ol>
                    <li>
                      Information about the devices our visitors use to access
                      the Internet (such as the IP address and the device,
                      browser, and operating system type).
                    </li>
                    <li>
                      Pages and URLs that refer visitors to our Sites, also
                      pages and URLs that visitors exit to once they leave our
                      Sites.
                    </li>
                    <li>Dates and times of visits to our Sites.</li>
                    <li>
                      Information on actions taken on our Sites (such as page
                      views, site navigation patterns, or application activity).
                    </li>
                    <li>
                      A general geographic location (such as country and city)
                      from which a visitor accesses our Sites.
                    </li>
                    <li>Search terms that visitors use to reach our Sites.</li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              HOW WE USE THE INFORMATION WE COLLECT
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  We may use the information we obtain about you to:
                  <ol>
                    <li>
                      Create, manage, and maintain your account on the Sites.
                    </li>
                    <li>
                      Provide you with the Sites and other services that you
                      request.
                    </li>
                    <li>
                      Manage your participation in events hosted on the Sites,
                      where you have signed up for such events and promotions.
                    </li>
                    <li>
                      Maintain a record of the events in which you participate,
                      including chat and webinar history and download activity.
                    </li>
                    <li>
                      Enable you to interact with other event participants.
                    </li>
                    <li>
                      Provide administrative notices or communications
                      applicable to your use of the Sites.
                    </li>
                    <li>
                      Respond to your questions and comments and provide
                      customer support.
                    </li>
                    <li>
                      Operate, evaluate, and improve our business and the
                      products and services we offer.
                    </li>
                    <li>
                      Analyze and enhance our marketing communications and
                      strategies (including by identifying when emails we have
                      sent to you have been received and read).
                    </li>
                    <li>
                      Analyze trends and statistics regarding visitors’ use of
                      our Sites, mobile applications, and social media assets,
                      and the jobs viewed or applied to on our Sites.
                    </li>
                    <li>
                      Maintain the quality of the Sites, including detecting
                      security incidents and protecting against malicious,
                      deceptive, illegal, or fraudulent activities.
                    </li>
                    <li>
                      Notify you from time to time about relevant products and
                      services operated by Adiance.
                    </li>
                    <li>Enforce our Sites’ Terms of Use and legal rights.</li>
                    <li>
                      Comply with applicable legal requirements and industry
                      standards and our policies.
                    </li>
                  </ol>
                </li>
                <li>
                  We also use non-personally identifiable information and
                  certain technical information about your computer and your
                  access to the Sites (including your internet protocol address)
                  in order to operate, maintain, and manage the Sites.
                </li>
                <li>
                  We collect this information by automated means, such as
                  cookies and web beacons, as described in more detail below.
                </li>
                <li>
                  We may collect, compile, store, publish, promote, report,
                  share, or otherwise disclose or use any and all Aggregated
                  Information; however, unless otherwise disclosed in this
                  policy, we will not sell or otherwise transfer or disclose
                  your Personal Information to a third party without your
                  consent.
                </li>
                <li>
                  If we seek to use the information we obtain about you in other
                  ways, we will provide specific notice and request your consent
                  at the time of collection.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              THE INFORMATION WE SHARE
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  When you create an account on the Sites, Adiance will collect
                  and retain information about you, some of which is Personal
                  Information.
                </li>
                <li>
                  You may be required to provide additional personal or
                  demographic information when registering for an Event hosted
                  on the Sites including, but not limited to, photo, resume,
                  work experience, educational qualification, location, skills,
                  industry.
                </li>
                <li>
                  The information you provide is collected by Adiance, and is
                  shared with the company(ies) participating in the Event, which
                  may be a customer or a Third Party.
                </li>
                <li>
                  This includes personal information such as name, email
                  address, resume, and other questions you answer during the
                  registration process.
                </li>
                <li>
                  This also includes the conversation (chat) history from
                  conversations with any other participant and/or organization.
                </li>
                <li>
                  If providing information for an Event, this information may
                  become subject to the policies of the respective company(ies)
                  after it has been shared, as Adiance is not responsible for
                  these policies.
                </li>
                <li>
                  Providing additional information beyond what is required at
                  registration is entirely optional, but enables you to better
                  identify yourself.
                </li>
                <li>
                  We may share your Personal Information with third-party
                  contractors or service providers to provide you with the
                  services that we offer you through our Sites; to provide
                  technical support, or to provide specific services in
                  accordance with your instructions.
                </li>
                <li>
                  These third parties are required not to use your Personal
                  Information other than to provide the services requested by
                  Adiance.
                </li>
                <li>
                  We may also disclose specific user information when we
                  determine, in good faith, that such disclosure is necessary to
                  comply with the law, to cooperate with or seek assistance from
                  law enforcement, to prevent a crime or protect national
                  security, or to protect the interests or safety of Adiance,
                  our customers, or other users of the Sites.
                </li>
                <li>
                  You should be aware that any Personal Information you submit
                  on the Sites may be read, collected, or used by other users of
                  Adiance, and could be used to send you unsolicited messages.
                </li>
                <li>
                  In addition, any personal information you submit in an Event
                  can be read, collected, or used by participating companies,
                  and could be used to send you unsolicited messages.
                </li>
                <li>
                  We are not responsible for the Personal Information you choose
                  to submit to the Sites.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              HOW WE PROTECT PERSONAL INFORMATION
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Adiance maintains administrative, technical and physical
                  safeguards designed to assist us in protecting the Personal
                  Information we collect against accidental, unlawful or
                  unauthorized destruction, loss, alteration, access, disclosure
                  or use.
                </li>
                <li>
                  Please note that no electronic transmission of information can
                  be entirely secure. We cannot guarantee that the security
                  measures we have in place to safeguard Personal Information
                  will never be defeated or fail, or that those measures will
                  always be sufficient or effective. Therefore, although we are
                  committed to protecting your privacy, we do not promise, and
                  you should not expect, that your Personal Information will
                  always remain private. As a user of the Sites, you understand
                  and agree that you assume all responsibility and risk for your
                  use of the Sites, the internet generally, and the documents
                  you post or access and for your conduct on and off the Sites.
                  To further protect yourself, you should safeguard your Adiance
                  Sites username and password and not share that information
                  with anyone. You should also log off from and close your
                  browser window when you have finished your visit to our Sites.
                  Please note that we will never ask for your Adiance account
                  password via email.
                </li>
                <li>
                  Adiance does not safeguard your Personal Information from our
                  customers when they are acting as the controller of your
                  Personal Information, including when held by our customers
                  outside of the Sites. They are responsible for handling
                  Personal Information in accordance with their privacy
                  policies.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              HOW TO UPDATE YOUR PERSONAL INFORMATION
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  You may access, update and amend Personal Information included
                  in your online account at any time by logging into your
                  account and making the necessary changes.
                </li>
                <li>
                  You may choose to deactivate your account at any time by
                  emailing us at info@Adiance.com. When we deactivate your
                  account, you will be logged out of Adiance and you will no
                  longer be able to log into Adiance to view the events you
                  attended or the chats you had with other participants. Certain
                  information in connection with your account may be retained
                  after deactivation by Adiance or by the participants who it
                  has already been shared with pursuant to this privacy policy.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              ABOUT COOKIES, TRACKING CHOICES, AND THIRD PARTY SERVICE PROVIDERS
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  A “cookie” is a text file that websites send to a visitor’s
                  computer or other Internet-connected devices to uniquely
                  identify the visitor’s browser or to store information or
                  settings in the browser.
                </li>
                <li>
                  A “web beacon” is also called a Web bug or a pixel tag or a
                  clear GIF. Used in combination with cookies, a web beacon is
                  an often-transparent graphic image, usually no larger than
                  1-pixel x 1-pixel, that is placed on a Web site or in an
                  e-mail that is used to monitor the behavior of the user
                  visiting the Website or sending the e-mail.
                </li>
                <li>
                  Adiance uses cookies and other similar technologies for the
                  convenience of our users.
                </li>
                <li>
                  Cookies enable us to serve secure pages to our users without
                  asking them to sign in repeatedly.
                </li>
                <li>
                  Adiance also uses cookies to store non-personally identifying
                  information such as your preferences.
                </li>
                <li>
                  Adiance also uses cookies to ensure the proper functioning and
                  efficiency of our Sites.
                </li>
                <li>
                  Most Internet browsers enable you to erase cookies from your
                  computer hard drive, block all cookies, or receive a warning
                  before a cookie is stored. Please be aware that our Sites
                  cannot be used without cookies enabled. Our Sites also do not
                  respond to web browser “do not track” requests.
                </li>
                <li>Adiance permits third-party cookies on its Sites.</li>
                <li>
                  For example, third-party services located on the Sites,
                  including those that allow for single sign-on, commenting,
                  live chat and social media sharing, may use cookies to
                  remember user preference settings and interaction history.
                </li>
                <li>
                  The third-party vendors, including Google, whose services we
                  use – will place cookies on web browsers in order to serve ads
                  based on past visits to our website.
                </li>
                <li>
                  This allows us to make special offers and continue to market
                  our services to those who have shown interest in our service.
                </li>
                <li>
                  The companies that provide third-party tools and services such
                  as commenting operate under their own privacy policies and
                  Adiance encourages you to be aware of the privacy policies of
                  such companies.
                </li>
                <li>
                  Adiance does not have control over or access to any
                  information contained in the cookies that are set on your
                  computer by third-party tool providers.
                </li>
                <li>
                  There are many resources on the Internet that can provide you
                  guidance regarding deleting or disabling cookies.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              INTERNATIONAL TRANSFER OF YOUR PERSONAL INFOMRATION
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  The Sites are hosted in the United States and any personal
                  information that we collect from you is currently stored in
                  the United States. If you are accessing the Sites outside of
                  the U.S., you consent to the transfer of your personal
                  information to the United States when you register. Please be
                  advised that United States law may not offer the same privacy
                  protections as the law in your jurisdiction.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              LINKS TO OTHER SITES
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Content on our Sites may contain links to other sites that are
                  not owned or controlled by Adiance. Please be aware that we
                  are not responsible for the privacy practices of such other
                  sites. We encourage you to be aware when you leave our Sites
                  and to read the privacy statements of each and every website
                  that collects Personal Information. This Privacy Policy
                  applies only to information collected on Adiance.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              DISPUTES
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  If you believe that we have not adhered to the Privacy Policy,
                  please contact us by e-mail at info@Adiance.com. We will do
                  our best to address your concerns. If you feel that your
                  complaint has been addressed incompletely, we invite you to
                  let us know for further investigation.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              CHILDREN’S PRIVACY
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Children under the age of 13 (or other age as required by
                  local law) are permitted to use the site ONLY as part of an
                  approved agreement with a customer providing for children’s
                  data.
                </li>
                <li>
                  Children under 13 years old (or other age as required by local
                  law) are otherwise prohibited from using the site.
                </li>
                <li>
                  If you are a parent or guardian and you are aware that your
                  child has provided us with personal data that is not part of
                  an approved customer relationship, please contact us
                  immediately.
                </li>
                <li>
                  If we learn that we have collected any personal data in
                  violation of applicable law, we will promptly take steps to
                  delete such information and terminate the child’s account.
                </li>
                <li>
                  For such customer accounts, Adiance involves the collection
                  and maintenance of personal data about children under 13, as
                  well as other personal data of students as applicable, through
                  the site.
                </li>
                <li>
                  It is operated by: 14, Empire Tower, First Floor, Nr.
                  Associated Petrol Pump, C. G. Road, Ahmedabad-380009.
                </li>
                <li>
                  Please contact Adiance at info@Adiance.com with any questions
                  about the collection, use and sharing of children’s personal
                  data.
                </li>
                <li>
                  The information collected about children under 13, as well as
                  other personal data of students, includes: name and email
                  address.
                </li>
                <li>
                  The information about children under 13, as well as other
                  personal data of students, is or may be used for: account
                  creation, user verification, deliver the products and
                  services, share content between users, user interaction,
                  customer support, user communication, prevent fraud, detect
                  security incidents, analytics, respond to legal inquiries or
                  terminate accounts.
                </li>
                <li>
                  The information about children under 13, as well as other
                  personal data of students, is disclosed to: service providers
                  and vendors (including for the purposes as agreed per T&C,
                  other authorized users with whom the child or student shares
                  and/or communicates, government and/or legal requestors as
                  required by law, and others as necessary (based on the
                  appropriate consent of the school and/or parent / legal
                  guardian).
                </li>
                <li>
                  No child or student personal data is made available to the
                  public by Adiance.
                </li>
                <li>
                  Children may make their personal data available to other
                  authorized users as part of the services.
                </li>
                <li>
                  The parent of a child under 13 or a student (subject to an
                  applicable law) can review or have deleted the personal data
                  held by Adiance and refuse to permit its further collection or
                  use.
                </li>
                <li>
                  A parent may do so by notifying the customer (e.g., school)
                  through their designated contact mechanism and/or notifying
                  Adiance via info@Adiance.com.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              YOUR PRIVACY RIGHTS
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Depending on your location, you may have the right to exercise
                  certain privacy rights under applicable laws, including the
                  right of erasure, the right to object to processing, the right
                  to restrict processing, and the right to access / data
                  portability. To exercise any of the above rights, please
                  contact us at the email address listed below. In order to
                  comply with your request, we may have to verify your identity.
                  If we are processing your Personal Information on behalf of
                  our customer, we will direct you to instead make your request
                  to our customer, or may, in some instances, contact the
                  customer directly on your behalf.
                </li>
                <li>
                  You may also have the right to make a complaint to the
                  relevant authorities in your jurisdiction. If you need further
                  assistance regarding your rights, please contact us at the
                  email address listed below and we will consider your request
                  in accordance with applicable law.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              GENERAL DATA PROTECTION REGULATION (GDPR)
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Adiance will comply with all applicable data protection and
                  privacy laws & regulations in the performance of its
                  obligations under the General Data Protection Regulation
                  (“GDPR”, from the GDPR implementation date) or, until GDPR
                  implementation date, the Data Protection Act 1998 (“Data
                  Protection Laws”).
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              PRIVACY POLICY UPDATES
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  If we decide to make material changes to our Privacy Policy,
                  we will notify you by prominently posting notice of the
                  changes on the Site and updating the date at the top of the
                  Privacy Policy. Therefore, we encourage you to check the date
                  of our Privacy Policy whenever you visit the website for any
                  updates or changes.
                </li>
                <li>
                  We understand that changes to this Privacy Policy may affect
                  your decision to use our Sites. You have the option to
                  deactivate your account for any reason. Continued use of our
                  Sites and their services following notice of such changes
                  shall indicate your acknowledgment of such changes and
                  agreement to be bound by the terms and conditions of such
                  changes.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              HOW TO CONTACT US
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  If you have any questions or comments about this Privacy
                  Policy or our use of your personal information, or to exercise
                  your rights, please contact us at info@Adiance.com.
                </li>
              </ul>
            </Typography>
          </li>
          {/* Additional list items go here */}
        </ol>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
