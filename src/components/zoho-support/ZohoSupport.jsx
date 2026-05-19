"use client";

import React, { useEffect } from "react";
import "./css/form.css";

const ZohoSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./zoho-support/js/validation.js"; // Ensure this path matches your file location
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `

	<div class="zf-templateWidth">
		<form
			action='https://forms.zohopublic.in/vmukti1/form/SupportForm/formperma/93dyxlDr0kJSKRw04X2TK3HGNcdl1rdp9KpdAJQm0CE/htmlRecords/submit'
			name='form' method='POST' onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
			accept-charset='UTF-8' enctype='multipart/form-data' id='form'><input type="hidden" name="zf_referrer_name"
				value=""><!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->
			<input type="hidden" name="zf_redirect_url"
				value=""><!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->
			<input type="hidden" name="zc_gad"
				value=""><!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->
			<div class="zf-templateWrapper"><!---------template Header Starts Here---------->
				<ul class="zf-tempHeadBdr">
					<li class="zf-tempHeadContBdr">
						<h2 class="zf-frmTitle"><em>Support Request</em></h2>
						<p class="zf-frmDesc"></p>
						<div class="zf-clearBoth"></div>
					</li>
				</ul><!---------template Header Ends Here---------->
				<!---------template Container Starts Here---------->
				<div class="zf-subContWrap zf-topAlign">
					<ul>
						<!---------Name Starts Here---------->
						<li class="zf-tempFrmWrapper zf-name zf-namelarge"><label class="zf-labelName">
								Name
								<em class="zf-important">*</em>
							</label>
							<div class="zf-tempContDiv zf-twoType">
								<div class="zf-nameWrapper">
									<span> <input type="text" maxlength="255" name="Name_First" fieldType=7
											placeholder="" /> <label>First Name</label>
									</span>
									</span> </span>
									<span> <input type="text" maxlength="255" name="Name_Last" fieldType=7
											placeholder="" /> <label>Last Name</label>
									</span>
									</span> </span>
									<div class="zf-clearBoth"></div>
								</div>
								<p id="Name_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Name Ends Here---------->
						<!---------Single Line Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Company Name
								<em class="zf-important">*</em>
							</label>
							<div class="zf-tempContDiv">
								<span> <input type="text" name="SingleLine" checktype="c1" value="" maxlength="255"
										fieldType=1 placeholder="" /></span>
								<p id="SingleLine_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Single Line Ends Here---------->
						<!---------Phone Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Contact Number
								<em class="zf-important">*</em>
							</label>
							<div class="zf-tempContDiv zf-phonefld">
								<div class="zf-phwrapper zf-phNumber">
									<span> <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode"
											maxlength="20" checktype="c7" value="" phoneFormat="1"
											isCountryCodeEnabled=false fieldType="11"
											id="international_PhoneNumber_countrycode" valType="number"
											phoneFormatType="1" placeholder="" />
										<label>Number</label> </span>
									<div class="zf-clearBoth"></div>
								</div>
								<p id="PhoneNumber_error" class="zf-errorMessage" style="display:none;">Invalid value
								</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Phone Ends Here---------->
						<!---------Email Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Email
							</label>
							<div class="zf-tempContDiv">
								<span> <input fieldType=9 type="text" maxlength="255" name="Email" checktype="c5"
										value="" placeholder="" /></span>
								<p id="Email_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Email Ends Here---------->
						<!--address-->
        
						<!---------Single Line Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Product Name&#x2f;Model
							</label>
							<div class="zf-tempContDiv">
								<span> <input type="text" name="SingleLine1" checktype="c1" value="" maxlength="255"
										fieldType=1 placeholder=""  /></span>
								<p id="SingleLine1_error" class="zf-errorMessage" style="display:none;">Invalid value
								</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Single Line Ends Here---------->
						<!---------Single Line Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Camera Device ID
							</label>
							<div class="zf-tempContDiv">
								<span> <input type="text" name="SingleLine2" checktype="c1" value="" maxlength="255"
										fieldType=1 placeholder="" /></span>
								<p id="SingleLine2_error" class="zf-errorMessage" style="display:none;">Invalid value
								</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Single Line Ends Here---------->
						<!---------Date Starts Here---------->
						<li class="zf-tempFrmWrapper zf-date"><label class="zf-labelName">
								Purchase Date
							</label>
							<div class="zf-tempContDiv">
								<span> <input type="text" name="Date" checktype="c4" value="" maxlength="25"
										placeholder="" /> <label>dd-MMM-yyyy</label>
								</span>
								<div class="zf-clearBoth"></div>
								<p id="Date_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Date Ends Here---------->
						<!---------Single Line Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Type of Issue
							</label>
							<div class="zf-tempContDiv">
								<span> <input type="text" name="SingleLine3" checktype="c1" value="" maxlength="255"
										fieldType=1 placeholder="" /></span>
								<p id="SingleLine3_error" class="zf-errorMessage" style="display:none;">Invalid value
								</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Single Line Ends Here---------->
						<!---------Multiple Line Starts Here---------->
						<li class="zf-tempFrmWrapper zf-large"><label class="zf-labelName">
								Description of the Issue
							</label>
							<div class="zf-tempContDiv">
								<span> <textarea name="MultiLine" checktype="c1" maxlength="65535"
										placeholder=""></textarea> </span>
								<p id="MultiLine_error" class="zf-errorMessage" style="display:none;">Invalid value</p>
							</div>
							<div class="zf-clearBoth"></div>
						</li><!---------Multiple Line Ends Here---------->
					</ul>
				</div><!---------template Container Starts Here---------->
				<ul>
					<li class="zf-fmFooter"><button class="zf-submitColor">Submit</button></li>
				</ul>
			</div><!-- 'zf-templateWrapper' ends -->
		</form>
	</div><!-- 'zf-templateWidth' ends -->
	<script type="text/javascript">var zf_DateRegex = new RegExp("^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$");
		var zf_MonthYearRegex = new RegExp("^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$");
		var zf_MandArray = ["Name_First", "Name_Last", "SingleLine", "PhoneNumber_countrycode"];
		var zf_FieldArray = ["Name_First", "Name_Last", "SingleLine", "PhoneNumber_countrycode", "Email", "Address_AddressLine1", "Address_AddressLine2", "Address_City", "Address_Region", "Address_ZipCode", "Address_Country", "SingleLine1", "SingleLine2", "Date", "SingleLine3", "MultiLine"];
		var isSalesIQIntegrationEnabled = false;
		var salesIQFieldsArray = [];</script>



            `,
      }}
    />
  );
};

export default ZohoSupport;
