"use client";

import React from 'react';
import './BISDeepDiveSection.css';

const VERIFICATION_STEPS = [
  {
    step: '1',
    title: 'Confirm the manufacturer holds a valid BIS-ER registration',
    text:
      'BIS-ER (Bureau of Indian Standards – Enlistment/Registration under the Electronics and IT Goods (Requirements for Compulsory Registration) Order) is mandatory for CCTV and surveillance electronics sold in India. Ask any manufacturer for their BIS registration/R-number before you commit to an order.',
  },
  {
    step: '2',
    title: 'Check the STQC test report backing the registration',
    text:
      'BIS-ER registration is granted only after the product has passed compliance testing at an approved lab — for Adiance, that testing is carried out and certified by STQC (Standardisation Testing and Quality Certification), a testing body under India\'s Ministry of Electronics and Information Technology (MeitY).',
  },
  {
    step: '3',
    title: 'Verify the registration is still active',
    text:
      'BIS registrations are product- and model-specific and can lapse or be withdrawn. Cross-check the registration number directly on the BIS CRS (Compulsory Registration Scheme) portal before finalizing a white-label or OEM order.',
  },
  {
    step: '4',
    title: 'Ask for the certificate, not just a claim',
    text:
      'A compliant manufacturer will provide the BIS-ER certificate and STQC test report on request — Adiance provides both to OEM/ODM partners as part of due diligence before contract signing.',
  },
];

const FAQS = [
  {
    q: 'What is BIS-ER certification and why does it matter for CCTV cameras sold in India?',
    a: 'BIS-ER is the mandatory Bureau of Indian Standards registration for electronics and IT goods, including CCTV cameras and surveillance electronics, sold in the Indian market. Selling uncertified surveillance electronics in India is a compliance violation, so any brand — Indian or international — sourcing cameras for the Indian market needs a manufacturing partner whose products already carry valid BIS-ER registration.',
  },
  {
    q: 'Is Adiance BIS-ER and STQC certified?',
    a: 'Yes. Adiance manufactures under BIS-ER registration with compliance testing carried out by STQC. Partners can request the current certificate and test report as part of onboarding due diligence — see the verification steps above.',
  },
  {
    q: 'Does BIS-ER certification cover white-label and OEM products too?',
    a: 'Yes — registration is tied to the product/model manufactured, not the brand name printed on it, so cameras manufactured by Adiance and sold under a partner\'s own brand carry the same underlying BIS-ER registration and STQC test basis as products sold under the Adiance name.',
  },
  {
    q: 'How is BIS-ER different from STQC certification?',
    a: 'STQC is the testing body that runs the compliance tests; BIS-ER is the government registration that is granted once a product passes those tests. In short: STQC tests the product, BIS registers it. Both come from the same overall compliance process and both are checked together when verifying a manufacturer.',
  },
  {
    q: 'Can I verify a BIS-ER registration myself before placing an order?',
    a: 'Yes — the BIS CRS portal lets you look up a registration number to confirm it is valid and current for the specific product/model. Always ask a prospective manufacturer for their registration number and verify it independently rather than taking certification claims on trust.',
  },
];

const BISDeepDiveSection = () => {
  return (
    <section className="bis-deepdive-section">
      <div className="bis-deepdive-inner">
        <h2 className="bis-deepdive-title">
          How BIS-ER &amp; STQC Certification Works — and How to Verify It
        </h2>
        <p className="bis-deepdive-intro">
          BIS-ER registration and STQC testing are not optional paperwork — they are the legal
          requirement for selling CCTV cameras and surveillance electronics in India, and the
          fastest way for an OEM/ODM buyer to separate a genuinely compliant manufacturer from
          one that only claims to be. Here is exactly what each certification means and how to
          check it yourself.
        </p>

        <h3 className="bis-deepdive-subtitle">Verification steps</h3>
        <ol className="bis-deepdive-steps">
          {VERIFICATION_STEPS.map((s) => (
            <li key={s.step} className="bis-deepdive-step">
              <span className="bis-deepdive-step-num">{s.step}</span>
              <div>
                <h4 className="bis-deepdive-step-title">{s.title}</h4>
                <p className="bis-deepdive-step-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="bis-deepdive-links">
          Official references:{' '}
          <a href="https://crsbis.in/BIS/" target="_blank" rel="noopener noreferrer">
            BIS CRS Registration Portal
          </a>
          ,{' '}
          <a href="https://www.stqc.gov.in/" target="_blank" rel="noopener noreferrer">
            STQC (MeitY)
          </a>
          , and{' '}
          <a href="https://lims.bis.gov.in/" target="_blank" rel="noopener noreferrer">
            BIS LIMS certificate lookup
          </a>
          .
        </p>

        <h3 className="bis-deepdive-subtitle">Frequently asked questions</h3>
        <div className="bis-deepdive-faqs">
          {FAQS.map((f, i) => (
            <div key={i} className="bis-deepdive-faq">
              <h4 className="bis-deepdive-faq-q">{f.q}</h4>
              <p className="bis-deepdive-faq-a">{f.a}</p>
            </div>
          ))}
        </div>

        <p className="bis-deepdive-note">
          Registration numbers and test-report references are specific to the product/model in
          production at any given time and are provided directly to OEM/ODM partners during
          onboarding —{' '}
          <a href="/contact">contact our team</a> to request current certificate copies for your
          product line.
        </p>

        <div className="bis-deepdive-related">
          <h3 className="bis-deepdive-subtitle">Related compliance &amp; manufacturing resources</h3>
          <ul>
            <li>
              <a href="/ndaa-compliance">NDAA Section 889 compliant cameras</a> — for US federal
              and government buyers
            </li>
            <li>
              <a href="/non-chinese-cctv-camera-manufacturer">Non-Chinese CCTV camera manufacturer</a>{' '}
              — non-Chinese SoC supply chain details
            </li>
            <li>
              <a href="/white-label-cctv-camera-manufacturer">White-label CCTV manufacturing</a> —
              launch your own certified, BIS-ER registered product line
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BISDeepDiveSection;
