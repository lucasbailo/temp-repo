import { Envelope, WhatsappLogo } from '@phosphor-icons/react'

export const contactData = [
  {
    id: 'diga-ola',
    icon: Envelope,
    title: 'Diga olá no Whatsapp!',
    description: 'Converse diretamente com nossos especialistas, tire suas dúvidas e descubra soluções sob medida para o seu negócio, tudo de forma rápida e prática.',
    button: {
      href: 'https://api.whatsapp.com/message/SQ5ZTTC2UWRHN1?autoload=1&app_absent=0',
      action: 'Fale com um especialista',
    },
  },
  {
    id: 'entre-em-contato',
    icon: WhatsappLogo,
    title: 'Entre em contato por e-mail',
    description: 'Envie suas questões ou solicitações para nossa equipe, e nós iremos trabalhar em uma solução personalizada, com toda a atenção e cuidado que o seu negócio merece.',
    button: {
      href: 'mailto:greici.burik@palinemartins.com.br',
      action: 'Envie-nos um e-mail',
    },
  },
]