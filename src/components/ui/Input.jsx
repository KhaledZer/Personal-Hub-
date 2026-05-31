const Input = ({ className = "", ...props }) => (
  <input
    className={`border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 ${className}`}
    {...props}
  />
);

export default Input;
