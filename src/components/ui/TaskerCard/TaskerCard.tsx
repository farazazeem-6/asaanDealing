import { Flex, Box, Badge, Tooltip, NextImage } from '@/components/elements';
import {
  AvatarImg,
  ButtonLabel,
  ButtonWrapper,
  CardWrapper,
  FooterAction,
  FooterButton,
  HeaderRow,
  ImageWrapper,
  ServiceTitle,
  TaskerExpStatus,
  TaskerName,
  TaskerPrice,
  UserInfoWrapper,
  UserLocation,
} from './style';

import { TTasker } from '../types';
import {
  ChatIcon,
  HeartIcon,
  OnSiteIcon,
  WhatsappIcon,
} from '@/components/svgs';
import { useScreenWidth } from '@/hooks';

export const TaskerCard = ({ data }: { data: TTasker }) => {
  const services = data.services || [];

  const mainServiceTitle = services[0]?.name || 'No Service Listed';
  const secondServiceTag = services[1]?.name;

  const remainingServices = services.slice(2);
  const extraCount = remainingServices.length;
  const { isMobile } = useScreenWidth();

  return (
    <CardWrapper>
      <HeaderRow>
        <Flex align={'center'} gap={'10'}>
          <AvatarImg
            width={200}
            height={200}
            src={data.profileImage}
            alt={data.name}
          />
          <UserInfoWrapper>
            <TaskerName title={data.name} textEllipsis={'1'}>
              {data.name}
            </TaskerName>
            <TaskerExpStatus>{data.level}</TaskerExpStatus>
          </UserInfoWrapper>
        </Flex>
        {data.isOnsite && (
          <Badge color={'darkGreen'} size={'small'}>
            Onsite
          </Badge>
        )}
      </HeaderRow>
      <ServiceTitle title={mainServiceTitle}>{mainServiceTitle}</ServiceTitle>

      <Flex align="center" gap={'4'}>
        {secondServiceTag && (
          <Badge
            title={secondServiceTag}
            textEllipsis={'1'}
            css={{ width: '$px$100', '@sm_max': { width: '$px$80' } }}
            color={'teal'}
            size={'small'}
          >
            {secondServiceTag}
          </Badge>
        )}

        {extraCount > 0 && (
          <Box>
            <Tooltip
              content={
                <>
                  {remainingServices.map((service) => (
                    <Box key={service.id}>• {service.name}</Box>
                  ))}
                </>
              }
            >
              <Badge color={'orange'} size={'small'}>
                +{extraCount} more
              </Badge>
            </Tooltip>
          </Box>
        )}
      </Flex>
      <ImageWrapper>
        <NextImage
          width={1200}
          height={750}
          css={{
            width: '$percent$100',
            height: '$percent$100',
            objectFit: 'cover',
          }}
          src={data.serviceImage}
          alt={mainServiceTitle}
        />
      </ImageWrapper>

      <HeaderRow css={{ alignItems: 'center' }}>
        <Flex align="center" gap="4">
          <OnSiteIcon
            css={{
              color: '$secondryHeading',
              '@sm_max': {
                width: '$px$12',
                height: '$px$12',
              },
            }}
            width={15}
            height={15}
          />
          <UserLocation textEllipsis={'1'}>{data.location}</UserLocation>
        </Flex>
        <TaskerPrice
          title={`${data.currency} ${data.price}`}
          textEllipsis={'1'}
        >
          {data.currency} {data.price}
        </TaskerPrice>
      </HeaderRow>

      <FooterAction>
        <ButtonWrapper>
          <Tooltip content="Start a conversation">
            <FooterButton size={'sm'} variant={'ghost'}>
              <ChatIcon
                css={{ color: '$secondryHeading' }}
                width={14}
                height={14}
              />
              {!isMobile ? <ButtonLabel>Chat</ButtonLabel> : null}
            </FooterButton>
          </Tooltip>
        </ButtonWrapper>
        <ButtonWrapper>
          <Tooltip content="Contact via WhatsApp">
            <FooterButton size={'sm'} variant={'ghost'}>
              <WhatsappIcon
                css={{ color: '$secondryHeading' }}
                width={14}
                height={14}
              />
              {!isMobile ? <ButtonLabel>Whatsapp</ButtonLabel> : null}
            </FooterButton>
          </Tooltip>
        </ButtonWrapper>
        <ButtonWrapper>
          <Tooltip content="Add to wishlist">
            <FooterButton size={'sm'} variant={'ghost'}>
              <HeartIcon
                css={{ color: '$secondryHeading' }}
                width={14}
                height={14}
              />
              {!isMobile ? <ButtonLabel>Favorite</ButtonLabel> : null}
            </FooterButton>
          </Tooltip>
        </ButtonWrapper>
      </FooterAction>
    </CardWrapper>
  );
};
