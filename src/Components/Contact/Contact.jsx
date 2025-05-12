import GithubIcon from './SVG/Github';
import LinkedinIcon from './SVG/Linkedin';
import WhatsappIcon from './SVG/Whatsapp';

const socialLinks = [
  {
    href: 'https://wa.me/+573223374782',
    label: 'WhatsApp',
    icon: <WhatsappIcon />,
  },
  {
    href: 'https://linkedin.com/in/erismar-mendoza',
    label: 'LinkedIn',
    icon: <LinkedinIcon />,
  },
  {
    href: 'https://github.com/Erismar17',
    label: 'GitHub',
    icon: <GithubIcon />,
  },
];

const Contact = () => {
  return (
    <div className="fixed top-1/2 left-0 z-[1000] -translate-y-1/2 flex flex-col gap-5">
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-pink-600 px-4 py-2 w-14 hover:w-40 duration-300 rounded-r-md flex items-center gap-5 overflow-hidden"
        >
          <div className='justify-center'>
            {icon}
          </div>
          <span className="hidden group-hover:inline">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default Contact;