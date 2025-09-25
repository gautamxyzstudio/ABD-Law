import { Container } from '@mui/material';
import BlogsListing from '../blogs/blogs-listing/BlogsListing';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/adminHeader/AdminHeader';

const ManageBlogs = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header
        title="Our Blogs"
        withSecondaryButton={false}
        buttonTitle="Add New Blog"
        onPress={() => {
          navigate('/manage-blogs/add-new-blog');
        }}
      />
      <BlogsListing />
    </Container>
  );
};

export default ManageBlogs;
