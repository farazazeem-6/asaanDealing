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
  ImgFallBackDiv,
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
import { ServiceMode } from '@/utils/enums';

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
      (img): img is string => typeof img === 'string' && img.trim().length > 0,
    );
    allImageUrls.push(...images);
  }

  return allImageUrls;
};

const selectBestImage = (images: string[]): string => {
  if (images.length >= 2) {
    // preferred image
    return images[images.length - 2];
  }

  if (images.length === 1) {
    // fallback to the only available image
    return images[0];
  }

  return '';
};

export const TaskerCard = ({
  taskerService,
}: {
  taskerService: TTaskerService;
}) => {
  const taskerName = useMemo(
    () =>
      `${taskerService.taskerId?.userId?.firstName || ''} ${taskerService.taskerId?.userId?.lastName || ''}`.trim(),
    [
      taskerService.taskerId?.userId?.firstName,
      taskerService.taskerId?.userId?.lastName,
    ],
  );

  const profileImageUrl = useMemo(() => {
    const profileImageObj = taskerService.taskerId?.userId?.profileImage;
    return typeof profileImageObj === 'string'
      ? profileImageObj
      : profileImageObj &&
          typeof profileImageObj === 'object' &&
          'url' in profileImageObj
        ? profileImageObj.url
        : USER_MOCK_AVATAR;
  }, [taskerService.taskerId?.userId?.profileImage]);

  const serviceTitle = useMemo(
    () => taskerService.serviceId?.name || 'No Service Listed',
    [taskerService.serviceId?.name],
  );

  const location = useMemo(() => {
    const cityName = taskerService.cityId?.name || '';
    const stateName = taskerService.cityId?.stateId?.name || '';
    return [cityName, stateName].filter(Boolean).join(', ');
  }, [taskerService.cityId?.name, taskerService.cityId?.stateId?.name]);

  const price = useMemo(() => taskerService.rate || 0, [taskerService.rate]);

  const experienceLevel = useMemo(
    () => taskerService.experienceLevel || 'Beginner',
    [taskerService.experienceLevel],
  );

  const isOnsite = useMemo(
    () => taskerService.workMode === ServiceMode.ONSITE,
    [taskerService.workMode],
  );

  const { firstSkill, extraCount, remainingSkills } = useMemo(() => {
    const coreSkills = taskerService.coreSkills || [];
    return {
      firstSkill: coreSkills[0],
      remainingSkills: coreSkills.slice(1),
      extraCount: coreSkills.slice(1).length,
    };
  }, [taskerService.coreSkills]);

  const { coverImage, profileImage } = useMemo(() => {
    const allImages = getAllTaskerImages(taskerService);
    const selectedCover = selectBestImage(allImages);

    return {
      coverImage: selectedCover,
      profileImage: profileImageUrl || USER_MOCK_AVATAR,
    };
  }, [taskerService, profileImageUrl]);

  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { isMobile } = useScreenWidth();

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [taskerService.id]);

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
            fill
            css={{
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
          <ImgFallBackDiv
            css={{
              position: imageLoaded ? 'relative' : 'absolute',
              opacity: imageLoaded ? 1 : 0,
            }}
          >
            No Image Available
          </ImgFallBackDiv>
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
