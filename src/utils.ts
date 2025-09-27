export const GetDisplayName = (
  unitNumber?: string,
  streetNumber?: string,
  streetName?: string,
  city?: string
) => {
  const laneOne = [unitNumber, streetNumber].filter(Boolean).join('-');
  const laneTwo = [laneOne, streetName, city].filter(Boolean).join(', ');
  return laneTwo;
};

export const BlogCategories = {
  'Buying Property': 'BUYING_PROPERTY',
  General: 'GENERAL',
  'Land Development': 'LAND_DEVELOPMENT',
  'Market Updates': 'MARKET_UPDATES',
  'Selling Property': 'SELLING_PROPERTY',
  News: 'NEWS',
  'North Delta Market': 'NORTH_DELTA_MARKET',
  'Real Estate Tips': 'REAL_ESTATE_TIPS',
  Services: 'SERVICES',
};

export const getPrice = (item: {
  listPrice?: number;
  leaseAmount?: number;
  totalActualRent?: number;
}) => {
  try {
    const hasListPrice = item?.listPrice;
    const hasLeaseAmount = item?.leaseAmount;
    const hasTotalActualRent = item?.totalActualRent;

    if (hasListPrice) {
      return item.listPrice?.toString();
    } else if (hasLeaseAmount) {
      const lease = item.leaseAmount?.toString();
      return `${lease}/square feet`;
    } else if (hasTotalActualRent) {
      const rent = item.totalActualRent?.toString();
      return `${rent}/monthly`;
    }
    return '0';
  } catch (error) {
    console.error('Error processing price:', error);
    return '0';
  }
};

export function capitalizeWords(paragraph: string): string {
  return paragraph.replace(/\w\S*/g, (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
}

