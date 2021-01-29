import React from 'react';
import { Grid, LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <LinearProgress color="secondary" /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.slice(0).reverse().map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4} lg={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
