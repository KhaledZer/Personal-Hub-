const variants = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
  danger: "text-red-500 hover:text-red-600 hover:bg-red-50 text-sm px-2 py-1 rounded transition-colors",
};

const Button = ({ variant = "primary", type = "button", className = "", children, ...props }) => (
  <button type={type} className={`${variants[variant]} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
