import { Box } from "@chakra-ui/react"

export default function BlockWrap(props) {
    return (
    <Box paddingY="100px" paddingX={["35px", "50px"]} {...props}>
        <Box maxWidth="1200px" marginX="auto">
            {props.children}
        </Box>
    </Box>
    )
}