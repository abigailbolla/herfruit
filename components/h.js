{data.map( (card) => {
    return(
        <Card heading={card.heading} text={card.text} image={card.image}/>


        <Grid templateColumns={["100%", null, "repeat(3, 1fr)"]} gap="10px" templateRows={["1fr 2fr"]} alignItems="end">
        <AspectRatio
          ratio="1"
          gridRow="2"
          borderTopLeftRadius="100%"
          overflow="hidden"
        >
          <Image layout="fill" src="/images/juliaclose.png"  objectFit="cover" objectPosition="left top"/>
        </AspectRatio>
        <AspectRatio
          alignSelf="stretch"
          gridRow="1 / span 2"
          borderTopRadius={`max(calc((100vw - 100px) / 6), ${390/2}px)`}
          overflow="hidden"
        >
          <Image layout="fill"  src="/images/stool.png" objectFit="cover"/>
        </AspectRatio>
        <AspectRatio
        ratio="1"
          borderTopRightRadius="100%"
          overflow="hidden"
          gridRow="2"
        >
          <Image layout="fill" src="/images/juliahand.png"  objectFit="cover" />
        </AspectRatio>
      </Grid>
    </BlockWrap>
    )
})}