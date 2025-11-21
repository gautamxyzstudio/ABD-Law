import HeroSection from "../../components/heroSection/HeroSection";

const PrivacyPolicy = () => {
  return (
    <>
      <HeroSection title="Privacy Clause" />
      <section className="xl:pt-20 md:pt-16 pt-12 xl:px-[150px] md:px-13 px-6 xl:text-2xl md:text-xl text-lg">
        <ol className="list-decimal pl-6 mb-6 md:space-y-4 space-y-3">
          <li className="font-semibold">Collection of Personal Information</li>
          <p>
            We may collect personal information that you voluntarily provide
            through our website, including your name, contact information, and
            any details you submit through inquiry forms, emails, or document
            uploads. We also collect certain technical information
            automatically, such as IP addresses, browser type, and usage data.{" "}
          </p>
          <li className="font-semibold">Use of Personal Information</li>
          <p>We use the information collected to:</p>
          <ul className="list-disc">
            <li> Respond to your inquiries and provide legal services.</li>
            <li> Manage our client relationships.</li>
            <li> Operate, maintain, and improve our website.</li>
            <li>
              Comply with legal, regulatory, and professional obligations.
            </li>
            <li>
              Communicate with you regarding updates, announcements, or
              services, where permitted.
            </li>
          </ul>
          <li className="font-semibold">Confidentiality and Legal Privilege</li>
          <p>
            Any information provided for the purpose of seeking legal advice may
            be protected by solicitor client privilege or other applicable
            confidentiality protections. We uphold strict confidentiality in
            accordance with governing laws and professional standards.
          </p>
          <li className="font-semibold">Disclosure of Personal Information</li>
          <p>
            We do not sell or trade personal information. We may disclose
            personal information only:
          </p>
          <ul className="list-disc">
            <li>
              To third-party service providers who support our operations and
              are bound by confidentiality obligations.
            </li>
            <li>When required by law, court order, or regulatory authority.</li>
            <li>
              When necessary to protect our rights, comply with professional
              duties, or prevent harm.
            </li>
          </ul>
          <li className="font-semibold">Data Security</li>
          <p>
            We implement reasonable administrative, technical, and physical
            safeguards to protect personal information against unauthorized
            access, alteration, or disclosure. However, no transmission of data
            over the internet can be guaranteed to be completely secure.
          </p>
          <li className="font-semibold">Data Retention</li>
          <p>
            We retain personal information only as long as necessary to fulfill
            the purposes for which it was collected and to meet legal and
            professional obligations.
          </p>
          <li className="font-semibold">Cookies and Tracking Technologies</li>
          <p>
            Our website may use cookies or similar technologies to improve
            functionality and analyze usage. You may adjust your browser
            settings to refuse cookies, though some features of the website may
            not function properly.
          </p>
          <li className="font-semibold">Third-Party Links</li>
          <p>
            Our website may contain links to external sites. We are not
            responsible for the privacy practices or content of third-party
            websites.
          </p>
          <li className="font-semibold">Your Rights</li>
          <p>
            Depending on your jurisdiction, you may have rights to access,
            correct, update, or delete your personal information, or to withdraw
            consent. Requests can be submitted using the contact information
            below.
          </p>
          <li className="font-semibold">Contact Information</li>
          <p>
            If you have questions about this Privacy Clause or wish to make a
            privacy-related request, please contact us at via email at{" "}
            <b>office@abdlaw.ca</b>, address:{" "}
            <b>2760 Trethewey St, Unit 202, Abbotsford BC V2T 5R3</b>, phone:{" "}
            <b>604 743 3110</b>.
          </p>
          <li className="font-semibold">Updates to This Policy</li>
          <p>
            We may update this Privacy Clause from time to time. The latest
            version will always be posted on our website with the effective date
            indicated.
          </p>
        </ol>
      </section>
    </>
  );
};

export default PrivacyPolicy;
