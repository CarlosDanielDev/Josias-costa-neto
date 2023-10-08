
type Props = {
  className?: string;
}

export const Home: React.FC<Props> = ({ className }) => {
  return (
    <svg width= "32" height = "32" viewBox = "0 0 32 32" className = { className } fill = "none" xmlns = "http://www.w3.org/2000/svg" >
      <path d="M8 16v10.667h5.333v-5.334h5.334v5.334H24V16h4L16 5.333 4 16h4z" stroke = "#9E9E9E" strokeWidth = "2" strokeLinecap = "round" strokeLinejoin = "round" />
        </svg>
  )
}
