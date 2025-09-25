import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { IconButton } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";

export interface MediaItem {
  id: number;
  image: {
    data: {
      id: number,
      attributes: {
        url: string;
        formats: {
          small: {
            url: string;
          };
          medium: {
            url: string;
          };
        };
      };
    };
  };
}

interface Props {
  media: MediaItem;
  index: number;
  onClickDelete: () => void;
}

const MediaItemCard: React.FC<Props> = ({ media, index, onClickDelete }) => {
  return (
    <Draggable draggableId={media.id.toString()} index={index}>
      {(provided) => (
        <div
          className={`relative w-full h-50 rounded overflow-hidden shadow ${
            index === 0 ? "border-8 border-green-400" : ""
          }`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img
            src={`${import.meta.env.VITE_API_BASE_URL}${
              media.image.data?.attributes?.formats?.small?.url
            }`}
            alt={`media-${media.id}`}
            className="w-full h-full object-cover relative"
            width={240}
            height={360}
            loading="eager"
          />
          <IconButton
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "white",
              borderRadius: "0 0 0 4px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
            onClick={onClickDelete}
          >
            <DeleteForever
              sx={{
                color: "red",
              }}
            />
          </IconButton>
        </div>
      )}
    </Draggable>
  );
};

export default MediaItemCard;
