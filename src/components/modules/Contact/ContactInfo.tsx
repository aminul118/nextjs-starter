import Link from 'next/link';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const contactDetails = [
  {
    id: 1,
    icon: FaPhone,
    text: '+1 234 567 890',
    link: 'tel:+1234567890',
  },
  {
    id: 2,
    icon: FaEnvelope,
    text: 'support@example.com',
    link: 'mailto:support@example.com',
  },
  {
    id: 3,
    icon: FaMapMarkerAlt,
    text: '123 Main Street, City, Country',
    link: 'https://www.google.com/maps/search/?api=1&query=123+Main+Street+City+Country',
    target: '_blank',
  },
  {
    id: 4,
    icon: FaClock,
    text: 'Mon - Fri: 9:00 AM - 6:00 PM',
  },
];

const ContactInfo = () => {
  return (
    <section className="grid h-full gap-6">
      <aside>
        <div className="w-full max-w-xl text-center lg:text-left">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:mb-2 lg:text-6xl">
            Get in Touch
          </h1>
          <p className="text-lg">
            We’d love to hear from you! Reach out for any questions or
            inquiries, and we’ll respond promptly.
          </p>
        </div>
      </aside>

      {/* Contact Information */}
      <aside>
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <ul className="mt-4 space-y-3">
          {contactDetails.map(({ id, icon: Icon, text, link, target }) => (
            <li key={id} className="flex w-full max-w-sm items-center">
              <div className="rounded-full bg-blue-500/90 p-2">
                <Icon size={20} className="text-white" />
              </div>
              {link ? (
                <Link
                  href={link}
                  target={target || '_self'}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="ml-4 hover:underline"
                >
                  {text}
                </Link>
              ) : (
                <span className="ml-4">{text}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default ContactInfo;
