import React, { ButtonHTMLAttributes, Suspense } from 'react'
import { MdWhatsapp } from 'react-icons/md'
import * as S from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Loading = () => <p>Carregando</p>

const ScheduleAppointment: React.FC<ButtonProps> = (props) => {
  return (
    <Suspense fallback={<Loading />}>

      <S.Button {...props}  >
        <MdWhatsapp size={22} />
        <S.ButtonText>
          Agendar Consulta
        </S.ButtonText>
      </S.Button>

    </Suspense>
  )
}


export default ScheduleAppointment;
