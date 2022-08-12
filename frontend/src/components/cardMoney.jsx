import { HStack, Stack, Heading } from '@chakra-ui/react';


export default function CardMoney (props) {
	const { width, title, icon } = props;
	return (
		<Stack p={5} width={width} borderRadius="lg" boxShadow='xl'>
			<HStack justify="space-between">
				<Heading fontSize={20}>{title}</Heading>
				{icon}
			</HStack>
			<Heading fontSize={25}>R$ 0.00</Heading>
		</Stack>
	)
}