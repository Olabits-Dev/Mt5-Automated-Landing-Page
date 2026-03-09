import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  TrendingUp,
  Activity,
  CreditCard,
  Users,
  ArrowRight,
  BarChart3,
  Bot,
  Globe,
  Phone,
  Image as ImageIcon,
  Sparkles,
  Wallet,
  LineChart,
  Layers3,
  CircleDollarSign,
  BadgeCheck,
} from "lucide-react";
import "./index.css";

const WHATSAPP_NUMBER = "2348035208600";

const plans = [
  {
    name: "Starter",
    price: "$50",
    period: "/month",
    description: "A simple plan for traders getting started with one managed setup.",
    features: [
      "1 trading account",
      "Forex + Gold support",
      "Client portal access",
      "Basic reporting",
    ],
  },
  {
    name: "Pro",
    price: "$100",
    period: "/month",
    description: "Best for serious traders who want broader market access and stronger support.",
    featured: true,
    features: [
      "Forex + Deriv support",
      "Priority onboarding",
      "Live runtime monitoring",
      "Trade history dashboard",
      "Manual support assistance",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For multi-account operations, scaling traders, and partnership deals.",
    features: [
      "Multi-account deployment",
      "Custom risk settings",
      "Advanced reporting",
      "Dedicated onboarding",
    ],
  },
];

const testimonials = [
  {
    name: "Forex Client",
    role: "Swing & intraday trader",
    text: "The portal made everything feel professional. I could see trade history and account status clearly without chasing updates.",
  },
  {
    name: "Deriv Client",
    role: "Synthetic indices trader",
    text: "The setup was clean, support was quick, and I liked that the service had clear structure, monitoring, and rules.",
  },
  {
    name: "Crypto Client",
    role: "Multi-market trader",
    text: "What sold me was the way the service was packaged. It felt like a real product, not just a random bot file.",
  },
];

const faqs = [
  {
    q: "How does onboarding work?",
    a: "You choose a plan, message me through WhatsApp, send your account details, and after confirmation I activate your setup and issue portal access.",
  },
  {
    q: "Which markets are supported?",
    a: "The service is structured for Forex, Crypto, Gold, and Deriv synthetic indices depending on your plan and account setup.",
  },
  {
    q: "Do I need to keep my PC on?",
    a: "No. The service is positioned as a managed setup, so your role is mainly monitoring through the portal while I handle the operational side.",
  },
  {
    q: "How do payments work?",
    a: "Payments are handled manually for now. Once payment is confirmed, your service is activated and onboarding begins.",
  },
];

const proofImages = [
  {
    src: "/results/result1.jpg",
    title: "Trade result proof",
    text: "Real result proof that supports trust and conversion.",
  },
  {
    src: "/results/result2.jpg",
    title: "Account performance proof",
    text: "Clean account-level proof adds credibility to the service.",
  },
  {
    src: "/results/result3.jpg",
    title: "Bot execution proof",
    text: "Trade execution proof helps prospects believe the system is real.",
  },
  {
    src: "/results/result4.jpg",
    title: "Growth proof",
    text: "Growth screenshots support stronger buyer confidence.",
  },
  {
    src: "/results/result7.jpg",
    title: "Monitoring proof",
    text: "Shows that the service is organized and actively managed.",
  },
  {
    src: "/results/result8.jpg",
    title: "Runtime proof",
    text: "Useful for prospects who want structured monitoring visibility.",
  },
  {
    src: "/results/result9.jpg",
    title: "Profit proof",
    text: "A clean presentation of result proof is powerful for sales.",
  },
  {
    src: "/results/result10.jpg",
    title: "Automation proof",
    text: "Helps position the offer as a real automated trading service.",
  },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title-wrap">
      <span className="badge badge-soft">{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-text">{text}</p>
    </div>
  );
}

function ProofCard({ item }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card proof-card premium-card">
      {!imgError ? (
        <img
          src={item.src}
          alt={item.title}
          className="proof-image"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="proof-placeholder">
          <ImageIcon size={28} />
          <p>Add image to {item.src}</p>
        </div>
      )}

      <div className="proof-content">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </div>
  );
}

function StatMini({ icon: Icon, value, label, tone = "blue" }) {
  return (
    <div className={`card stat-card premium-card tone-${tone}`}>
      <div className={`stat-icon stat-icon-${tone}`}>
        <Icon size={18} />
      </div>
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    market: "Forex + Crypto + Deriv",
    plan: "Pro",
    capital: "",
    broker: "",
    notes: "",
  });

  const completion = useMemo(() => {
    const fields = [form.fullName, form.email, form.whatsapp, form.market, form.plan];
    const done = fields.filter(Boolean).length;
    return Math.round((done / fields.length) * 100);
  }, [form]);

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function openWhatsapp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const message = `Hello Samuel, I want to sign up for your MT5 SaaS trading service.

Full Name: ${form.fullName}
Email: ${form.email}
WhatsApp: ${form.whatsapp}
Preferred Plan: ${form.plan}
Market Interest: ${form.market}
Broker / Exchange: ${form.broker}
Estimated Capital: ${form.capital}
Notes: ${form.notes}`;

    openWhatsapp(message);
  }

  function handleQuickWhatsapp() {
    const quickMsg =
      "Hello Samuel, I want to learn more about your MT5 SaaS trading service and how to get started.";
    openWhatsapp(quickMsg);
  }

  function scrollToSignup() {
    document.getElementById("signup-funnel")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="site-shell premium-theme">
      <div className="hero-glow hero-glow-blue" />
      <div className="hero-glow hero-glow-green" />
      <div className="hero-glow hero-glow-purple" />

      <header className="site-header glass-header">
        <div className="container nav-row">
          <div className="brand-wrap">
            <div className="brand-icon gradient-brand">
              <Bot size={20} />
            </div>
            <div>
              <p className="brand-title">MT5 SaaS Automation</p>
              <p className="brand-subtitle">Managed trading service with client portal</p>
            </div>
          </div>

          <nav className="desktop-nav">
            <a href="#features">Features</a>
            <a href="#proof">Results</a>
            <a href="#pricing">Pricing</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>

          <button className="btn btn-outline" onClick={scrollToSignup}>
            Client Signup
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section hero-premium">
          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-copy"
            >
              <span className="badge badge-gradient">
                <Sparkles size={14} />
                Forex + Deriv + Managed SaaS
              </span>

              <h1 className="hero-title">
                A more professional way to sell automated trading as a structured managed service.
              </h1>

              <p className="hero-text">
                I help traders move beyond raw bot files by offering a managed trading experience with
                account monitoring, trade visibility, subscription control, onboarding support, and a
                professional client-facing portal.
              </p>

              <div className="hero-actions">
                <button className="btn btn-primary" onClick={scrollToSignup}>
                  Start on WhatsApp <ArrowRight size={16} />
                </button>
                <a className="btn btn-outline" href="#proof">
                  View Results
                </a>
              </div>

              <div className="hero-trust-row">
                <div className="trust-chip">
                  <BadgeCheck size={16} />
                  <span>Structured onboarding</span>
                </div>
                <div className="trust-chip">
                  <Shield size={16} />
                  <span>Managed operations</span>
                </div>
                <div className="trust-chip">
                  <BarChart3 size={16} />
                  <span>Client portal access</span>
                </div>
              </div>

              <div className="stats-grid">
                <StatMini icon={Globe} value="3+" label="Markets Covered" tone="blue" />
                <StatMini icon={Users} value="Live" label="Client Portal" tone="green" />
                <StatMini icon={Shield} value="Managed" label="Service Model" tone="purple" />
                <StatMini icon={Wallet} value="Flexible" label="Plan Structure" tone="blue" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="card hero-panel premium-card hero-panel-premium">
                <div className="hero-panel-head">
                  <div>
                    <span className="mini-label">Service Snapshot</span>
                    <h3>
                      <BarChart3 size={18} /> Premium managed trading offer
                    </h3>
                  </div>
                  <span className="status-pill status-live">Live service model</span>
                </div>

                <div className="hero-panel-body">
                  <div className="feature-mini-grid">
                    {[
                      {
                        icon: Activity,
                        title: "Runtime visibility",
                        text: "Clients can view account status, floating PnL, and active position updates.",
                        tone: "blue",
                      },
                      {
                        icon: Shield,
                        title: "Admin control",
                        text: "Manage access, expiry, activation, and subscription status cleanly.",
                        tone: "green",
                      },
                      {
                        icon: TrendingUp,
                        title: "Trade history",
                        text: "Open and closed trades are presented in a more organized client-facing way.",
                        tone: "purple",
                      },
                      {
                        icon: Layers3,
                        title: "Scalable structure",
                        text: "Sell it like a true SaaS service, not just a download link.",
                        tone: "blue",
                      },
                    ].map((item) => (
                      <div key={item.title} className={`mini-box mini-box-${item.tone}`}>
                        <div className={`mini-icon mini-icon-${item.tone}`}>
                          <item.icon size={18} />
                        </div>
                        <p className="mini-box-title">{item.title}</p>
                        <p className="mini-box-text">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="success-note gradient-note">
                    <p className="success-note-title">Positioning advantage</p>
                    <p>
                      The strongest sales angle is not “buy my bot.” It is: “subscribe to a managed
                      trading service with monitoring, onboarding, support, and client access.”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="Core features"
              title="A more professional service package that feels structured, trustworthy, and scalable."
              text="The goal is to present your offer like a serious fintech service with onboarding, visibility, and client-side confidence."
            />

            <div className="grid-4">
              {[
                {
                  icon: Bot,
                  title: "Multi-market support",
                  text: "Serve Forex, Gold, Crypto, and Deriv synthetic traders under one organized offer.",
                  tone: "blue",
                },
                {
                  icon: Users,
                  title: "Client portal access",
                  text: "Give each client a proper place to view account status, history, and access information.",
                  tone: "green",
                },
                {
                  icon: CreditCard,
                  title: "Sales-ready onboarding",
                  text: "Manual payment and direct onboarding still feel premium when the process is well presented.",
                  tone: "purple",
                },
                {
                  icon: Shield,
                  title: "Operational control",
                  text: "Manage activation, expiry, and account access in a way that supports growth.",
                  tone: "blue",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className={`card feature-card premium-card feature-tone-${item.tone}`}
                >
                  <div className={`feature-icon feature-icon-${item.tone}`}>
                    <item.icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="proof" className="section-block section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="Proof / results"
              title="Proof helps prospects trust the service faster"
              text="When people see real dashboard screenshots, trade activity, and result proof, the service becomes easier to believe."
            />

            <div className="grid-3">
              {proofImages.map((item) => (
                <ProofCard key={item.src} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <div className="showcase-band premium-card">
              <div className="showcase-copy">
                <span className="badge badge-soft">Premium positioning</span>
                <h3>Turn interest into trust before the first chat even starts.</h3>
                <p>
                  A better UI gives your service a stronger first impression. It helps prospects feel
                  that they are dealing with a real product with process, support, structure, and proof.
                </p>
              </div>

              <div className="showcase-metrics">
                <div className="metric-chip">
                  <LineChart size={16} />
                  <span>Trade visibility</span>
                </div>
                <div className="metric-chip">
                  <CircleDollarSign size={16} />
                  <span>Managed subscriptions</span>
                </div>
                <div className="metric-chip">
                  <Shield size={16} />
                  <span>Controlled access</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="How it works"
              title="A simple conversion flow that helps you qualify and onboard better clients"
              text="The smoother the process feels, the easier it becomes to move prospects from interest into action."
            />

            <div className="grid-4">
              {[
                "Prospects review your page, pricing, proof, and service structure.",
                "They fill the form and continue directly to WhatsApp.",
                "You answer questions, qualify the lead, and confirm payment manually.",
                "You activate the account, issue portal access, and begin managed service delivery.",
              ].map((step, idx) => (
                <div key={step} className="card step-card premium-card">
                  <div className="step-pill">{idx + 1}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="Pricing"
              title="Clear plans with room for tailored onboarding"
              text="Use simple pricing to reduce friction, while still leaving space for custom setups based on support level or market coverage."
            />

            <div className="grid-3">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card pricing-card premium-card ${plan.featured ? "pricing-featured" : ""}`}
                >
                  <div className="pricing-head">
                    <div className="pricing-title-row">
                      <h3>{plan.name}</h3>
                      {plan.featured ? <span className="badge badge-gradient">Popular</span> : null}
                    </div>

                    <div className="price-row">
                      <span className="price">{plan.price}</span>
                      <span className="price-period">{plan.period}</span>
                    </div>

                    <p className="pricing-desc">{plan.description}</p>
                  </div>

                  <ul className="pricing-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`btn btn-full ${plan.featured ? "btn-primary" : ""}`} onClick={scrollToSignup}>
                    Choose {plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signup-funnel" className="section-block">
          <div className="container signup-grid">
            <div className="card premium-card signup-card">
              <div className="card-header">
                <span className="mini-label">Client signup funnel</span>
                <h3>Tell me about your trading setup</h3>
                <p>Fill this in and continue directly to WhatsApp so I can understand your setup faster.</p>
              </div>

              <form className="form-grid" onSubmit={handleSubmit}>
                <div>
                  <label>Full name</label>
                  <input
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="name@email.com"
                    required
                  />
                </div>

                <div>
                  <label>WhatsApp</label>
                  <input
                    value={form.whatsapp}
                    onChange={(e) => updateField("whatsapp", e.target.value)}
                    placeholder="+234..."
                    required
                  />
                </div>

                <div>
                  <label>Preferred plan</label>
                  <input
                    value={form.plan}
                    onChange={(e) => updateField("plan", e.target.value)}
                    placeholder="Pro"
                  />
                </div>

                <div>
                  <label>Market interest</label>
                  <input
                    value={form.market}
                    onChange={(e) => updateField("market", e.target.value)}
                    placeholder="Forex / Crypto / Deriv"
                  />
                </div>

                <div>
                  <label>Broker / exchange</label>
                  <input
                    value={form.broker}
                    onChange={(e) => updateField("broker", e.target.value)}
                    placeholder="Exness / Deriv / Binance"
                  />
                </div>

                <div className="full-span">
                  <label>Estimated capital</label>
                  <input
                    value={form.capital}
                    onChange={(e) => updateField("capital", e.target.value)}
                    placeholder="$500, $2,000, ₦ equivalent..."
                  />
                </div>

                <div className="full-span">
                  <label>Notes</label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="Tell me your goals, preferred markets, or account setup."
                    rows={5}
                  />
                </div>

                <div className="full-span progress-box premium-progress">
                  <div>
                    <p className="progress-title">Form completion</p>
                    <p className="progress-text">
                      Completing the key fields makes onboarding and qualification much faster.
                    </p>
                  </div>
                  <div className="progress-value">{completion}%</div>
                </div>

                <div className="full-span action-row">
                  <button type="submit" className="btn btn-primary">
                    Continue on WhatsApp
                  </button>
                  <button type="button" className="btn btn-outline" onClick={handleQuickWhatsapp}>
                    Talk on WhatsApp
                  </button>
                </div>
              </form>
            </div>

            <div className="side-stack">
              <div className="card premium-card">
                <div className="card-header">
                  <span className="mini-label">Why prospects convert</span>
                  <h3>Trust improves when structure is visible</h3>
                </div>

                <div className="conversation-box">
                  <p>
                    Most prospects are tired of empty promises. That is why this page should not sound
                    like hype. It should feel organized, credible, and human.
                  </p>
                  <p>
                    When people see proof, monitoring, onboarding flow, subscription structure, and a
                    real portal concept, the service feels more serious and easier to trust.
                  </p>
                  <p>
                    Instead of just telling people that the bot works, the page should show that the
                    entire service is built around structure, support, visibility, and process.
                  </p>
                  <p>
                    That is what helps move a prospect from curiosity into a real WhatsApp conversation.
                  </p>
                </div>
              </div>

              <div className="card premium-card">
                <div className="card-header">
                  <span className="mini-label">Direct contact</span>
                  <h3>WhatsApp onboarding support</h3>
                </div>

                <div className="info-row">
                  <Phone size={16} />
                  <span>Fast, personal, and direct communication</span>
                </div>

                <div className="muted-box">
                  <p>
                    I prefer to handle communication through WhatsApp because it is more direct and
                    allows me to answer questions, build trust, and guide prospects through onboarding
                    without friction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-block">
          <div className="container">
            <SectionTitle
              eyebrow="Testimonials"
              title="Client feedback builds social proof"
              text="Testimonials help reinforce the quality of your process and the professionalism of the service."
            />

            <div className="grid-3">
              {testimonials.map((item) => (
                <div key={item.name} className="card testimonial-card premium-card">
                  <p className="testimonial-text">“{item.text}”</p>
                  <div className="testimonial-meta">
                    <p className="testimonial-name">{item.name}</p>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-block section-soft">
          <div className="container">
            <SectionTitle
              eyebrow="FAQ"
              title="Questions people ask before they sign up"
              text="Answering objections early reduces friction and makes the service feel more transparent."
            />

            <div className="faq-grid">
              {faqs.map((item) => (
                <div key={item.q} className="card faq-card premium-card">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer premium-footer">
        <div className="container footer-row">
          <div>
            <p className="footer-title">MT5 SaaS Automation</p>
            <p className="footer-text">Managed trading service for Forex, Crypto, Gold, and Deriv.</p>
          </div>
          <div className="footer-text">
            Built to convert attention into premium managed-service clients.
          </div>
        </div>
      </footer>
    </div>
  );
}