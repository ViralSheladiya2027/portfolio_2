import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <>
     <section id="portfolio">
        <Box
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexgrow: 1,
            p: 3,
            width: "100%",
          }}
        >
          <Typography variant="h3">Portfolio</Typography>
          <Divider className="head_line" />
          <Box height={5} />
          <Divider className="head_line2" />
          <Box height={25} />
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          E-Com
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Demo</Button>
        <Button size="small">Github</Button>
      </CardActions>
    </Card>
          </Box>
          </section>
    </>
  )
}

export default Portfolio