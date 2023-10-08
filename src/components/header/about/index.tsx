
type Props = {
  className?: string;
}

export const About: React.FC<Props> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.667 10.667a6.667 6.667 0 1 1-13.334 0 6.667 6.667 0 0 1 13.334 0z" stroke="#9E9E9E" strokeWidth="2" />
      <path d="M26.667 28H5.333c0-5.891 4.776-10.667 10.667-10.667S26.667 22.11 26.667 28z" stroke="#9E9E9E" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}
