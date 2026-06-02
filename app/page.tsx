import { ShieldCheck } from "lucide-react";

export default function ShutdownPage() {
  return (
    <div className="shutdown-page">
      <main className="shutdown-root">
        <div className="shutdown-card">
          <div className="shutdown-brand">
            <div className="shutdown-icon" aria-hidden="true">
              <ShieldCheck size={22} strokeWidth={2} color="#ffffff" />
            </div>
            <p className="shutdown-logo">
              SmartPractice <span className="shutdown-ai">AI</span>
            </p>
          </div>

          <span className="shutdown-badge">June 2026</span>

          <h1>Thank you to everyone who supported us along the way.</h1>

          <p className="shutdown-notice">
            Active services have been discontinued as of{" "}
            <strong>June 2026</strong>.
          </p>

          <p className="shutdown-contact">
            For any urgent administrative or support inquiries regarding
            historical data, please{" "}
            <a href="mailto:support@smartpractice.com">contact us</a>.
          </p>
        </div>

        <footer className="shutdown-footer">&copy; SmartPractice AI</footer>
      </main>
    </div>
  );
}
