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

import {
  ChatIcon,
  HeartIcon,
  OnSiteIcon,
  WhatsappIcon,
} from '@/components/svgs';
import { useScreenWidth } from '@/hooks';
import { TTaskerService } from '@/utils/types';
import { USER_MOCK_AVATAR } from '@/constants';
import { formatNumberWithCommas } from '@/utils/helpers';
import { useState, useEffect, useMemo } from 'react';
import { TaskerCardImageSkeleton } from './TaskerCardImageSkeleton';

const getAllTaskerImages = (data: TTaskerService): string[] => {
  const allImageUrls: string[] = [];

  // 1. Collect coverImage
  const coverImageObj = data.coverImage;
  if (coverImageObj && typeof coverImageObj === 'object') {
    const coverImages = Object.values(coverImageObj).filter(
      (img): img is string => typeof img === 'string' && img.length > 0,
    );
    allImageUrls.push(...coverImages);
  }

  // 2. Collect ALL media images
  const mediaObj = data?.media;
  if (mediaObj && typeof mediaObj === 'object') {
    Object.values(mediaObj).forEach((mediaItem) => {
      if (mediaItem?.images && typeof mediaItem.images === 'object') {
        const images = Object.values(mediaItem.images).filter(
          (img): img is string => typeof img === 'string' && img.length > 0,
        );
        allImageUrls.push(...images);
      }
    });
  }

  // 3. Collect service metadata images
  const metadataImages = data.serviceId?.metadata?.image;
  if (metadataImages && typeof metadataImages === 'object') {
    const images = Object.values(metadataImages).filter(
      (img): img is string => typeof img === 'string' && img.length > 0,
    );
    allImageUrls.push(...images);
  }

  return allImageUrls;
};

const selectBestImage = (images: string[]): string => {
  if (images.length === 0) return '';
  return images[images.length - 2];
};

export const TaskerCard = ({ data }: { data: TTaskerService }) => {
  const taskerName = useMemo(
    () =>
      `${data.taskerId?.userId?.firstName || ''} ${data.taskerId?.userId?.lastName || ''}`.trim(),
    [data.taskerId?.userId?.firstName, data.taskerId?.userId?.lastName],
  );

  const profileImageUrl = useMemo(() => {
    const profileImageObj = data.taskerId?.userId?.profileImage;
    return typeof profileImageObj === 'string'
      ? profileImageObj
      : profileImageObj &&
          typeof profileImageObj === 'object' &&
          'url' in profileImageObj
        ? profileImageObj.url
        : USER_MOCK_AVATAR;
  }, [data.taskerId?.userId?.profileImage]);

  const serviceTitle = useMemo(
    () => data.serviceId?.name || 'No Service Listed',
    [data.serviceId?.name],
  );

  const location = useMemo(() => {
    const cityName = data.cityId?.name || '';
    const stateName = data.cityId?.stateId?.name || '';
    return [cityName, stateName].filter(Boolean).join(', ');
  }, [data.cityId?.name, data.cityId?.stateId?.name]);

  const price = useMemo(() => data.rate || 0, [data.rate]);

  const experienceLevel = useMemo(
    () => data.experienceLevel || 'Beginner',
    [data.experienceLevel],
  );

  const isOnsite = useMemo(() => data.workMode === 'Onsite', [data.workMode]);

  const { firstSkill, extraCount, remainingSkills } = useMemo(() => {
    const coreSkills = data.coreSkills || [];
    return {
      firstSkill: coreSkills[0],
      remainingSkills: coreSkills.slice(1),
      extraCount: coreSkills.slice(1).length,
    };
  }, [data.coreSkills]);

  const { coverImage, profileImage } = useMemo(() => {
    const allImages = getAllTaskerImages(data);
    const selectedCover = selectBestImage(allImages);

    return {
      coverImage: selectedCover,
      profileImage: profileImageUrl || USER_MOCK_AVATAR,
    };
  }, [data, profileImageUrl]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { isMobile } = useScreenWidth();

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [data.id]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(true);
    setImageError(true);
  };

  return (
    <CardWrapper>
      <HeaderRow>
        <Flex align={'center'} gap={'10'}>
          {profileImage && (
            <AvatarImg
              width={200}
              height={200}
              src={profileImage}
              alt={taskerName}
            />
          )}
          <UserInfoWrapper>
            <TaskerName title={taskerName} textEllipsis={'1'}>
              {taskerName}
            </TaskerName>
            <TaskerExpStatus>{experienceLevel}</TaskerExpStatus>
          </UserInfoWrapper>
        </Flex>
        {isOnsite && (
          <Badge color={'darkGreen'} size={'small'}>
            Onsite
          </Badge>
        )}
      </HeaderRow>

      <ServiceTitle title={serviceTitle}>{serviceTitle}</ServiceTitle>

      <Flex align="center" gap={'4'}>
        {firstSkill && (
          <Badge
            title={firstSkill}
            textEllipsis={'1'}
            css={{ width: '$px$100', '@sm_max': { width: '$px$80' } }}
            color={'teal'}
            size={'small'}
          >
            {firstSkill}
          </Badge>
        )}

        {extraCount > 0 && (
          <Box>
            <Tooltip
              content={
                <>
                  {remainingSkills.map((skill) => (
                    <Box key={skill}>• {skill}</Box>
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
        {/* Always render skeleton first (reserves space) */}
        {!imageLoaded && <TaskerCardImageSkeleton />}

        {/* Load image immediately (hidden until loaded) */}
        {coverImage && !imageError && (
          <NextImage
            width={1200}
            height={750}
            css={{
              width: '$percent$100',
              height: '$percent$100',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.2s ease-in-out',
            }}
            src={coverImage}
            alt={serviceTitle}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="eager"
          />
        )}

        {/* Show fallback only if image failed */}
        {(imageLoaded && imageError) || !coverImage ? (
          <Flex
            justify={'center'}
            align={'center'}
            css={{
              width: '$percent$100',
              height: '$percent$100',
              backgroundColor: '$lightGray',
              color: '$secondryHeading',
              fontSize: '$px$14',
              position: imageLoaded ? 'relative' : 'absolute',
              opacity: imageLoaded ? 1 : 0,
            }}
          >
            No Image Available
          </Flex>
        ) : null}
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
          <UserLocation title={location || ''} textEllipsis={'1'}>
            {location || 'Location not specified'}
          </UserLocation>
        </Flex>
        <TaskerPrice title={`PKR ${price}`} textEllipsis={'1'}>
          PKR {formatNumberWithCommas(price)}
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
