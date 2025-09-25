import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import MediaItemCard, { type MediaItem } from "./MediaItemCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import {
  useDeleteMediaItem,
  useReorderMediaImage,
} from "../../hooks/useListing";
import useSnackBarStore from "../../store/snackBarStore";

interface Props {
  listingId: string;
  initialMedia: MediaItem[];
}

const MediaReorder: React.FC<Props> = ({ listingId, initialMedia }) => {
  const [mediaList, setMediaList] = useState<MediaItem[]>(initialMedia);
  const { setSnackBar } = useSnackBarStore();

  useEffect(() => {
    setMediaList(initialMedia);
  }, [initialMedia]);

  const { mutate: reorderMedia, isPending } = useReorderMediaImage();

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reordered = [...mediaList];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    setMediaList(reordered);
    reorderMedia({ listingId, mediaImageId: reordered.map((m) => m.id) });
  };

  const { mutate: deleteMedia } = useDeleteMediaItem();

  const handleDelete = (mediaId: number) => {
    const updatedList = mediaList.filter(
      (item) => item.image?.data?.id !== mediaId
    );

    setMediaList(updatedList); // Optimistically update UI

    deleteMedia(mediaId, {
      onSuccess: () => {
        setSnackBar("Image deleted successfully", "success");
        // Do not reset to initialMedia
      },
      onError: (error) => {
        console.error("Image deleted error:", error);
        setSnackBar(
          error?.message ?? "Something went wrong while deleting the image",
          "error"
        );
        // Optionally: revert change if needed
        setMediaList(mediaList); // Restore previous list only if needed
      },
    });
  };

  return (
    <Box>
      {isPending && (
        <div className="flex justify-center items-center mb-4">
          <CircularProgress size={20} />
        </div>
      )}
      <Typography
        sx={{ mb: 1, textTransform: "uppercase", fontWeight: 600 }}
        color="primary"
        variant="body1"
      >
        Media Gallery
      </Typography>
      <Box sx={{ mt: 2, border: "1px solid #CECECE", p: 2, borderRadius: 2 }}>
        {mediaList?.[0]?.image?.data !== null ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="media-list" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="grid grid-cols-5 justify-between gap-5 overflow-x-auto p-4"
                >
                  {mediaList.map((media, index) =>
                    media.image?.data !== null ? (
                      <MediaItemCard
                        onClickDelete={() => handleDelete(media.image.data.id)}
                        key={media.id}
                        media={media}
                        index={index}
                      />
                    ) : (
                      ""
                    )
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          "No media gallery"
        )}
      </Box>
    </Box>
  );
};

export default MediaReorder;
