import UpdateItem from '../components/UpdateItem';

const Home = (props) => (
	<div>
		<UpdateItem id={props.query.id} />
	</div>
);

export default Home;
