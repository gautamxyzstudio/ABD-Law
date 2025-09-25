import type { IListing } from '../../hooks/useListing';

export interface ListingCardProps extends IListing {
  listingtype?: 'sold' | 'featured' | 'all' | 'trash'| 'inactive';
  listingKey: string;
  listPrice: number;
  listingType?: string;
  image?: string;
  onPressEditListing?: () => void;
  city: string;
  stateOrProvince: string;
  unparsedAddress: string;
  onPressPreviewButton?: () => void;
  onStatusChange?: (status: 'published' | 'hidden') => void;
  onPressGenerateQRCode?: () => void;
  internetEntireListingDisplayYN: boolean;
  internetAddressDisplayYN: boolean;
  publishedAt: Date;
  onMoveToSold?: () => void;
  onMoveToAll?: () => void;
  onMoveToFeatured?: (isFeatured: boolean) => void;
  onDelete?: () => void;
  onRestore?: () => void;
  inActiveListing?: boolean;
}

export const getVisibilityStatus = (data: {
  publishedAt: string;
  internetEntireListingDisplayYN: boolean;
  internetAddressDisplayYN: boolean;
}) => {
  if (!data.internetEntireListingDisplayYN) return 'Hidden';
  if (!data.internetAddressDisplayYN) return 'Private';
  return 'Published';
};
