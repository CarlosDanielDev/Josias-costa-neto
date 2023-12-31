type Props = {
  className?: string;
}

export const Contact: React.FC<Props> = ({ className }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.45 19s2.08 3.107 3.33 4.97c2.326 3.473 5.653 1.882 7.448.607.777-.552.88-1.611.35-2.403l-1.305-1.947a2 2 0 0 0-2.774-.548l-.203.136c-.62.416-1.658.21-2.075-.41l-1.665-2.486M7.45 19l-3.33-4.97c-2.327-3.472.411-5.944 2.273-7.118.806-.509 1.825-.202 2.355.59l1.304 1.947a2 2 0 0 1-.548 2.775l-.202.135c-.622.416-.827 1.454-.41 2.075l1.664 2.485M12 7.197h15a2 2 0 0 1 2 2v9.46a2 2 0 0 1-2 2h-6" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" />
      <path d="m13 10 5.452 3.355a2 2 0 0 0 2.096 0L26 10" stroke="#9E9E9E" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
