export function Button({ children, onClick, variant = "default" }) {
  const base = "px-4 py-2 rounded text-white font-semibold";
  const styles = {
    default: "bg-blue-600 hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };
  return (
    <button onClick={onClick} className={\`\${base} \${styles[variant] || styles.default}\`}>
      {children}
    </button>
  );
}