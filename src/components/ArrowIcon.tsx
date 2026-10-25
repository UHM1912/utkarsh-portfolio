export function ArrowIcon({ diagonal = false, className = "" }: { diagonal?: boolean; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none" className={className}>
      {diagonal ? (
        <path d="M5 13 13 5M6 5h7v7" />
      ) : (
        <path d="M3 9h11M9 4l5 5-5 5" />
      )}
    </svg>
  );
}
