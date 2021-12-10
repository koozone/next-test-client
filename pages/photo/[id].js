import {useRouter} from 'next/router';

export default function Photo({item}) {
	const router = useRouter();
	return (
		<>
			<h3>{item.title}</h3>
			<img src={item.url} />

			<button
				type="button"
				onClick={() => {
					router.back();
				}}
			>
				Go Back
			</button>
		</>
	);
}

export const getServerSideProps = async (context) => {
	const response = await fetch('http://localhost:8080');
	const photoList = await response.json();
	const photoItems = photoList.filter((item) => item.id == context.query.id);

	return {
		props: {
			item: photoItems[0],
		},
	};
};
