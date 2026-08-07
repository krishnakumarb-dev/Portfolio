import { motion } from "framer-motion";

function Button({
  children,
  variant = "primary",
  type = "button",
  icon = null,
  disabled = false,
  fullWidth = false,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={
        disabled
          ? {}
          : {
              y: -3,
              scale: 1.02,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.97,
            }
      }
      transition={{
        duration: 0.2,
      }}
      className={`
        btn
        btn-${variant}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      <span
        className="flex items-center justify-center gap-2"
      >
        {children}

        {icon && icon}
      </span>
    </motion.button>
  );
}

export default Button;