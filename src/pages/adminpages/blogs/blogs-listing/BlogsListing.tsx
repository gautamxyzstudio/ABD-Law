import {
  Box,
  Typography,
  Skeleton,
  Pagination,
  InputAdornment,
  IconButton,
  TextField,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import { Virtuoso } from 'react-virtuoso';
import BlogCard from './BlogCard';
import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useSnackBarStore from '../../../../store/snackBarStore';
import { useLoadingStore } from '../../../../store/loadingStore';
import { useDeleteBlog, useGetBlogs, type TransformedBlog } from '../../../../hooks/useBlog';
import {debounce } from 'lodash'
import ConfirmationDialog from '../../../../components/confirmation-dialog/ConfirmationDialog';

const ListingCardLoading = () => {
  return (
    <div className="mb-2 h-[320px] gap-x-4 rounded-lg bg-white flex flex-row ">
      <Skeleton
        variant="rectangular"
        sx={{
          width: { xs: '100%', md: 340 },
          height: '320px',

          borderRadius: '10px',
          flexShrink: 0,
        }}
      />
      <div className="flex w-full flex-col justify-start gap-1 ">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <Skeleton variant="text" width={80} height={24} />
          <Skeleton variant="text" height={40} width="70%" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <Skeleton variant="text" height={40} width="90%" />
          <Skeleton variant="text" height={40} width="90%" />
          <Skeleton variant="text" height={40} width="90%" />
        </Box>
      </div>
    </div>
  );
};

const BlogsListing = () => {
  const navigate = useNavigate();
  const { setSnackBar } = useSnackBarStore();
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const [search, setSearch] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const { setLoading } = useLoadingStore();
  const { data, isLoading } = useGetBlogs(page, limit, search);
  const { mutate: deleteBlog, isPending: isDeleting } = useDeleteBlog();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<TransformedBlog | null>(
    null
  );

  // Debounced search
  const debouncedSetSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
      setPage(1);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSetSearch(searchValue);
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [searchValue, debouncedSetSearch]);

  useEffect(() => {
    setLoading(isDeleting);
  }, [isDeleting, setLoading]);

  const ListingFooter = () => {
    return <div className="h-10" />;
  };

  const handleEdit = (blog: TransformedBlog) => {
    navigate(`/manage-blogs/edit-blog`, { state: { blog } });
  };

  const handleDeleteClick = (blog: TransformedBlog) => {
    setBlogToDelete(blog);
    setDeleteDialogOpen(true);
  };

  const handlePreview = (blog: TransformedBlog) => {
    const url = blog.title.replace(/\s+/g, '-');
    window.open(`https://sukhbrar.ca/blogs/${url}`, '_blank');
  };

  const handleDeleteConfirm = () => {
    if (blogToDelete) {
      deleteBlog(blogToDelete.id.toString(), {
        onSuccess: () => {
          setSnackBar('Blog deleted successfully', 'success');
          setDeleteDialogOpen(false);
          setBlogToDelete(null);
        },
        onError: () => {
          setSnackBar('Failed to delete blog', 'error');
          setDeleteDialogOpen(false);
          setBlogToDelete(null);
        },
      });
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setBlogToDelete(null);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ mt: 4 }}>
      {/* Search Bar */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <TextField
          label="Search Blog Title"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          size="small"
          sx={{ minWidth: 300 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {searchValue && (
                  <IconButton
                    onClick={() => setSearchValue('')}
                    edge="end"
                    disabled={!searchValue}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          height: '70vh',
        }}
      >
        {isLoading ? (
          <div className="flex flex-col gap-3 overflow-auto h-full ">
            {Array.from({ length: 10 }).map((_, index) => (
              <ListingCardLoading key={index} />
            ))}
          </div>
        ) : (
          <Virtuoso
            components={{
              Footer: ListingFooter,
              EmptyPlaceholder: () => (
                <Typography
                  variant="h6"
                  textAlign="center"
                  color="text.secondary"
                >
                  No blogs found
                </Typography>
              ),
            }}
            data={data?.data || []}
            overscan={200}
            increaseViewportBy={{ top: 200, bottom: 200 }}
            itemContent={(_index, blog: TransformedBlog) => (
              <BlogCard
                title={blog.title}
                category={blog.category}
                shortDesc={blog.shortDesc}
                blogData={blog.blogData}
                createdAt={blog.createdAt}
                blogDate={blog.blogDate}
                banner={blog.smallBanner ?? ''}
                onEdit={() => handleEdit(blog)}
                onDelete={() => handleDeleteClick(blog)}
                onPreview={() => handlePreview(blog)}
              />
            )}
          />
        )}
      </Box>
      {/* Pagination */}
      {data && data.total > limit && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination
            count={Math.ceil(data.total / limit)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            size="large"
          />
        </Box>
      )}
      <ConfirmationDialog
        open={deleteDialogOpen}
        title="Delete Blog"
        message={`Are you sure you want to delete "${blogToDelete?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        confirmColor="error"
      />
    </Box>
  );
};

export default BlogsListing;
