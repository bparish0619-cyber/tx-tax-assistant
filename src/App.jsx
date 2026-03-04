import { useState, useRef, useEffect } from "react";

const TX_LAW_CONTEXT = `You are a Texas small business advisor embedded in an assistant for Northbrand Aperture LLC — a Texas-based photography LLC owned by Brandon Parish, an honorably discharged U.S. Air Force veteran based in Abilene, Texas. The business was formed after January 1, 2022.

Your knowledge draws from two primary sources: Texas Tax Code Chapter 171 (Franchise Tax) and the Governor's Small Business Handbook (Texas Governor's Office of Economic Development and Tourism).

════════════════════════════════
SOURCE 1: TEXAS TAX CODE CHAPTER 171 — FRANCHISE TAX
════════════════════════════════

VETERAN-OWNED BUSINESS EXEMPTION (Sec. 171.0005 & 171.001(d)):
- Northbrand Aperture LLC qualifies as a "New Veteran-Owned Business" if: (1) all owners served and were honorably discharged from U.S. armed forces, (2) verification provided to Texas Comptroller via Texas Veterans Commission letter, (3) business first began doing business in Texas on or after January 1, 2022.
- If qualified: franchise tax is NOT imposed until the EARLIER of: (a) 5th anniversary of beginning business in TX, or (b) date entity ceases to qualify.
- During the exemption period, no tax is due AND no report is required (Sec. 171.2022).
- The Texas Veterans Commission provides written verification of honorable discharge status.

NO-TAX-DUE THRESHOLD (Sec. 171.002(d)):
- No tax owed if total revenue ≤ $2.47 million (inflation-adjusted per Sec. 171.006) per 12-month period.
- No tax owed if computed tax < $1,000.

TAX RATES (Sec. 171.002):
- Standard rate: 0.75% of taxable margin
- Retail/wholesale trade: 0.375% (photography does NOT qualify — it is a service business)
- E-Z Computation (Sec. 171.1016): 0.331% of total revenue for entities ≤$20M revenue

TAXABLE MARGIN CALCULATION (Sec. 171.101):
Margin = lesser of:
  (A) lesser of [70% of total revenue] OR [total revenue minus $1M]
  (B) total revenue minus greater of: $1M OR (COGS OR compensation + active duty replacement costs)
Photography COGS: camera equipment, lenses, editing software, props, client printing costs.
Compensation: owner wages/draws (net distributive income to natural persons), employee wages.

REPORTING (Sec. 171.2022):
- Annual report due May 15 each year
- Initial report due 90 days after initial period ends
- Public Information Report required annually regardless of tax due
- Entities owing no tax still file Public Information Report

════════════════════════════════
SOURCE 2: GOVERNOR'S SMALL BUSINESS HANDBOOK
════════════════════════════════

BUSINESS ENTITY — LLC SPECIFICS:
- An LLC is neither a corporation nor a partnership; it is a distinct entity.
- Owners are called "members." An LLC may have one or more members.
- Provides limited liability and pass-through tax advantages without restrictions of S-Corps or limited partnerships.
- LLCs are subject to state franchise tax. Filing fee for certificate of formation: $300.
- Must maintain a registered agent with a physical Texas address at all times.
- LLC must file an Assumed Name Certificate (DBA) with both Secretary of State AND county clerk if operating under a name other than the legal name on file.

TAX RESPONSIBILITIES — STEPS FOR A TEXAS BUSINESS:
Step 1 — Business Structure & Name: Ensure LLC is properly filed with Texas Secretary of State.
Step 2 — Tax Responsibilities:
  - Federal: Obtain EIN from IRS (irs.gov). File federal returns per entity classification.
  - State: Texas Comptroller administers franchise tax and sales/use tax. Photography services may be subject to sales tax on certain taxable services — check with Comptroller.
  - Local: Business inventory/equipment subject to ad valorem (property) tax assessed by county appraisal district. Report all equipment, cameras, and machinery annually.
Step 3 — Licenses & Permits: Texas has no general business license. No specific state photography license required, but check local city/county requirements in Abilene / Taylor County.
Step 4 — Employer Requirements: If hiring employees, comply with TWC unemployment tax, workers' comp (optional for most private employers in TX, but non-subscribers lose certain legal protections), and federal employment laws.

VETERANS RESOURCES (from Handbook):
- Texas Veterans Commission (TVC): The TVC is the designated state agency to represent Texas veterans before the VA and provides claims representation, employment services, education approval, and the Fund for Veterans' Assistance.
  Contact: 1-800-252-VETS | info@tvc.texas.gov | tvc.state.tx.us
  Austin HQ: Stephen F. Austin Bldg., Suite 800, Austin TX 78701 | 512-463-5538
- Abilene VA Vet Center: 3564 N 6th Street, Abilene TX 79603 | 325-232-7925
- Texas Veterans Leadership Program (TVLP) — Texas Workforce Commission: Network connecting veterans with employment, training, medical, education resources. T: 888-VET-TEX1 | tvlp@twc.state.tx.us
- SBA Resources for Veterans: Veteran Business Outreach Centers (VBOC), Service-Disabled Veteran-Owned programs at sba.gov/VETS
- Texas Property Tax Exemptions for Veterans: Partial exemptions available for disabled veterans. See window.state.tx.us/taxinfo/proptax/exemptions.html

HUB CERTIFICATION (Historically Underutilized Business):
- Brandon's veteran status may qualify Northbrand Aperture for HUB certification under "Service Rendered Disabled Veteran" category IF applicable disability criteria are met.
- Standard HUB requires 51%+ ownership by qualifying individual (Asian Pacific American, Black American, Hispanic American, Native American, Service Rendered Disabled Veteran, or American woman) with U.S. citizenship and Texas residency.
- HUB certification is FREE and valid for 4 years.
- Benefits: listed in Texas HUB Directory used by state agencies to solicit bids; access to subcontracting opportunities; prime contractor visibility. Texas awarded $1.8B+ in HUB contracts in FY2014.
- Apply: window.state.tx.us/procurement/prog/hub/
- Register on Centralized Master Bidders List (CMBL) to receive bid invitations.

SERVICE-DISABLED VETERAN-OWNED BUSINESS (Federal, SBA):
- A separate federal program from the TX veteran exemption.
- Government-wide goal: no less than 3% of all federal prime/subcontract awards go to Service-Disabled Veteran-Owned Small Business Concerns (SDVOSBC).
- Eligibility: 51%+ owned/controlled by service-disabled veteran(s); management/daily operations controlled by service-disabled veteran; must be registered through VA Department.
- If Brandon has a service-connected disability rating, Northbrand Aperture may qualify for SDVOSBC federal set-aside contracts.
- More info: sba.gov/content/service-disabled-veteran-owned-small-business-concerns-sdvosbc

FINANCING OPTIONS FOR NORTHBRAND APERTURE:
- SBA 7(a) Loan: Up to $5M, for-profit businesses meeting SBA size standards; covers equipment, working capital, business start; standard rate terms.
- SBA Microloan Program: Up to $50,000 direct from nonprofit intermediary; suitable for a startup photography LLC needing camera gear or studio equipment.
- SBA 504 Loan: For long-term fixed assets (equipment with 10+ year useful life); up to 40% of project financed by CDC at fixed rate.
- PeopleFund: Texas-based nonprofit 501(c)(3) providing loans and technical assistance to businesses left out of mainstream finance. peoplefund.org
- Abilene-area credit unions with small business programs: Abilene FCU, First Abilene FCU, Abilene Teachers FCU, Communities of Abilene FCU.
- Jobs 4 Texas (J4T): State program increasing small business access to capital; won $46.5M U.S. Treasury award through SSBCI.
- SBA does NOT offer grants to individual business owners to start or grow a business.

LOCAL INCENTIVES (Abilene / Taylor County area):
- Contact Abilene Chamber of Commerce for local Type A/Type B sales tax incentives.
- Property Tax Abatements available from cities, counties, special districts.
- Freeport Exemption: tangible personal property detained in Texas 175 days or less may be exempt from ad valorem taxation.
- Chapter 380/381 Economic Development Agreements available from municipalities and counties.

SMALL BUSINESS DEVELOPMENT CENTERS (SBDCs):
- SBDCs provide free consulting, training, and technical assistance.
- SCORE mentors available for tailored business area assistance. score.org
- Governor's Small Business Forums held statewide covering financing, government contracting, veteran hiring incentives.

════════════════════════════════
RESPONSE GUIDELINES
════════════════════════════════
- Answer questions spanning: franchise tax, veteran exemption, business formation compliance, licenses/permits, HUB/SDVOSBC certification, SBA loans, local Abilene resources, property tax, sales tax applicability to photography.
- Cite specific section numbers for Chapter 171 questions. Reference the Handbook by section name for formation/resource questions.
- Be direct, precise, and professional. No pleasantries. No em-dashes.
- Always recommend the user consult a Texas-licensed CPA and/or attorney for their specific situation. You are not a licensed attorney or CPA.`;

const STARTER_QUESTIONS = [
  "Do I qualify for the veteran-owned business exemption?",
  "What steps do I take to claim the veteran exemption?",
  "Do I qualify for HUB or SDVOSBC federal certification?",
  "What SBA loan programs are available for my business?",
  "What local Abilene resources or incentives apply to me?",
  "What franchise tax rate applies to my photography LLC?",
  "Are photography services subject to Texas sales tax?",
  "What's the no-tax-due revenue threshold?",
];

export default function TXTaxAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text) {
    if (!text.trim() || loading) return;
    const userMsg = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: TX_LAW_CONTEXT,
          messages: newMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await response.json();
      const reply = data.content?.[0]?.text || "No response received.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "Error contacting API. Please try again." }]);
    }
    setLoading(false);
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.sidebar}>
        <div style={styles.logoBlock}>
          <div style={styles.logoMark}>NA</div>
          <div>
            <div style={styles.logoName}>Northbrand Aperture</div>
            <div style={styles.logoSub}>TX Business Advisor</div>
          </div>
        </div>

        <div style={styles.sectionLabel}>QUICK QUESTIONS</div>
        {STARTER_QUESTIONS.map((q, i) => (
          <button
            key={i}
            style={styles.quickBtn}
            onClick={() => sendMessage(q)}
            disabled={loading}
            onMouseEnter={e => e.currentTarget.style.background = "#1a2a1a"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            {q}
          </button>
        ))}

        <div style={styles.divider} />

        <div style={styles.statusBlock}>
          <div style={styles.statusRow}>
            <span style={styles.statusDot} />
            <span style={styles.statusText}>Veteran Exemption Eligible</span>
          </div>
          <div style={styles.statusNote}>TX Tax Code §171.0005 · Governor's Handbook · SBA Programs</div>
        </div>

        <div style={styles.caveat}>
          ⚠ Not legal/tax advice. Consult a licensed TX CPA or attorney.
        </div>
      </div>

      <div style={styles.main}>
        <div style={styles.header}>
          <div style={styles.headerTitle}>Texas Small Business Assistant</div>
          <div style={styles.headerSub}>TX Tax Code Ch. 171 · Governor's Handbook · Veteran-Owned LLC</div>
        </div>

        <div style={styles.chatArea}>
          {messages.length === 0 && (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>⚖</div>
              <div style={styles.emptyTitle}>Ask about taxes, certifications, financing, or business compliance</div>
              <div style={styles.emptyBody}>
                Pre-loaded with TX Tax Code Chapter 171 and the Governor's Small Business Handbook.
                Knows your profile: honorably discharged Air Force veteran, photography LLC, Abilene TX, formed after Jan 1, 2022.
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} style={msg.role === "user" ? styles.userBubble : styles.aiBubble}>
              <div style={msg.role === "user" ? styles.userLabel : styles.aiLabel}>
                {msg.role === "user" ? "You" : "Advisor"}
              </div>
              <div style={msg.role === "user" ? styles.userText : styles.aiText}>
                {msg.content.split("\n").map((line, li) => (
                  <span key={li}>{line}{li < msg.content.split("\n").length - 1 ? <br /> : null}</span>
                ))}
              </div>
            </div>
          ))}
          {loading && (
            <div style={styles.aiBubble}>
              <div style={styles.aiLabel}>Advisor</div>
              <div style={styles.thinking}>
                <span style={{...styles.dot, animationDelay: "0s"}} />
                <span style={{...styles.dot, animationDelay: "0.2s"}} />
                <span style={{...styles.dot, animationDelay: "0.4s"}} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={styles.inputRow}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about veteran exemption, tax rates, filing requirements, taxable margin..."
            style={styles.textarea}
            rows={2}
            disabled={loading}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || !input.trim()}
            style={{
              ...styles.sendBtn,
              opacity: loading || !input.trim() ? 0.4 : 1,
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
            }}
          >
            ↑
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0f0a; }
        textarea:focus { outline: none; border-color: #4a7a4a !important; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0f180f; }
        ::-webkit-scrollbar-thumb { background: #2a3a2a; border-radius: 2px; }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    height: "100vh",
    background: "#0a0f0a",
    fontFamily: "'IBM Plex Sans', sans-serif",
    color: "#c8d8c8",
  },
  sidebar: {
    width: 260,
    minWidth: 260,
    background: "#0d140d",
    borderRight: "1px solid #1a2a1a",
    display: "flex",
    flexDirection: "column",
    padding: "20px 16px",
    gap: 8,
  },
  logoBlock: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
    paddingBottom: 20,
    borderBottom: "1px solid #1a2a1a",
  },
  logoMark: {
    width: 38,
    height: 38,
    background: "linear-gradient(135deg, #2d5a2d, #4a8a4a)",
    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    fontWeight: 500,
    color: "#c8ffc8",
    letterSpacing: 1,
    flexShrink: 0,
  },
  logoName: {
    fontSize: 13,
    fontWeight: 600,
    color: "#e8f8e8",
    letterSpacing: 0.3,
  },
  logoSub: {
    fontSize: 10,
    color: "#4a6a4a",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    marginTop: 2,
  },
  sectionLabel: {
    fontSize: 9,
    color: "#3a5a3a",
    letterSpacing: 2,
    textTransform: "uppercase",
    fontFamily: "'IBM Plex Mono', monospace",
    marginBottom: 4,
    marginTop: 8,
  },
  quickBtn: {
    background: "transparent",
    border: "none",
    color: "#7a9a7a",
    fontSize: 11.5,
    textAlign: "left",
    cursor: "pointer",
    padding: "7px 10px",
    borderRadius: 5,
    lineHeight: 1.4,
    transition: "background 0.15s, color 0.15s",
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
  divider: {
    height: 1,
    background: "#1a2a1a",
    margin: "12px 0",
  },
  statusBlock: {
    background: "#0f1f0f",
    border: "1px solid #1e3a1e",
    borderRadius: 8,
    padding: "12px 12px",
    marginTop: 4,
  },
  statusRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#4a9a4a",
    flexShrink: 0,
    boxShadow: "0 0 6px #4a9a4a",
  },
  statusText: {
    fontSize: 11,
    color: "#6abf6a",
    fontWeight: 600,
    letterSpacing: 0.2,
  },
  statusNote: {
    fontSize: 10,
    color: "#3a5a3a",
    lineHeight: 1.4,
    fontFamily: "'IBM Plex Mono', monospace",
  },
  caveat: {
    fontSize: 10,
    color: "#3a4a3a",
    lineHeight: 1.5,
    marginTop: "auto",
    paddingTop: 16,
    borderTop: "1px solid #151f15",
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },
  header: {
    padding: "20px 28px 16px",
    borderBottom: "1px solid #1a2a1a",
    background: "#0b120b",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 600,
    color: "#d8f0d8",
    letterSpacing: -0.3,
  },
  headerSub: {
    fontSize: 11,
    color: "#3a5a3a",
    marginTop: 3,
    fontFamily: "'IBM Plex Mono', monospace",
    letterSpacing: 0.5,
  },
  chatArea: {
    flex: 1,
    overflowY: "auto",
    padding: "24px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  emptyState: {
    margin: "auto",
    maxWidth: 440,
    textAlign: "center",
    padding: "48px 24px",
  },
  emptyIcon: {
    fontSize: 42,
    marginBottom: 16,
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: 17,
    color: "#9abf9a",
    fontWeight: 500,
    marginBottom: 12,
  },
  emptyBody: {
    fontSize: 13,
    color: "#4a6a4a",
    lineHeight: 1.7,
  },
  userBubble: {
    alignSelf: "flex-end",
    maxWidth: "72%",
  },
  aiBubble: {
    alignSelf: "flex-start",
    maxWidth: "84%",
  },
  userLabel: {
    fontSize: 10,
    color: "#4a7a4a",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "'IBM Plex Mono', monospace",
    marginBottom: 5,
    textAlign: "right",
  },
  aiLabel: {
    fontSize: 10,
    color: "#2a4a2a",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "'IBM Plex Mono', monospace",
    marginBottom: 5,
  },
  userText: {
    background: "#162416",
    border: "1px solid #2a4a2a",
    borderRadius: "12px 12px 3px 12px",
    padding: "12px 16px",
    fontSize: 13.5,
    color: "#c8e8c8",
    lineHeight: 1.6,
  },
  aiText: {
    background: "#0f180f",
    border: "1px solid #1a2c1a",
    borderRadius: "12px 12px 12px 3px",
    padding: "14px 18px",
    fontSize: 13.5,
    color: "#b8d0b8",
    lineHeight: 1.75,
    fontFamily: "'IBM Plex Sans', sans-serif",
  },
  thinking: {
    background: "#0f180f",
    border: "1px solid #1a2c1a",
    borderRadius: "12px 12px 12px 3px",
    padding: "16px 20px",
    display: "flex",
    gap: 6,
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#4a7a4a",
    display: "inline-block",
    animation: "pulse 1.2s ease-in-out infinite",
  },
  inputRow: {
    display: "flex",
    gap: 10,
    padding: "16px 28px 20px",
    borderTop: "1px solid #1a2a1a",
    background: "#0b120b",
    alignItems: "flex-end",
  },
  textarea: {
    flex: 1,
    background: "#0f180f",
    border: "1px solid #253525",
    borderRadius: 10,
    color: "#c8e8c8",
    fontSize: 13.5,
    padding: "12px 16px",
    resize: "none",
    fontFamily: "'IBM Plex Sans', sans-serif",
    lineHeight: 1.5,
    transition: "border-color 0.2s",
  },
  sendBtn: {
    width: 42,
    height: 42,
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #2d5a2d, #3d7a3d)",
    color: "#c8ffc8",
    fontSize: 18,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "opacity 0.15s, transform 0.1s",
    lineHeight: 1,
  },
};
