import {
  Box,
  Button,
  Chip,
  Paper,
  Switch,
  Tooltip,
  Typography,
  Skeleton,
} from "@mui/material";
import { ListingCardImage } from "../../exporter";
import theme from "../../theme/theme";
import { Img } from "react-image";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SelectComponent from "../select/Select";
import {
  getVisibilityStatus,
  type ListingCardProps,
} from "./ListingCard.types";
import { memo, useState, useCallback } from "react";
import { useAuthStore } from "../../store/authStore";
import { capitalizeWords, getPrice } from "../../utils";

const STATUS_OPTIONS = [
  { value: "hidden", label: "Hidden" },
  { value: "published", label: "Published" },
] as { value: string; label: string }[];

const LISTING_TYPE_OPTIONS = [
  { value: "Active", label: "Active" },
  { value: "Sold", label: "Sold" },
] as { value: string; label: string }[];

const ListingCard = memo(
  ({
    listingtype = "all",
    listingId,
    onPressEditListing,
    listPrice,
    structureType,
    onStatusChange,
    Status = "published",
    publishedAt,
    image: listingImage,
    onPressPreviewButton,
    onPressGenerateQRCode,
    internetEntireListingDisplayYN,
    internetAddressDisplayYN,
    onMoveToSold,
    onMoveToAll,
    onMoveToFeatured,
    onDelete,
    onRestore,
    Featured,
    inActiveListing,
    ...listing
  }: ListingCardProps) => {
    const { user } = useAuthStore();
    const [imageError, setImageError] = useState(false);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const isButtonDisabled = () => {
      if (user?.role !== "content-manager") return false;
      return true;
    };

    const visibilityStatus = getVisibilityStatus({
      publishedAt: publishedAt.toISOString() || "",
      internetEntireListingDisplayYN: internetEntireListingDisplayYN || false,
      internetAddressDisplayYN: internetAddressDisplayYN || false,
    });

    const getBorderColor = () => {
      if (Status === "hidden") {
        return "grey.500";
      }

      switch (listingtype) {
        case "sold":
          return "error.main";
        case "featured":
          return "primary.main";
        case "trash":
          return "grey.600";
        case "inactive":
          return "grey.500";
        default:
          return "success.main";
      }
    };

    const price = getPrice({
      listPrice: Number(listPrice),
      leaseAmount: Number(listing.leaseAmount),
      totalActualRent: Number(listing.totalActualRent),
    });

    const handleImageError = useCallback(() => {
      setImageError(true);
      setIsImageLoading(false);
    }, []);

    const handleImageLoad = useCallback(() => {
      setIsImageLoading(false);
    }, []);

    const handleStatusChange = useCallback(
      (newStatus: string) => {
        onStatusChange?.(newStatus as "published" | "hidden");
      },
      [onStatusChange]
    );

    const handleListingTypeChange = useCallback(
      (newType: string) => {
        if (newType === "Sold" && onMoveToSold) {
          onMoveToSold();
        } else if (newType === "Active" && onMoveToAll) {
          if (onMoveToAll) {
            onMoveToAll();
          }
        }
      },
      [onMoveToSold, onMoveToAll]
    );

    return (
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 3,
          gap: 2,
          justifyContent: "space-between",
          borderLeft: "10px solid",
          borderColor: getBorderColor(),
          borderRadius: 6,
          mb: 2,
          opacity: Status === "hidden" ? 0.5 : 1,
        }}
      >
        <Box sx={{ width: "56%" }}>
          {renderBasicDetails({
            listingId,
            name: `${listing.unparsedAddress} ${listing.city}`,
            structureType: structureType || "N/A",
            listPrice: price,
            image: listingImage,
            isImageLoading,
            imageError,
            onImageError: handleImageError,
            onImageLoad: handleImageLoad,
          })}
        </Box>
        <Box>
          {renderSecondRow({
            status: Status,
            onPressPreviewButton,
            listingtype,
            onStatusChange: handleStatusChange,
            onListingTypeChange: handleListingTypeChange,
            onDelete,
            onRestore,
            isButtonDisabled: isButtonDisabled(),
            onPressEditListing,
            inActiveListing,
          })}
        </Box>
        {!inActiveListing && (
          <Box>
            {renderThirdRow({
              listingtype,
              onPressGenerateQRCode,
              visibilityStatus,
              Status,
              onMoveToFeatured: onMoveToFeatured || (() => {}),
              isFeatured: Featured || false,
            })}
          </Box>
        )}
      </Paper>
    );
  }
);

ListingCard.displayName = "ListingCard";

interface BasicDetailsProps {
  listingId: string;
  name: string;
  structureType: string;
  listPrice: string | undefined;
  image?: string;
  isImageLoading: boolean;
  imageError: boolean;
  onImageError: () => void;
  onImageLoad: () => void;
}

const renderBasicDetails = ({
  listingId,
  name,
  structureType,
  listPrice,
  image,
  isImageLoading,
  imageError,
  onImageError,
  onImageLoad,
}: BasicDetailsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: "300px",
          height: "160px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
        }}
      >
        {isImageLoading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            animation="wave"
          />
        )}
        <Img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: isImageLoading ? "none" : "block",
          }}
          src={imageError ? ListingCardImage : image || ListingCardImage}
          alt={`Property listing ${listingId}`}
          onError={onImageError}
          onLoad={onImageLoad}
        />
      </Box>
      <div className="flex flex-col justify-around items-between">
        <Typography
          sx={{
            textTransform: "capitalize",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          color="text.secondary"
          fontWeight={600}
          variant="body1"
        >
          {`MLS# ${listingId}`}
        </Typography>
        <Typography
          sx={{
            textTransform: "capitalize",
            maxWidth: "300px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          variant="h6"
        >
          {capitalizeWords(name)}
        </Typography>
        <Typography color="success" fontSize={16} fontWeight={600} variant="h6">
          {structureType[0]}
        </Typography>
        <Typography
          color={theme.palette.error.light}
          fontWeight={600}
          variant="h5"
        >
          $ {listPrice?.toLocaleString() || "0"}
        </Typography>
      </div>
    </Box>
  );
};

interface SecondRowProps {
  status?: "published" | "hidden";
  listingtype: "sold" | "featured" | "all" | "trash" | "inactive";
  onStatusChange: (status: string) => void;
  onPressPreviewButton?: () => void;
  onListingTypeChange: (type: string) => void;
  onDelete?: () => void;
  onRestore?: () => void;
  onPressEditListing?: () => void;
  isButtonDisabled: boolean;
  inActiveListing?: boolean;
}

const renderSecondRow = ({
  listingtype,
  onStatusChange,
  status,
  onListingTypeChange,
  onDelete,
  onRestore,
  onPressPreviewButton,
  isButtonDisabled,
  onPressEditListing,
  inActiveListing = false,
}: SecondRowProps) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: `${inActiveListing ? "center" : "space-between"}`,

      gap: 2,
    }}
  >
    {!inActiveListing && (
      <Box>
        <Typography fontSize={16} variant="h5">
          STATUS
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 2 }}>
          <SelectComponent
            label="Status"
            value={status || "published"}
            onChange={onStatusChange}
            options={STATUS_OPTIONS}
            disabled={listingtype === "trash"}
          />
          {listingtype !== "featured" && listingtype !== "trash" && (
            <SelectComponent
              label="Listing Type"
              value={listingtype === "sold" ? "Sold" : "Active"}
              onChange={onListingTypeChange}
              options={LISTING_TYPE_OPTIONS}
            />
          )}
        </Box>
      </Box>
    )}
    <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
      {inActiveListing ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => onListingTypeChange("Sold")}
        >
          Move to Sold
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={onPressPreviewButton}
          disabled={listingtype === "trash"}
        >
          Preview
        </Button>
      )}

      {onPressEditListing && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onPressEditListing}
          disabled={listingtype === "trash"}
        >
          Edit
        </Button>
      )}
      {onRestore ? (
        <Button
          disabled={isButtonDisabled}
          variant="outlined"
          color="success"
          onClick={onRestore}
        >
          Restore
        </Button>
      ) : (
        <Button
          disabled={isButtonDisabled}
          variant="outlined"
          color="error"
          onClick={onDelete}
        >
          Delete
        </Button>
      )}
    </Box>
  </Box>
);

interface ThirdRowProps {
  listingtype: "sold" | "featured" | "all" | "trash" | "inactive";
  visibilityStatus: string;
  onMoveToFeatured: (isFeatured: boolean) => void;
  isFeatured: boolean;
  Status: "published" | "hidden";
  onPressGenerateQRCode?: () => void;
}

const renderThirdRow = ({
  listingtype,
  visibilityStatus,
  Status,
  onPressGenerateQRCode,
  onMoveToFeatured,
  isFeatured,
}: ThirdRowProps) => {
  const getStatusColor = () => {
    if (Status === "hidden") {
      return "grey.500";
    }

    switch (listingtype) {
      case "sold":
        return "error";
      case "featured":
        return "primary";
      default:
        return visibilityStatus === "Published" ? "success" : "warning";
    }
  };

  const getStatusLabel = () => {
    if (Status === "hidden") {
      return "Hidden";
    }

    switch (listingtype) {
      case "sold":
        return "Sold";

      case "featured":
        return "Featured";
      default:
        return visibilityStatus;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Chip
          variant="outlined"
          label={getStatusLabel()}
          color={
            getStatusColor() as
              | "error"
              | "success"
              | "warning"
              | "info"
              | "default"
              | "primary"
              | "secondary"
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
        <Tooltip title="Generate a Direct QR Code" placement="bottom" arrow>
          <QrCode2Icon
            onClick={onPressGenerateQRCode}
            sx={{
              color: listingtype === "trash" ? "grey.400" : "MenuText",
              cursor: listingtype === "trash" ? "not-allowed" : "pointer",
              transition: "color 0.2s ease-in-out",
              "&:hover": {
                color: listingtype === "trash" ? "grey.400" : "error.main",
              },
            }}
            fontSize="large"
          />
        </Tooltip>
      </Box>
      {listingtype === "all" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Switch
            checked={isFeatured}
            onChange={(_event, checked) => onMoveToFeatured(checked)}
            color="primary"
          />
          <Tooltip
            title="Show the listing on the HomePage and/or the Featured Listing Page"
            placement="top"
            arrow
          >
            <Typography
              color="primary"
              fontSize={16}
              fontWeight={600}
              variant="h6"
            >
              Featured
            </Typography>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};

export default ListingCard;
