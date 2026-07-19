type MobileMenuButtonProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MobileMenuButton({
  open,
  onToggle,
}: MobileMenuButtonProps) {
  return (
    <button
      className="mobile-menu-btn"
      id="mobile-menu-btn"
      aria-label="Toggle navigation"
      aria-expanded={open}
      onClick={onToggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
