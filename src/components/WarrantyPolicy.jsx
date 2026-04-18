import React from "react";
import { Typography } from "@mui/material";
import Header from "./Header/Header";
import NavHeader from "./NavHeader";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const WarrantyPolicy = () => {
  const location = useLocation(); // Get the current route
  const canonicalUrl = `https://www.adiance.com${location.pathname}`;

  return (
    <div>
      <Helmet>
        <title>Warranty Policy - Adiance Technologies</title>
        <meta
          name="description"
          content="Explore Adiance’s warranty services for reliable support and protection of your surveillance systems. Ensure security and peace of mind with our coverage."
        />
        <meta name="keywords" content="warranty policy, Adiance warranty coverage" />
        <meta property="og:title" content="Warranty Policy - Adiance Technologies" />
        <meta property="og:description" content="Explore Adiance’s warranty services for reliable support and protection of your surveillance systems. Ensure security and peace of mind with our coverage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Adiance Technologies" />
        <meta property="og:image" content="https://www.adiance.com/images/Logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@adiancetech" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <Header />
      <NavHeader text={"Warranty Service"} />
      <div style={{ margin: "5% 10%" }}>
        <Typography variant="h6" gutterBottom>
          Last updated: January 25th, 2021
        </Typography>
        <ol>
          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Warranty Policy
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  At ADIANCE TECHNOLOGIES PVT LTD. we understand how much you
                  value your every purchase. And we are committed to making your
                  shopping experience with us as delightful as possible.
                </li>
                <li>
                  We assure you that all products sold on Adiance are brand new
                  and 100% genuine. In case the product you received is
                  ‘Damaged’, ‘Defective’ or ‘Not as Described’, our Friendly
                  Returns policy has got you covered.
                </li>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Replacement Guarantee
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Validity</th>
                          <th>Covers</th>
                          <th>Type Accepted</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>30 days from delivery</td>
                          <td>Damaged, Defective, Item not as described</td>
                          <td>Replacement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li>
                  If you have received a damaged or defective product or it is
                  not as described, you can get a replacement within 30 days of
                  delivery at no extra cost.
                </li>
                <li>When does this guarantee not apply?</li>
                <li>The guarantee does not extend to: </li>
                <ol>
                  <li>
                    Damages due to misuse of product or Incidental damage due to
                    malfunctioning of product.
                  </li>
                  <li>Products with tampered or missing serial numbers.</li>
                  <li>
                    Items that are returned without original packaging, freebies
                    or accessories.
                  </li>
                  <li>
                    Any damage / defect which are not covered under the
                    Adiance’s warranty.Possible resolution could be Replacement
                    or Refund in case we are unable to provide a
                    Replacement/Exchange. All this is backed by the 30 Day
                    Replacement Guarantee.
                  </li>
                </ol>
              </ul>
            </Typography>
          </li>

          <li>
            <Typography
              variant="h6"
              style={{ marginTop: "2.5%", marginBottom: "1%" }}
            >
              Replacement
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>
                  If you have received an item in a ‘Damaged’ or ‘Defective’
                  condition, or it is ‘Not as Described’ by the Adiance, you may
                  request a replacement you will be responsible for all cost
                  associated with returning your product to us. Replacement is
                  subject to availability of stock. If the product is out of
                  stock, you will receive a full refund, no questions asked.
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

export default WarrantyPolicy;
