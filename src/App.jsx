import { useEffect, useState } from 'react';

const solutions = [
  {
    id: 'screening',
    number: '01',
    title: 'Sanctions and watchlist screening',
    short: 'Screen customers and transactions across global, local and internal lists.',
    detail:
      'Support onboarding, batch screening and transaction interdiction with configurable fuzzy matching, scoring, list updates and role-based alert handling.',
    points: ['On-demand and batch screening', 'SWIFT and remittance screening', 'Whitelist and rescreening controls'],
  },
  {
    id: 'kyc',
    number: '02',
    title: 'KYC and customer risk',
    short: 'Maintain a consistent view of customer risk throughout the relationship.',
    detail:
      'Configure risk models, onboarding questions, transaction profiles, due diligence workflows and periodic reviews for individuals and entities.',
    points: ['Customer risk scoring', 'CDD and EDD workflows', 'Periodic KYC and TP review'],
  },
  {
    id: 'monitoring',
    number: '03',
    title: 'Transaction monitoring',
    short: 'Turn transaction data into focused, reviewable alerts.',
    detail:
      'A configurable rules engine supports customer profiling, scenario detection, scoring, investigation and regulatory filing, with planned AI and machine learning use cases.',
    points: ['Configurable rules and thresholds', 'Customer and transaction review', 'Alert-to-case workflow'],
  },
  {
    id: 'reporting',
    number: '04',
    title: 'Regulatory reporting',
    short: 'Prepare and manage required reports through controlled workflows.',
    detail:
      'Bring CTR, STR/SAR, FATCA, self-assessment and independent testing activities into a traceable reporting process.',
    points: ['CTR and STR/SAR support', 'FATCA XML reporting', 'Bangladesh Bank reporting'],
  },
  {
    id: 'case',
    number: '05',
    title: 'Integrated case management',
    short: 'Give investigators one place to review alerts, evidence and decisions.',
    detail:
      'Connect alerts from compliance and fraud controls with customer context, related parties, requests for information, case history and approvals.',
    points: ['Holistic customer view', 'Case merge and escalation', 'Investigation and approval history'],
  },
  {
    id: 'specialist',
    number: '06',
    title: 'Specialist financial crime controls',
    short: 'Extend monitoring to areas that require dedicated rules and workflows.',
    detail:
      'Apply focused controls for trade-based money laundering, card activity, remittance, inquiry management and branch-level compliance assessment.',
    points: ['TBML risk and rule monitoring', 'Card and remittance controls', 'Inquiry and assessment workflows'],
  },
];

const services = [
  ['01', 'Discovery and solution design', 'Define scope, map regulatory and operational requirements, and agree the target operating model.'],
  ['02', 'Implementation and integration', 'Connect customer, transaction and external data sources with existing banking platforms.'],
  ['03', 'Configuration and tuning', 'Configure risk models, rules, thresholds, workflows, entitlements and reports for the institution.'],
  ['04', 'Testing, training and go-live', 'Support system testing, UAT, user training, deployment and controlled transition to production.'],
  ['05', 'Production support', 'Provide post-production assistance, release planning, enhancements and ongoing technical support.'],
];

const clients = [
  'UCB',
  'Sonali Bank',
  'Agrani Bank',
  'Prime Bank',
  'AB Bank',
  'Eastern Bank',
  'IFIC Bank',
  'Jamuna Bank',
  'Trust Bank',
  'Mutual Trust Bank',
  'Social Islami Bank',
  'Mercantile Bank',
  'Union Bank',
  'bKash',
  'NRB Bank',
];

function Brand() {
  return (
    <a className="brand text-decoration-none" href="#top" aria-label="AML365 home">
      <span className="brand-image-frame">
        <img src="/aml365-logo.png" alt="AML365" />
      </span>
    </a>
  );
}

function App() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);
  const active = solutions.find((item) => item.id === activeSolution) ?? solutions[0];

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top">
      <nav className="navbar navbar-expand-lg fixed-top" aria-label="Main navigation">
        <div className="container-xl">
          <Brand />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#solutions">Solutions</a>
              <a className="nav-link" href="#services">Services</a>
              <a className="nav-link" href="#clients">Clients</a>
              <a className="btn btn-dark rounded-pill px-4 ms-lg-2" href="#contact">Start a conversation</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container-xl position-relative">
          <div className="row align-items-end min-vh-100 py-5">
            <div className="col-lg-7 hero-copy" data-reveal>
              <p className="eyebrow">AML365 by DataSoft</p>
              <h1>Financial crime controls, built around the way banks work.</h1>
              <p className="hero-lead">
                AML365 brings customer risk, transaction monitoring, screening, investigation and regulatory reporting into one connected compliance environment.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <a className="btn btn-primary btn-lg rounded-pill" href="#solutions">Explore the portfolio <i className="bi bi-arrow-down-right ms-2"></i></a>
                <a className="btn btn-link btn-lg text-dark" href="#services">How we deliver</a>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0" data-reveal>
              <div className="signal-map" aria-label="Compliance intelligence flow">
                <div className="signal-head">
                  <span>Compliance intelligence</span>
                  <span className="status"><i></i> Connected</span>
                </div>
                <div className="signal-stage">
                  <div className="orbit orbit-one"></div>
                  <div className="orbit orbit-two"></div>
                  <div className="signal-core"><span>Risk</span><strong>360°</strong></div>
                  <span className="node node-a">KYC</span>
                  <span className="node node-b">Screening</span>
                  <span className="node node-c">Monitoring</span>
                  <span className="node node-d">Cases</span>
                </div>
                <div className="signal-foot">
                  <span>Customer</span><span>Transaction</span><span>External data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section-intro" id="about">
        <div className="container-xl py-5">
          <div className="row g-5 align-items-start">
            <div className="col-lg-4" data-reveal>
              <p className="eyebrow">Our AML business</p>
              <h2>One portfolio across the compliance lifecycle</h2>
            </div>
            <div className="col-lg-7 offset-lg-1" data-reveal>
              <p className="statement">Banks need controls that reflect their regulatory obligations without losing sight of daily operations.</p>
              <p className="text-secondary body-large">Our team works across risk assessment, customer due diligence, detection, investigation and reporting. The portfolio combines proven banking workflows with configurable technology, so each institution can apply its own policies and approval structure.</p>
              <div className="principles mt-5">
                <div><span>01</span><p>Designed for banking operations</p></div>
                <div><span>02</span><p>Configurable by compliance teams</p></div>
                <div><span>03</span><p>Connected from alert to report</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section" id="solutions">
        <div className="container-xl">
          <div className="section-heading row align-items-end g-4" data-reveal>
            <div className="col-lg-7">
              <p className="eyebrow">Solutions</p>
              <h2>A complete financial crime compliance portfolio</h2>
            </div>
            <div className="col-lg-5"><p className="text-secondary mb-1">Select a capability to see how it fits into the wider platform.</p></div>
          </div>

          <div className="solution-browser row g-0 mt-5" data-reveal>
            <div className="col-lg-5 solution-index" role="tablist" aria-label="AML solutions">
              {solutions.map((item) => (
                <button
                  key={item.id}
                  className={`solution-tab ${activeSolution === item.id ? 'active' : ''}`}
                  onClick={() => setActiveSolution(item.id)}
                  type="button"
                  role="tab"
                  aria-selected={activeSolution === item.id}
                >
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <i className="bi bi-arrow-right"></i>
                </button>
              ))}
            </div>
            <div className="col-lg-7 solution-detail" role="tabpanel" key={active.id}>
              <span className="detail-number">{active.number}</span>
              <p className="detail-kicker">AML365 capability</p>
              <h3>{active.title}</h3>
              <p className="detail-short">{active.short}</p>
              <p>{active.detail}</p>
              <ul className="list-unstyled mt-5 mb-0">
                {active.points.map((point) => <li key={point}><i className="bi bi-check2"></i>{point}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="platform-section">
        <div className="container-xl">
          <div className="row align-items-center g-5">
            <div className="col-lg-5" data-reveal>
              <p className="eyebrow eyebrow-light">The platform</p>
              <h2>Data enters once. Context travels with every decision.</h2>
              <p className="text-white-50 body-large">The architecture connects source systems, compliance controls and investigation workflows while keeping responsibilities clear.</p>
            </div>
            <div className="col-lg-7" data-reveal>
              <div className="flow-grid">
                <div className="flow-column">
                  <small>Inputs</small>
                  <span>Core banking</span><span>Customer data</span><span>Transactions</span><span>External lists</span>
                </div>
                <div className="flow-line"><i></i></div>
                <div className="flow-column emphasis">
                  <small>AML365</small>
                  <span>Data quality</span><span>Rules and scoring</span><span>Workflow</span><span>Analytics</span>
                </div>
                <div className="flow-line"><i></i></div>
                <div className="flow-column">
                  <small>Outcomes</small>
                  <span>Alerts</span><span>Cases</span><span>Reports</span><span>Audit trail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="container-xl">
          <div className="row g-5">
            <div className="col-lg-4" data-reveal>
              <div className="sticky-copy">
                <p className="eyebrow">Services</p>
                <h2>From first workshop to production support</h2>
                <p className="text-secondary body-large">Our delivery model combines AML domain knowledge with product engineering and banking-system integration.</p>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 service-list" data-reveal>
              {services.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section" id="clients">
        <div className="container-xl">
          <div className="row g-5 align-items-end" data-reveal>
            <div className="col-lg-5">
              <p className="eyebrow">Selected clients</p>
              <h2>Experience across Bangladesh’s financial sector</h2>
            </div>
            <div className="col-lg-6 offset-lg-1"><p className="text-secondary body-large mb-0">Our portfolio materials reflect work with commercial banks, state-owned banks, Islamic banks and financial service providers.</p></div>
          </div>
          <div className="client-grid mt-5" data-reveal>
            {clients.map((client) => <div key={client}>{client}</div>)}
          </div>
        </div>
      </section>

      {/* Team profiles will be added here when approved biographies and photographs are available. */}

      <section className="contact-section" id="contact">
        <div className="container-xl">
          <div className="contact-panel" data-reveal>
            <div>
              <p className="eyebrow eyebrow-light">Start a conversation</p>
              <h2>Let’s discuss your compliance priorities.</h2>
            </div>
            <a className="contact-link" href="mailto:info@datasoft-bd.com" aria-label="Email the DataSoft AML team">
              <span>Contact the AML team</span><i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container-xl d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <Brand />
          <p className="mb-0">A DataSoft financial crime compliance portfolio.</p>
          <p className="mb-0">© {new Date().getFullYear()} DataSoft Systems Bangladesh Limited</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
