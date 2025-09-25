import {
  Box,
  Card,
  CardMedia,
  Typography,
  IconButton,
  Link,
  Skeleton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import { useState } from 'react';
import { BlogCategories } from '../../../../utils';

interface BlogCardProps {
  title: string;
  shortDesc: string | null;
  blogData: string;
  onEdit: () => void;
  onDelete: () => void;
  onPreview: () => void;
  createdAt: string;
  blogDate: string | null;
  banner: string;
  category: string;
}

const BlogCard = ({
  title,
  shortDesc,
  onEdit,
  onDelete,
  onPreview,
  blogData,
  category,
  createdAt,
  blogDate,
  banner,
}: BlogCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const previewText = blogData.replace(/<[^>]*>/g, '').slice(0, 150) + '...';
  const formattedCreatedAt = format(new Date(createdAt), 'dd/MM/yyyy');
  const formattedBlogDate = blogDate
    ? format(new Date(blogDate), 'dd/MM/yyyy')
    : null;
  return (
    <Card
      sx={{
        mb: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch',
        maxHeight: 320,
        boxShadow: 2,
        borderRadius: 4,
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      {banner && (
        <Box
          sx={{ width: { xs: '100%', md: 340 }, height: 320, flexShrink: 0 }}
        >
          {!imageLoaded && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
            />
          )}
          <CardMedia
            component="img"
            image={banner}
            alt={title}
            loading="lazy"
            onLoad={() => {
              // console.log('Image loaded:', title);
              setImageLoaded(true);
            }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 3,
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 1,
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {formattedBlogDate || formattedCreatedAt}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <IconButton size="small" color="primary" onClick={onEdit}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small" color="error" onClick={onDelete}>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 700, mb: 1 }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
            }}
            color="text.secondary"
            paragraph
            sx={{ mb: 2 }}
          >
            {shortDesc || previewText}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            {
              Object.entries(BlogCategories).find(
                ([, value]) => value === category
              )?.[0]
            }
          </Typography>
        </div>
        <Link
          onClick={onPreview}
          href="#"
          underline="none"
          sx={{ color: 'orange', fontWeight: 600, fontSize: 20 }}
        >
          View Blog
        </Link>
      </Box>
    </Card>
  );
};

export default BlogCard;
