// Stand-in for next/image so the shadcn examples run under Vite.
type ImageProps = Omit<React.ComponentProps<"img">, "src"> & {
  src: string | { src: string }
  fill?: boolean
  priority?: boolean
  quality?: number
  placeholder?: string
  blurDataURL?: string
  unoptimized?: boolean
}

export default function Image({
  src,
  fill,
  priority: _priority,
  quality: _quality,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  unoptimized: _unoptimized,
  style,
  ...props
}: ImageProps) {
  return (
    <img
      src={typeof src === "string" ? src : src.src}
      style={
        fill
          ? { position: "absolute", inset: 0, width: "100%", height: "100%", ...style }
          : style
      }
      {...props}
    />
  )
}
