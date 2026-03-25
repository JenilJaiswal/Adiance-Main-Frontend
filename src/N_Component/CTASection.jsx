const CTASection = ({
  title = "Start Your OEM/ODM Project With Adiance — Connect With Our Engineering Team",
  description,
  buttonText = "Start Your Project",
  buttonLink = "#",
  onButtonClick
}) => {
  const handleClick = (e) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (buttonLink !== "#") {
      window.location.href = buttonLink;
    }
  };

  return (
    <div className="cta_Container">
      <div className="cta_Content">
        <h2
          className="cta_Title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {description && <p className="cta_Description">{description}</p>}
        <button className="cta_Button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
      
      <style jsx>{`
        .cta_Container {
          background: #ffffff;
          padding: 60px 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta_Content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .cta_Title {
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 36px;
          color: #444444;
          margin-bottom: 30px;
          line-height: 1.3;
        }

        .cta_Description {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #666666;
          margin-bottom: 30px;
          line-height: 1.6;
          max-width: max-content;
          margin-left: auto;
          margin-right: auto;
        }

        .cta_Button {
          background-color: #BF0603;
          color: #ffffff;
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding: 15px 35px;
          border: none;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .cta_Button:hover {
          background-color: #a00502;
          transform: translateY(-2px);
        }

        .cta_Button:active {
          transform: translateY(0);
        }

        /* Tablet Styles */
        @media screen and (max-width: 1024px) {
          .cta_Container {
            padding: 50px 15px;
          }

          .cta_Title {
            font-size: 30px;
            margin-bottom: 25px;
          }

          .cta_Button {
            font-size: 16px;
            padding: 12px 30px;
          }
        }

        /* Mobile Styles */
        @media screen and (max-width: 768px) {
          .cta_Container {
            padding: 40px 15px;
            margin: 30px 0;
          }

          .cta_Title {
            font-size: 24px;
            margin-bottom: 20px;
            line-height: 1.4;
          }

          .cta_Button {
            font-size: 16px;
            padding: 12px 25px;
          }
        }

        /* Small Mobile Styles */
        @media screen and (max-width: 480px) {
          .cta_Container {
            padding: 35px 10px;
          }

          .cta_Title {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .cta_Button {
            font-size: 14px;
            padding: 10px 20px;
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  )
}

export default CTASection