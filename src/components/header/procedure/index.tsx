
type Props = {
  className?: string;
}

export const Procedure: React.FC<Props> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m4.5 20.5 9.268 5.365a1 1 0 0 0 .5.135H27.5M27 23l-5.158-1.876a1 1 0 0 0-.684 0l-4.726 1.719a1 1 0 0 1-.832-.068L8 18.5" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" />
      <circle cx="4.5" cy="14.5" r="2.5" stroke="#9E9E9E" strokeWidth="2" />
      <circle cx="17.5" cy="7.5" r="2.5" stroke="#9E9E9E" strokeWidth="2" />
      <path d="M21 18.23V16.5a3.5 3.5 0 0 0-3.5-3.5v0a3.5 3.5 0 0 0-3.5 3.5v2" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
