import { Suspense } from 'react'

import * as S from './styles';

const Loading = () => <p>Carregando</p>;

export default function Map() {
  const iframe = '<iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.465905898282!2d-46.65053382338845!3d-23.551704761239943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584b3dd9b727%3A0x8451c8f62b01389c!2sR.%20Frei%20Caneca%2C%2033%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001307-001!5e0!3m2!1sen!2sbr!4v1688934816892!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

  return (
    <Suspense fallback={<Loading />}>
      <S.Container dangerouslySetInnerHTML={{ __html: iframe }} />
    </Suspense>
  )
}

