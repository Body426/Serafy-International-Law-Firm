interface WatermarkProps {
  className?: string
  opacity?: number
  position?: "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right"
  size?: "small" | "medium" | "large"
}

export function Watermark({ className = "", opacity = 0.02, position = "center", size = "medium" }: WatermarkProps) {
  const sizeMap = {
    small: "200px 200px",
    medium: "300px 300px",
    large: "400px 400px",
  }

  const positionMap = {
    center: "center",
    "top-left": "top 10% left 10%",
    "top-right": "top 10% right 10%",
    "bottom-left": "bottom 10% left 10%",
    "bottom-right": "bottom 10% right 10%",
    "center-left": "center left 10%",
    "center-right": "center right 10%",
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        backgroundImage: `url('/serafy-logo.png')`,
        backgroundSize: sizeMap[size],
        backgroundPosition: positionMap[position],
        backgroundRepeat: "no-repeat",
        opacity: opacity,
        mixBlendMode: "multiply",
      }}
    />
  )
}
