import { useState, useEffect, useCallback, memo } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    Image,
    Link,
    useBreakpointValue,
    Spinner,
    useToast,
    Stack,
    Center,
    ChakraProvider,
} from "@chakra-ui/react";
import SmartLink from "./SmartLink";
import { getBlogs } from "../AdianceAdmin/pages/Dashboard/components/blog"; // Updated path

// The base URL for your images.
const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";
const IMAGE_BASE_URL = `${BACKEND_BASE_URL}/images/`;

const BlogPostCard = memo(({ post, layoutVariant = "textFirst" }) => {
    // Safely access nested properties with fallbacks
    const title = post.content?.title || "Untitled Blog";
    const imageUrl = `${IMAGE_BASE_URL}${post.content.mainImage}`;
    const brief =
        post.content?.brief?.[0]?.children?.[0]?.text ||
        "No description available.";
    const url = `/blog/${post.metadata?.urlWords || post._id}`;

    const textSection = (
        <Box
            p={{ base: 4, md: 6, lg: 8 }}
            w={{ base: "100%", md: "50%" }}
            bg="#bf0603"
            color="white"
            h="100%"
            minH={{ base: "300px", md: "400px", lg: "450px" }}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <VStack align="start" spacing={{ base: 3, md: 4 }} flex="1">
                <Box minH={{ base: "60px", md: "80px", lg: "100px" }} display="flex" alignItems="flex-start">
                    <Heading 
                        as="h3" 
                        size={{ base: "sm", md: "md", lg: "lg" }} 
                        lineHeight="1.3"
                    >
                        {title}
                    </Heading>
                </Box>
                <Box width="20px" height="2px" bg="white" borderRadius="full" />
                <Box minH={{ base: "60px", md: "80px", lg: "100px" }} display="flex" alignItems="flex-start">
                    <Text 
                        fontSize={{ base: "sm", md: "md" }} 
                        opacity={0.9} 
                        lineHeight="1.6"
                    >
                        {brief}
                    </Text>
                </Box>
            </VStack>
            <Flex 
                as="span" 
                fontWeight="bold" 
                display="flex" 
                alignItems="center"
                fontSize={{ base: "sm", md: "md" }}
                mt={4}
            >
                Read more
                <Box ml="2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                    >
                        <path
                            d="M20.8596 12.1622C21.4454 11.5764 21.4454 10.6267 20.8596 10.0409L11.3137 0.494961C10.7279 -0.0908254 9.77817 -0.0908255 9.19239 0.494961C8.6066 1.08075 8.6066 2.03049 9.19239 2.61628L17.6777 11.1016L9.19239 19.5868C8.6066 20.1726 8.6066 21.1224 9.19239 21.7082C9.77817 22.294 10.7279 22.294 11.3137 21.7082L20.8596 12.1622ZM0 11.1016V12.6016L19.799 12.6016V11.1016V9.60156L0 9.60156V11.1016Z"
                            fill="white"
                        />
                    </svg>
                </Box>
            </Flex>
        </Box>
    );

    const imageSection = (
        <Image
            src={imageUrl}
            alt={title}
            objectFit="cover"
            w={{ base: "100%", md: "50%" }}
            h={{ base: "250px", sm: "300px", md: "100%" }}
            minH={{ base: "250px", sm: "300px", md: "450px", lg: "500px" }}
            fallback={
                <Box
                    w={{ base: "100%", md: "50%" }}
                    h={{ base: "250px", sm: "300px", md: "100%" }}
                    minH={{ base: "250px", sm: "300px", md: "450px", lg: "500px" }}
                    bg="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text color="gray.500" fontSize="sm">No Image</Text>
                </Box>
            }
        />
    );

    const flexDirection = useBreakpointValue({
        base: "column",
        md: layoutVariant === "textFirst" ? "row" : "row-reverse",
    });

    return (
        // The entire card is now wrapped in a SmartLink
        <Link as={SmartLink} to={url} _hover={{ textDecoration: "none" }}>
            <Flex
                w="100%"
                // borderRadius={{ base: "16px", md: "24px" }}
                overflow="hidden"
                direction={flexDirection}
                h={{ base: "auto", sm: "auto", md: "450px", lg: "500px" }}
                minH={{ base: "400px", md: "450px", lg: "500px" }}
                boxShadow={{ base: "md", md: "lg" }}
                transition="all 0.3s ease"
                _hover={{
                    transform: { base: "none", md: "translateY(-4px)" },
                    boxShadow: { base: "md", md: "xl" }
                }}
            >
                {textSection}
                {imageSection}
            </Flex>
        </Link>
    );
});

// --- Placeholder Component ---
const BlogPlaceholderCard = ({ layoutVariant = "textFirst" }) => {
    const textSection = (
        <Box
            p={{ base: 4, md: 6, lg: 8 }}
            w={{ base: "100%", md: "50%" }}
            bg="#bf0603"
            color="whiteAlpha.700"
            h="100%"
            minH={{ base: "300px", md: "400px", lg: "450px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <VStack spacing={4}>
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">No blog post available.</Text>
                <Text fontSize={{ base: "sm", md: "md" }} opacity={0.8} textAlign="center">
                    Check back later for new content and insights.
                </Text>
            </VStack>
        </Box>
    );

    const imageSection = (
        <Box
            w={{ base: "100%", md: "50%" }}
            h={{ base: "250px", sm: "300px", md: "100%" }}
            minH={{ base: "250px", sm: "300px", md: "450px", lg: "500px" }}
            bg="gray.200"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Text color="gray.500" fontSize="sm">No Image</Text>
        </Box>
    );

    const flexDirection = useBreakpointValue({
        base: "column",
        md: layoutVariant === "textFirst" ? "row" : "row-reverse",
    });

    return (
        <Flex
            w="100%"
            // borderRadius={{ base: "16px", md: "24px" }}
            overflow="hidden"
            direction={flexDirection}
            h={{ base: "auto", sm: "auto", md: "450px", lg: "500px" }}
            minH={{ base: "400px", md: "450px", lg: "500px" }}
            boxShadow={{ base: "md", md: "lg" }}
        >
            {textSection}
            {imageSection}
        </Flex>
    );
};

// --- BlogViewContent Component (Main Logic) ---
const BlogViewContent = () => {
    const toast = useToast();
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const isMobile = useBreakpointValue({ base: true, lg: false });
    const svgSize = useBreakpointValue({ base: "25", md: "34" });

    const fetchBlogs = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getBlogs(1, 2, "", "latest", "published");
            if (response.status === "success" && Array.isArray(response.data)) {
                setBlogs(response.data);
            }
        } catch (error) {
            // toast({
            //   title: "Error fetching blogs",
            //   description: error.message || "An unknown error occurred.",
            //   status: "error",
            //   duration: 5000,
            //   isClosable: true,
            // });
        } finally {
            setIsLoading(false);
        }
    }, [toast]); // Removed fetchBlogs from dependency array as it's defined inside

    useEffect(() => {
        fetchBlogs();
    }, [fetchBlogs]);

    // Effect for auto-scrolling carousel on mobile
    useEffect(() => {
        if (isMobile && !isPaused && blogs.length > 1) {
            const timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [currentIndex, isMobile, isPaused, blogs.length]);

    return (
        <Box bg="white" p="2%" >
            <Flex
                direction={{ base: "column", lg: "row" }}
                align="center"
                justify="center"
                maxW="100%"
                mx="auto"
            >
                {/* Left Section */}
                <VStack
                    align={{ base: "left", lg: "start" }}
                    spacing={5}
                    w={{ base: "100%", lg: "30%" }}
                    textAlign={{ base: "left", lg: "left" }}
                    mb={{ base: 2, lg: 0 }}
                    p={{ base: "4" }}
                >
                    <Heading
                        as="h2"
                        fontSize={{ base: "24px", md: "48px" }}
                        fontWeight="600"
                        color="#444444"
                    >
                        Our Latest{" "}
                        <Box as="span" color="#bf0603">
                            Blogs
                        </Box>
                    </Heading>
                    <Flex direction="column" gap="4" w="90%">
                        <Box>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={svgSize}
                                height={svgSize}
                                viewBox="0 0 34 34"
                                fill="none"
                            >
                                <path
                                    d="M30.0367 33C31.6935 32.9989 33.0357 31.6548 33.0346 29.9979L33.0159 2.99793C33.0148 1.34108 31.6707 -0.00113787 30.0138 7.16405e-06C28.357 0.0011522 27.0148 1.34523 27.0159 3.00208L27.0325 27.0021L3.03251 27.0187C1.37566 27.0198 0.0334405 28.3639 0.0345855 30.0207C0.0357305 31.6776 1.3798 33.0198 3.03666 33.0187L30.0367 33ZM5 5L2.88015 7.12279L27.9147 32.1228L30.0346 30L32.1544 27.8772L7.11985 2.87721L5 5Z"
                                    fill="#bf0603"
                                />
                            </svg>
                        </Box>
                        <Text
                            color="black"
                            fontSize={{ base: "14px", md: "16px" }}
                            lineHeight={{ base: "18px", md: "20px" }}
                            fontWeight="500"
                            as="p"
                            textAlign="justify"
                        >
                            Welcome to our blog section, where knowledge meets inspiration,
                            explore insightful articles, expect tips, and the latest trends in
                            our field.
                        </Text>
                    </Flex>
                    <Link
                        as={SmartLink}
                        to="/blog"
                        _hover={{ textDecoration: "none" }}
                        display={{ base: "none", md: "block" }}
                    >
                        <Button
                            bg="#E7E7E7"
                            color="#bf0603"
                            _hover={{ bg: "gray.300" }}
                            size="lg"
                            px={8}
                            // borderRadius="24px"
                        >
                            View all
                            <Box ml="2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                >
                                    <path
                                        d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM2 16L3.06066 17.0607L17.0607 3.06066L16 2L14.9393 0.939339L0.93934 14.9393L2 16Z"
                                        fill="#bf0603"
                                    />
                                </svg>
                            </Box>
                        </Button>
                    </Link>
                </VStack>

                {/* Right Section */}
                <Stack
                    spacing={8}
                    w={{ base: "100%", lg: "70%" }}
                    align="center"
                    justify="center"
                    minH="300px"
                    mb={{ base: "5%", md: "0" }}
                >
                    {isLoading ? (
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="#bf0603"
                            size="xl"
                        />
                    ) : isMobile ? (
                        // --- Mobile Carousel ---
                        <Box
                            w="100%"
                            position="relative"
                            overflow="hidden"
                            minH={{ base: "450px", md: "500px", lg: "550px" }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            <Flex
                                w="100%"
                                h="100%"
                                transition="transform 0.5s ease-in-out"
                                transform={`translateX(-${currentIndex * 100}%)`}
                            >
                                {blogs.length > 0 ? (
                                    blogs.map((post) => (
                                        <Box 
                                            key={post._id} 
                                            flex="0 0 100%" 
                                            p={{ base: 2, md: 3, lg: 4 }}
                                            h="100%"
                                            display="flex"
                                            alignItems="stretch"
                                        >
                                            <BlogPostCard post={post} />
                                        </Box>
                                    ))
                                ) : (
                                    <Box 
                                        flex="0 0 100%" 
                                        h="100%"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <BlogPlaceholderCard />
                                    </Box>
                                )}
                            </Flex>
                        </Box>
                    ) : (
                        // --- Desktop Static View ---
                        Array.from({ length: 2 }).map((_, index) => {
                            const post = blogs[index];
                            const layoutVariant = index === 0 ? "textFirst" : "imageFirst";

                            return post ? (
                                <BlogPostCard
                                    key={post._id}
                                    post={post}
                                    layoutVariant={layoutVariant}
                                />
                            ) : (
                                <BlogPlaceholderCard
                                    key={`placeholder-${index}`}
                                    layoutVariant={layoutVariant}
                                />
                            );
                        })
                    )}
                </Stack>
                <Link
                    as={SmartLink}
                    to="/blog"
                    _hover={{ textDecoration: "none" }}
                    display={{ base: "block", md: "none" }}
                    mb={{ base: "5%", md: "0" }}
                >
                    <Button
                        bg="#E7E7E7"
                        color="#bf0603"
                        _hover={{ bg: "gray.300" }}
                        size="lg"
                        px={8}
                        // borderRadius="24px"
                    >
                        View all
                        <Box ml="2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                            >
                                <path
                                    d="M17.5 2C17.5 1.17157 16.8284 0.499999 16 0.499999L2.5 0.5C1.67157 0.5 0.999999 1.17157 1 2C1 2.82843 1.67157 3.5 2.5 3.5L14.5 3.5L14.5 15.5C14.5 16.3284 15.1716 17 16 17C16.8284 17 17.5 16.3284 17.5 15.5L17.5 2ZM2 16L3.06066 17.0607L17.0607 3.06066L16 2L14.9393 0.939339L0.93934 14.9393L2 16Z"
                                    fill="#bf0603"
                                />
                            </svg>
                        </Box>
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};

const BlogView = (props) => {
    return (
        <ChakraProvider resetCSS={false}>
            <BlogViewContent {...props} />
        </ChakraProvider>
    );
};

export default BlogView;
