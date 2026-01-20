import {
    Box,
    Flex,
    Text,
    useBreakpointValue,
    ChakraProvider,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { keyframes } from "@emotion/react";

// Custom hook for count-up animation with viewport detection
const useCountUp = (target, duration = 1000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const currentRef = ref.current; // Capture ref value

        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef); // Use captured value in cleanup
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = target / (duration / 16); // Approx. 60fps
        const interval = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(interval);
    }, [isVisible, target, duration]);

    return { count, ref };
};

const AnimatedValue = ({ value }) => {
    const hasNumber = /\d/.test(value);
    const firstNumberMatch = hasNumber ? value.match(/\d+/) : null;
    const numericValue = firstNumberMatch ? parseInt(firstNumberMatch[0], 10) : 0;

    // Always call the hook
    const { count, ref } = useCountUp(numericValue, 500);

    if (!hasNumber) {
        return <span>{value}</span>;
    }

    const suffix = value.replace(firstNumberMatch[0], "");

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
};

const achievementsData = [
    {
        value: "20+",
        label: "Years of Engineering Excellence",
        bgColor: "#FFF5F5",
        valueColor: "#bf0603",
        labelColor: "#000000",
        dashColor: "#bf0603",
    },
    // {
    //     value: "40,500+",
    //     label: "Trusted Users",
    //     bgColor: "#bf0603",
    //     valueColor: "#FFFFFF",
    //     labelColor: "#FFFFFF",
    //     dashColor: "#FFFFFF",
    // },
    // {
    //     value: "30000+",
    //     label: "Partners across India",
    //     bgColor: "#FFF5F5",
    //     valueColor: "#bf0603",
    //     labelColor: "#000000",
    //     dashColor: "#bf0603",
    // },
    // {
    //     value: "54",
    //     label: "Offices",
    //     bgColor: "#bf0603",
    //     valueColor: "#FFFFFF",
    //     labelColor: "#FFFFFF",
    //     dashColor: "#FFFFFF",
    // },
    {
        value: "15+",
        label: "Quality Checks",
        bgColor: "#bf0603",
        valueColor: "#FFFFFF",
        labelColor: "#FFFFFF",
        dashColor: "#FFFFFF",
    },
    {
        value: "24x7",
        label: "Toll-Free Support",
         bgColor: "#FFF5F5",
        valueColor: "#bf0603",
        labelColor: "#000000",
        dashColor: "#bf0603",
    },
    {
        value: "100%",
        label: "Made in India, for the World",
       bgColor: "#bf0603",
        valueColor: "#FFFFFF",
        labelColor: "#FFFFFF",
        dashColor: "#FFFFFF",
    },
];

const marqueeScroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;



const AchievedContent = ({ heading, description, data = achievementsData }) => {
    const titleFontSize = useBreakpointValue({
        base: "26px",
        md: "36px",
        lg: "48px",
    });
    // ... existing hook calls ...
    const descFontSize = useBreakpointValue({
        base: "14px",
        md: "16px",
        lg: "16px",
    });
    const cardPadding = useBreakpointValue({
        base: "10px",
        md: "15px",
        lg: "20px",
    });
    const valueFontSize = useBreakpointValue({
        base: "clamp(32px, 8vw, 48px)",
        md: "clamp(48px, 6vw, 64px)",
    });
    const labelFontSize = useBreakpointValue({
        base: "clamp(12px, 2vw, 12px)",
        md: "clamp(12px, 1.5vw, 16px)",
    });
    const labelBottomMargin = useBreakpointValue({
        base: "10px",
        md: "15px",
        lg: "20px",
    });

    // Default content if not provided props
    const defaultHeading = "Why Adiance Is the Right Choice for Trusted Security System Manufacturing Excellence";
    const defaultDescription = "Recognized as a top security camera manufacturer in India trusted by enterprises worldwide.";

    return (
        <Flex
            position="relative"
            textAlign="center"
            justifyContent="center"
            direction={"column"}
            alignItems="center"
            py={{ base: "20px", md: "20px" }}
            backgroundColor="#fff"
            width="100%"
            overflow="hidden"
            mt="1%"
        >
            <Box>
                <Text
                    as="h2"
                    color="#000"
                    fontSize={titleFontSize}
                    fontWeight="600"
                    mb={description || defaultDescription ? "1%" : "5%"}
                >
                    {heading || defaultHeading}
                </Text>

                <Text
                    fontSize={descFontSize}
                    fontWeight="500"
                    color="#000"
                    mb="3%"
                    w={{ base: "90%", md: "80%", lg: "90%" }}
                    mx="auto"
                    textAlign="center"
                    lineHeight="20px"
                    as="p"
                >
                    {description || defaultDescription}
                </Text>
            </Box>

            <Box
                w="100%"
                mx="auto"
                overflow="hidden"
                _hover={{
                    "& > div": {
                        animationPlayState: "paused",
                    },
                }}
            >
                <Flex
                    w="max-content"
                    flexWrap="nowrap"
                    animation={`${marqueeScroll} 15s linear infinite`}
                >
                    {[...achievementsData, ...achievementsData].map((item, index) => (
                        <Box
                            key={index}
                            w={["166px", "166px", "220px", "280px"]}
                            mx={{ base: 1, md: 4 }}
                            flexShrink={0}
                            backgroundColor={item.bgColor}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            padding={cardPadding}
                            borderRadius="24px"
                            position="relative"
                            aspectRatio="1/1"
                        >
                            <Text
                                as="div"
                                fontSize={valueFontSize}
                                fontWeight="600"
                                position="absolute"
                                top="50%"
                                left="50%"
                                textAlign="center"
                                transform="translate(-50%, -50%)"
                                color={item.valueColor}
                            >
                                <AnimatedValue
                                    value={item.value}
                                />
                            </Text>

                            <Text
                                as="div"
                                fontSize={labelFontSize}
                                fontWeight="700"
                                position="absolute"
                                bottom={labelBottomMargin}
                                color={item.labelColor}
                                textAlign="center"
                                width="calc(100% - 40px)"
                                left="50%"
                                transform="translateX(-50%)"
                                lineHeight="1.2"
                            >
                                {item.label}
                                <Box
                                    width="20px"
                                    height="3px"
                                    borderRadius="24px"
                                    marginTop="5px"
                                    backgroundColor={item.dashColor}
                                    mx="auto"
                                />
                            </Text>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Flex>
    );
};

const Achieved = (props) => {
    return (
        <ChakraProvider resetCSS={false}>
            <AchievedContent {...props} />
        </ChakraProvider>
    );
};

export default Achieved;
