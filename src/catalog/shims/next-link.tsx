// Stand-in for next/link so the shadcn examples run under Vite.
type LinkProps = Omit<React.ComponentProps<"a">, "href"> & {
  href: string | { pathname?: string }
  prefetch?: boolean
  replace?: boolean
  scroll?: boolean
}

export default function Link({
  href,
  prefetch: _prefetch,
  replace: _replace,
  scroll: _scroll,
  ...props
}: LinkProps) {
  return <a href={typeof href === "string" ? href : (href.pathname ?? "#")} {...props} />
}
