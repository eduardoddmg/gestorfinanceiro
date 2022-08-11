import { Heading, Spinner, Center, Stack } from '@chakra-ui/react';
import { userContext } from '../context';
import { useContext, useEffect, useState, useCallback } from 'react';
import LayoutComponent from '../components/LayoutComponent';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const [loading, setLoading] = useState(true);

	const { user } = useContext(userContext);
	const navigate = useNavigate();

	useEffect(() => !user ? navigate('/') : setLoading(false), [user]);

	return (
		<LayoutComponent>
			{loading ?
			(<Center h="100vh">
				<Spinner color="green.500" size="xl" />
			</Center> ): (
			<Stack minH="100vh" p={5}>
				<Heading>Seja bem-vindo, {user}</Heading>
			</Stack>
			)}
		</LayoutComponent>
	)
}