import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/svgs';

export const socialPlatforms = [
  {
    key: 'facebook',
    label: 'Facebook',
    placeholder: 'https://facebook.com/yourprofile',
    domain: 'facebook.com',
    icon: FacebookIcon,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    placeholder: 'https://instagram.com/yourprofile',
    domain: 'instagram.com',
    icon: InstagramIcon,
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    placeholder: 'https://linkedin.com/in/yourprofile',
    domain: 'linkedin.com',
    icon: LinkedInIcon,
  },
  {
    key: 'twitter',
    label: 'X',
    placeholder: 'https://x.com/yourprofile',
    domain: 'x.com',
    icon: TwitterIcon,
  },
];
export type TSocialKey = (typeof socialPlatforms)[number]['key'];

export const ASAAD_DEALING_SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/asaandealing/',
  instagram: 'https://www.instagram.com/asaan.dealing/',
  linkedin: 'https://www.linkedin.com/company/asaan-dealing/',
  twitter: 'https://x.com/AsaanDealing?t=K4sCD8twt6ozWQb1qpYKqw&s=09',
};
