import dynamic from 'next/dynamic';

const ContactFormInner = dynamic(() => import('./ContactFormInner'), { ssr: false });

export default function Contact() {
  return <ContactFormInner />;
}
