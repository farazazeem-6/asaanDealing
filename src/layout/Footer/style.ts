import { Box, Button, Flex, Text } from '@/components/elements';
import { fadeIn, styled } from '@/theme';
import Link from 'next/link';

export const FooterRoot = styled(Box, {
  backgroundColor: '$black',
  color: '$neutralGray',
  marginTop: '$px$20',
  padding: '$rem$2 $rem$2 $rem$1',
  borderRadius: '$px$10',
  position: 'relative',
  margin: '0 auto',
  animation: `${fadeIn} 0.8s ease-in-out`,

  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: '$percent$50',
    transform: 'translateX(-$percent$50)',
    width: 'calc($percent$100 - $rem$4)',
    height: '$px$1',
    background:
      'linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.3), transparent)',
  },

  variants: {
    hasMobileNav: {
      true: {
        '@md_max': { paddingBottom: '$rem$6' },
      },
    },
  },

  '@sm_max': {
    padding: '$rem$2 $px$5 $rem$1',
  },
});

// 2. The Main Grid Layout
export const FooterGrid = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '$rem$4',

  '@lg_max': {
    gridTemplateColumns: '1fr 1fr',
    gap: '$rem$2',
  },
  '@md_max': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$rem$2',
    padding: '$rem$1',
  },
});

export const BrandColumn = styled(Flex, {
  flexDirection: 'column !important',
  gap: '$rem$1_25',
  paddingRight: '$rem$1',
  alignItems: 'flex-start',

  '@md_max': {
    paddingRight: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export const FooterDescription = styled(Text, {
  color: '$lightGrayAirdrop !important',
  lineHeight: '$ul$1.5',
  fontSize: '$px$13',
  '@md_max': {
    fontSize: '$px$14',
  },
  '@sm_max': {
    fontSize: '$px$12',
  },
});

export const LinkColumn = styled(Flex, {
  flexDirection: 'column !important',
  gap: '$rem$1',
  alignItems: 'flex-start !important',

  // Hide specific columns on mobile if needed (like Categories)
  variants: {
    hiddenOnMobile: {
      true: {
        '@md_max': { display: 'none' },
      },
    },
  },
});

export const MobileLinksRow = styled(Box, {
  display: 'contents',

  '@md_max': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '$px$20',
    width: '$percent$100',
  },
});

export const SectionTitle = styled(Text, {
  fontSize: '$rem$1',
  fontWeight: '$fontWeight$bold',
  color: '$white !important',
  marginBottom: '$rem$0_5',
  position: 'relative',
  display: 'inline-block',

  '&::after': {
    content: '',
    position: 'absolute',
    bottom: '-$px$8',
    left: 0,
    width: '$percent$100',
    height: '$px$2',
    background: '$gradients$greenGradient1',
    borderRadius: '$px$2',
  },

  '@md_max': {
    fontSize: '$px$15',
  },
  '@sm_max': {
    fontSize: '$px$12',
  },
});

export const LinkItem = styled(Link, {
  fontSize: '$rem$0_93',
  color: '$lightGrayAirdrop',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'block',
  marginBottom: '$px$2',

  '&:hover': {
    color: '$success1',
    transform: 'translateX($px$4)',
  },
  '@md_max': {
    fontSize: '$px$12',
  },
  '@sm_max': {
    fontSize: '$px$10',
  },
});

export const SocialWrapper = styled(Flex, {
  gap: '$rem$1',
  marginTop: '$rem$1',
  variants: {
    mobileOnly: {
      true: {
        display: 'none',
        '@md_max': {
          display: 'flex',
          justifyContent: 'center',
          margin: '$px$20 0',
        },
      },
      false: {
        '@md_max': { display: 'none' },
      },
    },
  },
});
export const IconCircleWrapper = styled(Link, {
  display: 'block',
  width: '$px$30',
  height: '$px$30',
  color: '$lightGrayAirdrop',
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  '& svg': {
    width: '$percent$100',
    height: '$percent$100',
  },

  '&:hover': {
    color: '$success1',
    transform: 'scale(1.1)',
  },
});
// 8. Copyright Section
export const CopyrightRow = styled(Box, {
  textAlign: 'center',
  paddingTop: '$rem$1',
  marginTop: '$rem$2',
  borderTop: '$px$1 solid $footerBorder',
  color: '$lightGrayAirdrop',
  fontSize: '$rem$0_87',
});

export const ScrollToTopBtn = styled(Button, {
  background: 'none !important',
  border: 'none !important',
  padding: '0px !important',
  cursor: 'pointer',
  color: 'inherit',
  fontFamily: 'inherit',
  '&:hover': { opacity: '$ul$0_8' },
});
