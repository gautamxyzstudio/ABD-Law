import HeroSection from "../../components/heroSection/HeroSection";

const TermOfServices = () => {
  return (
    <>
      <HeroSection title="Terms of Service" />
      <section className="xl:pt-20 md:pt-16 pt-12 xl:px-[150px] md:px-13 px-6 xl:text-2xl md:text-xl text-lg">
        <ol className="list-decimal pl-6 mb-6 md:space-y-4 space-y-3">
          <li className="font-semibold">Scope of Legal Services</li>
          <p>
            <b>ABD Law Corporation</b> (“Firm”) provides legal services solely
            as outlined in a written engagement agreement executed by the Client
            and the Firm. No lawyer-client relationship is formed until the Firm
            confirms representation in writing.
          </p>
          <li className="font-semibold">
            No Legal Advice Through Website or Communications
          </li>
          <p>
            Information provided through the Firm’s website, publications, or
            general communications is for informational purposes only and does
            not constitute legal advice. Receipt of such information does not
            create a lawyer-client relationship.
          </p>
          <li className="font-semibold">Lawyer-Client Relationship</li>
          <p>
            A lawyer-client relationship is established only upon execution of a
            written engagement letter and payment of any required retainer. The
            Firm reserves the right to decline representation.
          </p>
          <li className="font-semibold">Confidentiality</li>
          <p>
            The Firm maintains the confidentiality of client information in
            accordance with applicable laws and professional rules. The Firm is
            not responsible for the security of communications transmitted via
            email or other unencrypted electronic means unless secure
            transmission has been expressly arranged.
          </p>
          <li className="font-semibold">Client Responsibilities</li>
          <p>Clients agree to:</p>
          <ul className="list-disc">
            <li>
              Provide accurate and complete information relevant to their
              matter.
            </li>
            <li>Respond promptly to requests for information.</li>
            <li>
              Comply with payment terms and timelines set forth in the
              engagement agreement.
            </li>
          </ul>
          <li className="font-semibold">Fees, Billing, and Payment</li>
          <p>
            Fees are outlined in the engagement letter and may be based on
            hourly rates, flat fees, contingency fees (where permitted), or
            hybrid arrangements. The Firm may request replenishment of retainers
            as needed. Invoices are payable upon receipt unless otherwise
            agreed.
          </p>
          <li className="font-semibold">Termination of Representation</li>
          <p>
            Either the Client or the Firm may terminate the lawyer-client
            relationship subject to applicable ethical rules. Upon termination,
            the Client remains responsible for all fees and expenses incurred
            prior to termination.
          </p>
          <li className="font-semibold">Conflicts of Interest</li>
          <p>
            The Firm conducts conflict checks prior to accepting new
            engagements. If a conflict arises during representation, the Firm
            may withdraw consistent with professional responsibility
            obligations.
          </p>
          <li className="font-semibold">Limitation of Liability</li>
          <p>
            To the maximum extent permitted by law, the Firm’s liability for any
            claims arising from its services is limited to the amount of fees
            paid by the Client for the specific matter giving rise to the claim.
            This limitation does not apply to liability that cannot be limited
            under applicable law.
          </p>
          <li className="font-semibold">No Guarantee of Results</li>
          <p>
            The Firm does not guarantee any particular outcome. Statements
            regarding the potential outcome of a matter are expressions of
            opinion only.
          </p>
          <li className="font-semibold">
            Use of Electronic Communication and Document Management
          </li>
          <p>
            The Client consents to the Firm’s use of electronic communications,
            cloud-based document systems, and electronic signatures. The Firm
            takes reasonable security precautions but cannot guarantee absolute
            data security.
          </p>
          <li className="font-semibold">Intellectual Property</li>
          <p>
            All content on the Firm’s website, publications, and materials is
            owned by the Firm and may not be reproduced without written
            permission.
          </p>
          <li className="font-semibold">Governing Law and Venue</li>
          <p>
            These Terms and any disputes relating to the Firm’s services are
            governed by the laws of the jurisdiction in which the Firm is
            incorporated. Venue for disputes shall be in the courts of that
            jurisdiction unless otherwise required by law.
          </p>
          <li className="font-semibold">Modification of Terms</li>
          <p>
            The Firm may update these Terms from time to time. Clients and
            website users should review the Terms periodically. Continued use of
            the Firm’s services constitutes acceptance of the updated Terms.
          </p>
          <li className="font-semibold">Website Use and Third-Party Links</li>
          <p>
            The Firm’s website may contain third-party links for convenience.
            The Firm is not responsible for the content or privacy practices of
            external sites.
          </p>
          <li className="font-semibold">Privacy Policy</li>
          <p>
            Personal information collected by the Firm is handled in accordance
            with its published Privacy Policy, which forms part of these Terms.
          </p>
        </ol>
      </section>
    </>
  );
};

export default TermOfServices;
