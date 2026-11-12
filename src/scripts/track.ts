type Plausible = (
  event: string,
  options: { props: Record<string, string> },
) => void;

export function track(event: string, props: Record<string, string>) {
  (window as unknown as { plausible?: Plausible }).plausible?.(event, {
    props,
  });
}
