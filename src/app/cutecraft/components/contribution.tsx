import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Contribution {
  icon: IconDefinition;
  title: string;
  description: string;
  color: string;
}

interface MyRoleSectionProps {
  contributions: Contribution[];
}

export default function MyRoleSection({ contributions }: MyRoleSectionProps) {
  return (
    <div className="mb-16">
      <h2
        className="font-display font-black leading-none mb-4"
        style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", color: "var(--text)" }}
      >
        My Role
      </h2>
      <div className="section-rule mb-6" />

      <p
        className="text-sm font-mono font-light mb-6 max-w-xl leading-[1.75]"
        style={{ color: "var(--text-muted)" }}
      >
        I am responsible for regulations within the CuteCraft project, ensuring that every player adheres to the rules and maintains a positive gaming environment. My role involves monitoring player behavior, addressing any violations, and implementing strategies to enhance the overall community experience. Designing User Interfaces is also a key aspect of my responsibilities, where I focus on creating intuitive and visually appealing interfaces that enhance user interaction and engagement within the game. Responsible for enhancing player experience with feedback.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {contributions.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 py-5 pr-6"
            style={{ borderBottom: "1px solid var(--border-subtle)" }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className={`w-4 h-4 shrink-0 mt-0.5 ${item.color}`}
            />
            <div>
              <h3
                className="text-sm font-mono font-medium mb-1"
                style={{ color: "var(--text)" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs font-mono font-light leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
