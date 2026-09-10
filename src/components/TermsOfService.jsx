"use client";

import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "@/compat/react-router-dom";

const TermsOfService = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>Terms of Service - Adiance Technologies</title>
        <meta
          name="description"
          content="Review Adiance Technologies' Terms of Service to understand our policies, responsibilities, and guidelines for using our products and services."
        />
        <meta name="keywords" content="terms of service, Adiance policies" />
        <meta property="og:title" content="Terms of Service - Adiance Technologies" />
        <meta property="og:description" content="Review Adiance Technologies' Terms of Service to understand our policies, responsibilities, and guidelines for using our products and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <meta name="twitter:title" content="Terms of Service - Adiance Technologies" />
        <meta name="twitter:description" content="Review Adiance Technologies' Terms of Service to understand our policies and guidelines." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Terms of service"} />
      <div style={{ margin: "5% 10%" }}>
        {/* Checklist heading-hierarchy audit (2026-09-10): was variant="h6" with
            no `component` override, so MUI rendered a real <h6> here — right
            after the page's now-real <h1> (NavHeader), skipping h2-h5. This
            line isn't a content heading anyway, so it's now a <p>, not a
            heading at all; the real section titles below become <h2>. */}
        <Typography variant="h6" component="p" gutterBottom>
          Last updated: January 25th, 2021
        </Typography>
        <Typography variant="body1" paragraph>
          <br />
          These terms apply to all Adiance products.
        </Typography>
        <ol>
          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Your relationship with Adiance
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Your use of Adiance’s products, software, services and web
                  sites (referred to collectively as the “Services” in this
                  document) is subject to the terms of a legal agreement between
                  you and Adiance. This document explains how the agreement is
                  made up, and sets out some of the terms of that agreement.
                </li>
                <li>
                  Unless otherwise agreed in writing with Adiance, your
                  agreement with Adiance will always include, at a minimum, the
                  terms and conditions set out in this document.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Accepting the Terms
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  In order to use the Services, you must first agree to the
                  Terms. You may not use the Services if you do not accept the
                  Terms.
                </li>
                <li>
                  You can accept the Terms by:
                  <ol>
                    <li>
                      clicking to accept or agree to the Terms, where this
                      option is made available to you by Adiance in the user
                      interface for any Service; or
                    </li>
                    <li>
                      by actually using the Services.In this case,you understand
                      and agree that Adiance will treat your use of the Services
                      as acceptance of the Terms from that point onwards
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Language of the Terms
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Where Adiance has provided you with a translation of the
                  English language version of the Terms, then you agree that the
                  translation is provided for your convenience only and that the
                  English language versions of the Terms will govern your
                  relationship with Adiance.
                </li>
                <li>
                  If there is any contradiction between what the English
                  language version of the Terms says and what a translation
                  says, then the English language version shall take precedence.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Provision of the Services by Adiance
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Adiance is constantly innovating in order to provide the best
                  possible experience for its users. You acknowledge and agree
                  that the form and nature of the Services which Adiance
                  provides may change from time to time without prior notice to
                  you.
                </li>
                <li>
                  As part of this continuing innovation, you acknowledge and
                  agree that Adiance may stop (permanently or temporarily)
                  providing the Services (or any features within the Services)
                  to you or to users generally at Adiance’s sole discretion,
                  without prior notice to you. You may stop using the Services
                  at any time. You do not need to specifically inform Adiance
                  when you stop using the Services.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Use of the Services by you
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  You agree to use the Services only for purposes that are
                  permitted by (a) the Terms and (b) any applicable law,
                  regulation or generally accepted practices or guidelines in
                  the relevant jurisdictions (including any laws regarding the
                  export of data or software to and from the United States or
                  other relevant countries).
                </li>
                <li>
                  You agree that you will not engage in any activity that
                  interferes with or disrupts the Services (or the servers and
                  networks which are connected to the Services).
                </li>
                <li>
                  Unless you have been specifically permitted to do so in a
                  separate agreement with Adiance, you agree that you will not
                  reproduce, duplicate, copy, sell, trade or resell the Services
                  for any purpose.
                </li>
                <li>
                  You agree that you are solely responsible for (and that
                  Adiance has no responsibility to you or to any third party
                  for) any breach of your obligations under the Terms and for
                  the consequences (including any loss or damage which Adiance
                  may suffer) of any such breach.
                </li>
                <li>
                  You agree that you cannot impersonate any real or fictional
                  person or entity or perform any fraudulent activity. You must
                  be at least 13 years old to use the Services.
                </li>
                <li>
                  Upon signing up for the Services, you agree to receive email
                  communications from Adiance, which is important for Adiance to
                  deliver the Services to you.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Privacy and your personal information
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  For information about Adiance’s data protection practices,
                  please read Adiance’s privacy policy.
                </li>
                <li>
                  You agree to the use of your data in accordance with Adiance’s
                  privacy policies.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Content in the Services
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  You understand that all information (such as data files,
                  written text, computer software, music, audio files or other
                  sounds, photographs, videos or other images) which you may
                  have access to as part of, or through your use of, the
                  Services are the sole responsibility of the person from which
                  such content originated. All such information is referred to
                  below as the “Content”.
                </li>
                <li>
                  Prohibited Content: You agree that you will not send, display,
                  post, submit, publish or transmit Content that: (i) is unfair
                  or deceptive under the consumer protection laws of any
                  jurisdiction; (ii) is copyrighted, protected by trade secret
                  or otherwise subject to third party proprietary rights,
                  including privacy and publicity rights, unless you are the
                  owner of such rights; (iii) creates a risk to a person’s
                  safety or health, creates a risk to public safety or health,
                  compromises national security, or interferes with an
                  investigation by law enforcement; (iv) impersonates another
                  person; (v) promotes illegal drugs, violates export control
                  laws, relates to illegal gambling, or illegal arms
                  trafficking; (vi) is unlawful, defamatory, libelous,
                  threatening, pornographic, harassing, hateful, racially or
                  ethnically offensive, or encourages conduct that would be
                  considered a criminal offense, gives rise to civil liability,
                  violates any law, or is otherwise dishonest, inaccurate,
                  inappropriate, malicious or fraudulent; (vii) involves theft
                  or terrorism; (viii) constitutes an unauthorized commercial
                  communication; (ix) contains the contact information or any
                  personally identifiable information of any third party unless
                  you have first obtained the express consent of said third
                  party to include their contact information or personally
                  identifiable information; and/or (x) breaches this agreement.
                </li>
                <li>
                  Adiance reserves the right (but shall have no obligation) to
                  pre-screen, review, flag, filter, modify, refuse or remove any
                  or all Content from any Service without further notice to you.
                  We have complete discretion whether to publish your Content
                  and have the right to delete any and all Content at any time
                  which we believe to be in violation of the “Prohibited
                  Content”.
                </li>
                <li>
                  You should be aware that Content presented to you as part of
                  the Services, including but not limited to advertisements in
                  the Services and sponsored Content within the Services may be
                  protected by intellectual property rights which are owned by
                  the sponsors or advertisers who provide that Content to
                  Adiance (or by other persons or companies on their behalf).
                  You may not modify, rent, lease, loan, sell, distribute or
                  create derivative works based on this Content (either in whole
                  or in part) unless you have been specifically told that you
                  may do so by Adiance or by the owners of that Content, in a
                  separate agreement.
                </li>
                <li>
                  You understand that by using the Services you may be exposed
                  to Content that you may find offensive, indecent or
                  objectionable and that, in this respect, you use the Services
                  at your own risk.
                </li>
                <li>
                  You agree that you are solely responsible for (and that
                  Adiance has no responsibility to you or to any third party
                  for) any Content that you create, transmit or display while
                  using the Services and for the consequences of your actions
                  (including any loss or damage which Adiance may suffer) by
                  doing so.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Other content
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  The Services may include hyperlinks to other web sites or
                  content or resources. Adiance may have no control over any web
                  sites or resources which are provided by companies or persons
                  other than Adiance.
                </li>
                <li>
                  You acknowledge and agree that Adiance is not responsible for
                  the availability of any such external sites or resources, and
                  does not endorse any advertising, products or other materials
                  on or available from such web sites or resources.
                </li>
                <li>
                  You acknowledge and agree that Adiance is not liable for any
                  loss or damage which may be incurred by you as a result of the
                  availability of those external sites or resources, or as a
                  result of any reliance placed by you on the completeness,
                  accuracy or existence of any advertising, products or other
                  materials on, or available from, such web sites or resources.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Proprietary rights
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  You acknowledge and agree that Adiance owns all legal right,
                  title and interest in and to the Services, including any
                  intellectual property rights which subsist in the Services
                  (whether those rights happen to be registered or not, and
                  wherever in the world those rights may exist).
                </li>
                <li>
                  Unless you have agreed otherwise in writing with Adiance,
                  nothing in the Terms gives you a right to use any of Adiance’s
                  trade names, trademarks, service marks, logos, domain names,
                  and other distinctive brand features.
                </li>
                <li>
                  If you have been given an explicit right to use any of these
                  brand features in a separate written agreement with Adiance,
                  then you agree that your use of such features shall be in
                  compliance with that agreement, any applicable provisions of
                  the Terms, and Adiance’s brand feature use guidelines as
                  updated from time to time.
                </li>
                <li>
                  Adiance acknowledges and agrees that it obtains no right,
                  title or interest from you (or your licensors) under these
                  Terms in or to any Content that you submit, post, transmit or
                  display on, or through, the Services, including any
                  intellectual property rights which subsist in that Content
                  (whether those rights happen to be registered or not, and
                  wherever in the world those rights may exist). Unless you have
                  agreed otherwise in writing with Adiance, you agree that you
                  are responsible for protecting and enforcing those rights and
                  that Adiance has no obligation to do so on your behalf.
                </li>
                <li>
                  You agree that you shall not remove, obscure, or alter any
                  proprietary rights notices (including copyright and trademark
                  notices) which may be affixed to or contained within the
                  Services.
                </li>
                <li>
                  Unless you have been expressly authorized to do so in writing
                  by Adiance, you agree that in using the Services, you will not
                  use any trademark, service mark, trade name, logo of any
                  company or organization in a way that is likely or intended to
                  cause confusion about the owner or authorized user of such
                  marks, names or logos.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              License from Adiance
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Adiance gives you a personal, worldwide, royalty-free,
                  non-assignable and non-exclusive license to use the software
                  provided to you by Adiance as part of the Services as provided
                  to you by Adiance (referred to as the “Software” below). This
                  license is for the sole purpose of enabling you to use and
                  enjoy the benefit of the Services as provided by Adiance, in
                  the manner permitted by the Terms.
                </li>
                <li>
                  Subject to section 1.2, you may not (and you may not permit
                  anyone else to) copy, modify, create a derivative work of,
                  reverse engineer, decompile or otherwise attempt to extract
                  the source code of the Software or any part thereof, unless
                  this is expressly permitted or required by law, or unless you
                  have been specifically told that you may do so by Adiance, in
                  writing.
                </li>
                <li>
                  Subject to section 1.2, unless Adiance has given you specific
                  written permission to do so, you may not assign (or grant a
                  sub-license of) your rights to use the Software, grant a
                  security interest in or over your rights to use the Software,
                  or otherwise transfer any part of your rights to use the
                  Software.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Content license from you
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  You retain copyright and any other rights you already hold in
                  Content which you submit, post or display on or through, the
                  Services.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Software updates
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  The Software which you use may automatically download and
                  install updates from time to time from Adiance. These updates
                  are designed to improve, enhance and further develop the
                  Services and may take the form of bug fixes, enhanced
                  functions, new software modules and completely new versions.
                  You agree to receive such updates (and permit Adiance to
                  deliver these to you) as part of your use of the Services.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Ending your relationship with Adiance
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  The Terms will continue to apply until terminated by either
                  you or Adiance as set out below.
                </li>
                <li>
                  Adiance may at any time, terminate its legal agreement with
                  you if:
                  <ol type="a">
                    <li>
                      you have breached any provision of the Terms (or have
                      acted in manner which clearly shows that you do not intend
                      to, or are unable to comply with the provisions of the
                      Terms); or
                    </li>
                    <li>
                      Adiance is required to do so by law (for example, where
                      the provision of the Services to you is, or becomes,
                      unlawful); or
                    </li>
                    <li>
                      the partner with whom Adiance offered the Services to you
                      has terminated its relationship with Adiance or ceased to
                      offer the Services to you; or
                    </li>
                    <li>
                      Adiance is transitioning to no longer providing the
                      Services to users in the country in which you are resident
                      or from which you use the service; or
                    </li>
                    <li>
                      the provision of the Services to you by Adiance is, in
                      Adiance’s opinion, no longer commercially viable.
                    </li>
                  </ol>
                </li>
                <li>
                  Nothing in this Section shall affect Adiance’s rights
                  regarding provision of Services under Section 4 of the Terms.
                </li>
                <li>
                  When these Terms come to an end, all of the legal rights,
                  obligations and liabilities that you and Adiance have
                  benefited from, been subject to (or which have accrued over
                  time whilst the Terms have been in force) or which are
                  expressed to continue indefinitely, shall be unaffected by
                  this cessation, and the provisions of paragraph 21.1 shall
                  continue to apply to such rights, obligations and liabilities
                  indefinitely.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              EXCLUSION OF WARRANTIES
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  NOTHING IN THESE TERMS, INCLUDING SECTIONS 14 AND 15, SHALL
                  EXCLUDE OR LIMIT ADIANCE’S WARRANTY OR LIABILITY FOR LOSSES
                  WHICH MAY NOT BE LAWFULLY EXCLUDED OR LIMITED BY APPLICABLE
                  LAW. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
                  WARRANTIES OR CONDITIONS OR THE LIMITATION OR EXCLUSION OF
                  LIABILITY FOR LOSS OR DAMAGE CAUSED BY NEGLIGENCE, BREACH OF
                  CONTRACT OR BREACH OF IMPLIED TERMS, OR INCIDENTAL OR
                  CONSEQUENTIAL DAMAGES. ACCORDINGLY, ONLY THE LIMITATIONS WHICH
                  ARE LAWFUL IN YOUR JURISDICTION WILL APPLY TO YOU AND OUR
                  LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY
                  LAW.
                </li>
                <li>
                  YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE
                  SERVICES IS AT YOUR SOLE RISK AND THAT THE SERVICES ARE
                  PROVIDED “AS IS” AND “AS AVAILABLE.”
                </li>
                <li>
                  IN PARTICULAR, ADIANCE, ITS SUBSIDIARIES AND AFFILIATES, AND
                  ITS LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT:
                  <ol type="a">
                    <li>
                      YOUR USE OF THE SERVICES WILL MEET YOUR REQUIREMENTS,
                    </li>
                    <li>
                      YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED, TIMELY,
                      SECURE OR FREE FROM ERROR,
                    </li>
                    <li>
                      ANY INFORMATION OBTAINED BY YOU AS A RESULT OF YOUR USE OF
                      THE SERVICES WILL BE ACCURATE OR RELIABLE, AND
                    </li>
                    <li>
                      THAT DEFECTS IN THE OPERATION OR FUNCTIONALITY OF ANY
                      SOFTWARE PROVIDED TO YOU AS PART OF THE SERVICES WILL BE
                      CORRECTED.
                    </li>
                  </ol>
                </li>
                <li>
                  ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE
                  OF THE SERVICES IS DONE AT YOUR OWN DISCRETION AND RISK AND
                  THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR
                  COMPUTER SYSTEM OR OTHER DEVICE OR LOSS OF DATA THAT RESULTS
                  FROM THE DOWNLOAD OF ANY SUCH MATERIAL.
                </li>
                <li>
                  NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY
                  YOU FROM ADIANCE OR THROUGH OR FROM THE SERVICES SHALL CREATE
                  ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS.
                </li>
                <li>
                  ADIANCE FURTHER EXPRESSLY DISCLAIMS ALL WARRANTIES AND
                  CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING,
                  BUT NOT LIMITED TO THE IMPLIED WARRANTIES AND CONDITIONS OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                  NON-INFRINGEMENT.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              LIMITATION OF LIABILITY
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  SUBJECT TO OVERALL PROVISION IN PARAGRAPH 14.1 ABOVE, YOU
                  EXPRESSLY UNDERSTAND AND AGREE THAT ADIANCE, ITS SUBSIDIARIES
                  AND AFFILIATES, AND ITS LICENSORS SHALL NOT BE LIABLE TO YOU
                  FOR:
                  <ol type="a">
                    <li>
                      ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL CONSEQUENTIAL OR
                      EXEMPLARY DAMAGES WHICH MAY BE INCURRED BY YOU, HOWEVER
                      CAUSED AND UNDER ANY THEORY OF LIABILITY. THIS SHALL
                      INCLUDE, BUT NOT BE LIMITED TO, ANY LOSS OF PROFIT
                      (WHETHER INCURRED DIRECTLY OR INDIRECTLY), ANY LOSS OF
                      GOODWILL OR BUSINESS REPUTATION, ANY LOSS OF DATA
                      SUFFERED, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
                      SERVICES, OR OTHER INTANGIBLE LOSS;
                    </li>
                    <li>
                      ANY LOSS OR DAMAGE WHICH MAY BE INCURRED BY YOU, INCLUDING
                      BUT NOT LIMITED TO LOSS OR DAMAGE AS A RESULT OF:
                      <ol type="i">
                        <li>
                          ANY RELIANCE PLACED BY YOU ON THE COMPLETENESS,
                          ACCURACY OR EXISTENCE OF ANY ADVERTISING, OR AS A
                          RESULT OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU
                          AND ANY ADVERTISER OR SPONSOR WHOSE ADVERTISING
                          APPEARS ON THE SERVICES;
                        </li>
                        <li>
                          ANY CHANGES WHICH ADIANCE MAY MAKE TO THE SERVICES, OR
                          FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE
                          PROVISION OF THE SERVICES (OR ANY FEATURES WITHIN THE
                          SERVICES);
                        </li>
                        <li>
                          THE DELETION OF, CORRUPTION OF, OR FAILURE TO STORE,
                          ANY CONTENT AND OTHER COMMUNICATIONS DATA MAINTAINED
                          OR TRANSMITTED BY OR THROUGH YOUR USE OF THE SERVICES;
                        </li>
                        <li>
                          YOUR FAILURE TO PROVIDE ADIANCE WITH ACCURATE ACCOUNT
                          INFORMATION;
                        </li>
                        <li>
                          YOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS
                          SECURE AND CONFIDENTIAL;
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  THE LIMITATIONS ON ADIANCE’S LIABILITY TO YOU IN PARAGRAPH
                  14.1 ABOVE SHALL APPLY WHETHER OR NOT ADIANCE HAS BEEN ADVISED
                  OF OR SHOULD HAVE BEEN AWARE OF THE POSSIBILITY OF ANY SUCH
                  LOSSES ARISING.
                </li>
                <li>
                  THE TOTAL LIABILITY OF ADIANCE TO YOU FOR ALL DAMAGES, LOSSES,
                  AND CAUSES OF ACTION (WHETHER IN CONTRACT, TORT (INCLUDING
                  NEGLIGENCE), OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT
                  ACTUALLY PAID BY YOU DURING A ONE-YEAR PERIOD FOR THE SPECIFIC
                  SERVICE GIVING RISE TO THE LIABILITY.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Indemnification
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  You agree to defend, indemnify, and hold us harmless,
                  including our subsidiaries, affiliates, and all of our
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand,
                  including reasonable attorneys’ fees and expenses, made by any
                  third party due to or arising out of: (1) your Contributions;
                  (2) use of the Site; (3) breach of these Terms of Use; (4) any
                  breach of your representations and warranties set forth in
                  these Terms of Use; (5) your violation of the rights of a
                  third party, including but not limited to intellectual
                  property rights; or (6) any overt harmful act toward any other
                  user of the Site with whom you connected via the Site.
                  Notwithstanding the foregoing, we reserve the right, at your
                  expense, to assume the exclusive defense and control of any
                  matter for which you are required to indemnify us, and you
                  agree to cooperate, at your expense, with our defense of such
                  claims. We will use reasonable efforts to notify you of any
                  such claim, action, or proceeding which is subject to this
                  indemnification upon becoming aware of it.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Copyright and trade mark policies
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  It is Adiance’s policy to respond to notices of alleged
                  copyright infringement that comply with applicable
                  international intellectual property law (including, in the
                  United States, the Digital Millennium Copyright Act) and to
                  terminating the accounts of repeat infringers.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Advertisement
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Some of the Services are supported by advertising revenue and
                  may display advertisements and promotions.
                </li>
                <li>
                  These advertisements may be targeted to the content of
                  information stored on the Services, queries made through the
                  Services or other information.
                </li>
                <li>
                  The manner, mode and extent of advertising by Adiance on the
                  Services are subject to change without specific notice to you.
                </li>
                <li>
                  In consideration for Adiance granting you access to and use of
                  the Services, you agree that Adiance may place such
                  advertising on the Services.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Taxes, Raffles and Auctions.
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  If there are taxes, other governmental charges or any other
                  fees associated with your use of the Site including the
                  auction, item sales, raffles (a means of raising money by
                  selling numbered tickets, one or some of which are
                  subsequently drawn at random, the holder or holders of such
                  tickets winning a prize), or other financial transactions on
                  the Site these will be your responsibility to pay. You should
                  consult your tax adviser on any potential taxes or tax effects
                  related to the auction, raffle, fund a need appeal, sales and
                  other transactions made through the Site.
                </li>
                <li>
                  If the You chose to include a raffle as part of their event,
                  the You agree that You understand and comply with all federal,
                  state, and local regulations that apply to raffles and the
                  sale of raffle tickets through our site. You further agrees
                  that You shall indemnify, defend, and hold Adiance, its
                  subsidiaries, affiliates, officers, employers, directors,
                  shareholders, predecessors, successors in interest, and other
                  agents, harmless from and against any claim, demand, suit,
                  cause of action, proceeding, loss, liability, damage or
                  expense (including reasonable attorney fees) arising out of or
                  related to raffle activities.
                </li>
                <li>
                  Once an auction has closed it cannot be re-opened. In order to
                  re-open an auction a new auction must be created and will
                  incur a new activation fee.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Changes to the Terms
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Adiance may make changes to the Terms from time to time.
                </li>
                <li>
                  You understand and agree that if you use the Services after
                  the date on which the Terms have changed, Adiance will treat
                  your use as acceptance of the updated Universal Terms or
                  Additional Terms.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Dispute Resolution
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Arbitration – If any dispute, claim or controversy (“Claims”)
                  arises under this Agreement or through your use of the
                  Services, such dispute shall be resolved by binding
                  arbitration in accordance with the Commercial Arbitration
                  Rules of the American Arbitration Association (“AAA”) then
                  pertaining, except where such rules conflict with this
                  section, in which case this section shall control. There shall
                  be three arbitrators. The parties agree that one arbitrator
                  shall be appointed by each party within twenty (20) days of
                  receipt by respondent[s] of the Request for Arbitration or in
                  default thereof appointed by the AAA in accordance with its
                  Commercial Rules, and the third presiding arbitrator shall be
                  appointed by agreement of the two party-appointed arbitrators
                  within fourteen (14) days of the appointment of the second
                  arbitrator or, in default of such agreement, by the AAA. Any
                  court with jurisdiction shall enforce this section and enter
                  judgment on any award. Within forty-five (45) days of
                  initiation of arbitration, the parties to the arbitration
                  shall reach agreement upon and thereafter follow procedures,
                  including limits on discovery, assuring that the arbitration
                  will be concluded and the award rendered within no more than
                  eight (8) months from selection of arbitrators or, failing
                  agreement, procedures meeting such time limits will be
                  designed by the AAA and adhered to by the parties to the
                  arbitration. The arbitration shall be held in Natrona County,
                  Wyoming and the arbitrators shall apply the substantive law of
                  the State of Wyoming, except that the interpretation and
                  enforcement of this arbitration provision shall be governed by
                  the Federal Arbitration Act.
                </li>
                <li>
                  Exceptions – You and Adiance agree that the following Claims
                  are not subject to the above provisions concerning
                  negotiations and binding arbitration: (a) any Claim seeking to
                  enforce or protect, or concerning the validity of, any of your
                  or Adiance’s intellectual property rights; (b) any Claim
                  related to, or arising from, allegations of theft, piracy,
                  invasion of privacy or unauthorized use; (c) any claim for
                  equitable relief; and (d) any claim by a resident of the
                  European Union or Switzerland regarding our adherence to the
                  Privacy Shield Principles (as defined in our Privacy Policy).
                  In addition to the foregoing, either you or Adiance may assert
                  an individual action in small claims court for Claims that are
                  within the scope of such court’s jurisdiction in lieu of
                  arbitration.
                </li>
                <li>
                  Class Action/Jury Trial Waiver
                  <br />
                  <br />
                  WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF
                  WHETHER THEY HAVE OBTAINED OR USED THE SERVICES FOR PERSONAL,
                  COMMERCIAL OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN
                  THE PARTIES’ INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR
                  CLASS MEMBER IN ANY PURPORTED CLASS ACTION, COLLECTIVE ACTION,
                  PRIVATE ATTORNEY GENERAL ACTION OR OTHER REPRESENTATIVE
                  PROCEEDING. THIS WAIVER APPLIES TO CLASS ARBITRATION, AND,
                  UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE
                  MORE THAN ONE PERSON’S CLAIMS. YOU AGREE THAT, BY ENTERING
                  INTO THIS AGREEMENT, YOU AND WE ARE EACH WAIVING THE RIGHT TO
                  A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION,
                  COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER
                  REPRESENTATIVE PROCEEDING OF ANY KIND. THE WAIVER CONTAINED IN
                  THIS SECTION SHALL BE SEVERABLE FROM THE REMAINDER OF THE
                  AGREEMENT.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Force Majeure
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  Adiance will be excused from performance under this Agreement
                  for any period of time that the Adiance is prevented from
                  performing its obligations hereunder as a result of an act of
                  God, criminal acts, distributed denial of service attacks, any
                  acts of the common enemy, the elements, earthquakes, floods,
                  fires, epidemics, riots, war, utility or communication
                  failures, or other cause beyond it’s reasonable control.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Miscellaneous
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  These Terms of Use and any policies or operating rules posted
                  by us on the Site or in respect to the Site constitute the
                  entire agreement and understanding between you and us. Our
                  failure to exercise or enforce any right or provision of these
                  Terms of Use shall not operate as a waiver of such right or
                  provision. These Terms of Use operate to the fullest extent
                  permissible by law. We may assign any or all of our rights and
                  obligations to others at any time. We shall not be responsible
                  or liable for any loss, damage, delay, or failure to act
                  caused by any cause beyond our reasonable control. If any
                  provision or part of a provision of these Terms of Use is
                  determined to be unlawful, void, or unenforceable, that
                  provision or part of the provision is deemed severable from
                  these Terms of Use and does not affect the validity and
                  enforceability of any remaining provisions. There is no joint
                  venture, partnership, employment or agency relationship
                  created between you and us as a result of these Terms of Use
                  or use of the Site. You agree that these Terms of Use will not
                  be construed against us by virtue of having drafted them. You
                  hereby waive any and all defenses you may have based on the
                  electronic form of these Terms of Use and the lack of signing
                  by the parties hereto to execute these Terms of Use.
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

export default TermsOfService;
