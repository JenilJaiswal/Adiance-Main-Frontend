"use client";

import React, { useState } from "react";
import "./FAQ_Section.css";

const FAQ_Section = ({ faqsList }) => {
  const [expanded, setExpanded] = useState("panel0");

  if (!faqsList || !faqsList.qa || faqsList.qa.length === 0) {
    return null;
  }

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? false : panel);
  };

  const titleWords = faqsList.title ? faqsList.title.split(" ") : [];
  const lastWord = titleWords.pop() || "";
  const firstWords = titleWords.join(" ");

  return (
    <div className="faq-container">
      {/* Title */}
      <h2 className="faq-title">
        {firstWords}{" "}
        <span className="faq-title-accent">{lastWord}</span>
      </h2>

      {/* FAQ Accordions */}
      {faqsList.qa.map((faq, index) => {
        const panelId = `panel${index}`;
        const isExpanded = expanded === panelId;

        return (
          <div key={index} className="faq-accordion">
            <div 
              className="faq-summary"
              onClick={() => handleChange(panelId)}
            >
              <h3 className="faq-question">{faq.question}</h3>
              <div className="faq-icon">
                {isExpanded ? (
                  <span className="faq-icon-minus">−</span>
                ) : (
                  <span className="faq-icon-plus">+</span>
                )}
              </div>
            </div>

            {isExpanded && (
              <div className="faq-details">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ_Section;