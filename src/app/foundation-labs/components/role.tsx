import { faBook, faShield, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const responsibilities = [
  {
    title: "Policy Development",
    description:
      "Helping define and maintain rules, expectations, and community standards in a clear and consistent way.",
    icon: faBook,
  },
  {
    title: "Ethics & Moderation Guidance",
    description:
      "Supporting a fair and responsible structure for behavior, disputes, and community conduct.",
    icon: faShield,
  },
  {
    title: "Community Direction",
    description:
      "Contributing to a more thoughtful and welcoming environment for players and staff alike.",
    icon: faUsers,
  },
];

export default function RoleSection() {
  return (
    <div className="mb-16">
      <h2
        className="font-display font-black leading-none mb-4"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text)" }}
      >
        My Role
      </h2>
      <div className="section-rule mb-6" />

      <div className="space-y-0">
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className="py-5"
            style={{ borderBottom: "1px solid var(--border-subtle)" }}
          >
            <div className="flex items-start gap-3 mb-2">
              <div
                className="mt-1"
                style={{ color: "var(--accent)" }}
              >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              </div>
              <h3 className="font-mono font-medium" style={{ color: "var(--text)" }}>
                {item.title}
              </h3>
            </div>
            <p
              className="text-sm font-mono font-light leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
