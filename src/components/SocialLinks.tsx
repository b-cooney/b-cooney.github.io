import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  const socialLinks = [
    { icon: <FaTwitter size={24} />, url: 'https://twitter.com' },
    { icon: <FaDiscord size={24} />, url: 'https://discord.com' },
    { icon: <FaInstagram size={24} />, url: 'https://instagram.com' },
  ];

  return (
    <div className="flex gap-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
